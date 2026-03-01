import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err: any) {
    console.error(`Webhook signature verification failed.`, err.message);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const checkoutSession = event.data.object as Stripe.Checkout.Session;
      console.log('✅ Checkout completed:', {
        sessionId: checkoutSession.id,
        customerEmail: checkoutSession.customer_email,
        tier: checkoutSession.metadata?.tier,
      });

      // Here you would:
      // 1. Save customer to your database
      // 2. Send welcome email
      // 3. Add to email list
      // 4. Track conversion
      break;

    case 'customer.subscription.created':
      const subscription = event.data.object as Stripe.Subscription;
      console.log('🎉 Subscription created:', {
        subscriptionId: subscription.id,
        customerId: subscription.customer,
        tier: subscription.metadata?.tier,
      });
      break;

    case 'customer.subscription.updated':
      const updatedSubscription = event.data.object as Stripe.Subscription;
      console.log('📝 Subscription updated:', {
        subscriptionId: updatedSubscription.id,
        status: updatedSubscription.status,
      });
      break;

    case 'customer.subscription.deleted':
      const deletedSubscription = event.data.object as Stripe.Subscription;
      console.log('❌ Subscription cancelled:', {
        subscriptionId: deletedSubscription.id,
        customerId: deletedSubscription.customer,
      });
      break;

    case 'invoice.payment_failed':
      const failedInvoice = event.data.object as Stripe.Invoice;
      console.log('💳 Payment failed:', {
        invoiceId: failedInvoice.id,
        customerId: failedInvoice.customer,
      });
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}