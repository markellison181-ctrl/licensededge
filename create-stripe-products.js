const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createProducts() {
  try {
    console.log('Creating LicensedEdge products...');

    // Create Pro product
    const proProduct = await stripe.products.create({
      name: 'LicensedEdge Pro',
      description: 'Daily cannabis regulatory intelligence with state-specific filters and compliance calendar access',
      metadata: {
        tier: 'pro',
        newsletter: 'licensededge'
      }
    });

    // Create Pro monthly price
    const proMonthlyPrice = await stripe.prices.create({
      product: proProduct.id,
      unit_amount: 2900, // $29.00
      currency: 'usd',
      recurring: {
        interval: 'month'
      },
      metadata: {
        tier: 'pro',
        billing: 'monthly'
      }
    });

    // Create Pro annual price (with 17% discount)
    const proAnnualPrice = await stripe.prices.create({
      product: proProduct.id,
      unit_amount: 29000, // $290.00 (17% off $348)
      currency: 'usd',
      recurring: {
        interval: 'year'
      },
      metadata: {
        tier: 'pro',
        billing: 'annual'
      }
    });

    // Create Enterprise product
    const enterpriseProduct = await stripe.products.create({
      name: 'LicensedEdge Enterprise',
      description: 'Complete cannabis regulatory intelligence platform with API access, custom reports, and team features',
      metadata: {
        tier: 'enterprise',
        newsletter: 'licensededge'
      }
    });

    // Create Enterprise monthly price
    const enterpriseMonthlyPrice = await stripe.prices.create({
      product: enterpriseProduct.id,
      unit_amount: 9900, // $99.00
      currency: 'usd',
      recurring: {
        interval: 'month'
      },
      metadata: {
        tier: 'enterprise',
        billing: 'monthly'
      }
    });

    // Create Enterprise annual price (with 17% discount)
    const enterpriseAnnualPrice = await stripe.prices.create({
      product: enterpriseProduct.id,
      unit_amount: 99000, // $990.00 (17% off $1188)
      currency: 'usd',
      recurring: {
        interval: 'year'
      },
      metadata: {
        tier: 'enterprise',
        billing: 'annual'
      }
    });

    console.log('\n✅ Products created successfully!');
    console.log('\nPRODUCT IDs:');
    console.log(`Pro Product: ${proProduct.id}`);
    console.log(`Enterprise Product: ${enterpriseProduct.id}`);
    
    console.log('\nPRICE IDs:');
    console.log(`Pro Monthly: ${proMonthlyPrice.id}`);
    console.log(`Pro Annual: ${proAnnualPrice.id}`);
    console.log(`Enterprise Monthly: ${enterpriseMonthlyPrice.id}`);
    console.log(`Enterprise Annual: ${enterpriseAnnualPrice.id}`);

    console.log('\n📝 Add these to your .env.local:');
    console.log(`NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID=${proMonthlyPrice.id}`);
    console.log(`NEXT_PUBLIC_STRIPE_PRO_ANNUAL_PRICE_ID=${proAnnualPrice.id}`);
    console.log(`NEXT_PUBLIC_STRIPE_ENTERPRISE_MONTHLY_PRICE_ID=${enterpriseMonthlyPrice.id}`);
    console.log(`NEXT_PUBLIC_STRIPE_ENTERPRISE_ANNUAL_PRICE_ID=${enterpriseAnnualPrice.id}`);

  } catch (error) {
    console.error('❌ Error creating products:', error);
  }
}

createProducts();