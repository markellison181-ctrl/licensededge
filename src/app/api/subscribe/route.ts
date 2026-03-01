import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

    if (!SENDGRID_API_KEY) {
      console.error("SENDGRID_API_KEY not configured");
      return NextResponse.json(
        { error: "Subscription service temporarily unavailable." },
        { status: 500 }
      );
    }

    // Add contact to SendGrid
    const sgResponse = await fetch("https://api.sendgrid.com/v3/marketing/contacts", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contacts: [
          {
            email: email.toLowerCase().trim(),
            custom_fields: {},
          },
        ],
      }),
    });

    if (!sgResponse.ok) {
      const errorData = await sgResponse.json();
      console.error("SendGrid error:", errorData);
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    // Send welcome email
    await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: email.toLowerCase().trim() }] }],
        from: {
          email: "hello@contractpulse.io",
          name: "ContractPulse",
        },
        subject: "Welcome to ContractPulse — Your Government Contract Intelligence",
        content: [
          {
            type: "text/html",
            value: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background-color: #0B3D2E; padding: 30px; border-radius: 8px;">
                  <h1 style="color: #D4A853; margin: 0 0 20px;">Welcome to ContractPulse</h1>
                  <p style="color: #ffffff; line-height: 1.6;">
                    You're now subscribed to the free weekly edition of ContractPulse — Canadian government contract intelligence delivered every Monday.
                  </p>
                  <p style="color: #cccccc; line-height: 1.6;">
                    Every issue includes:<br/>
                    • Signal of the Week — the one award or trend you can't miss<br/>
                    • Top Contract Awards — $ amounts, departments, winners<br/>
                    • Who's Moving — key personnel changes<br/>
                    • Policy Watch — procurement policy updates<br/>
                    • Numbers That Matter — key data points
                  </p>
                  <p style="color: #ffffff; line-height: 1.6;">
                    Your first issue arrives this Monday. In the meantime, <a href="https://contractpulse.io/archive/sample" style="color: #D4A853;">read our sample issue</a>.
                  </p>
                  <p style="color: #999999; font-size: 12px; margin-top: 30px;">
                    ContractPulse is a SignalStack Media newsletter.<br/>
                    181 Bay Street, Suite 1400, Toronto ON M5J 2T3<br/>
                    <a href="https://contractpulse.io/unsubscribe" style="color: #D4A853;">Unsubscribe</a>
                  </p>
                </div>
              </div>
            `,
          },
        ],
      }),
    });

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to ContractPulse!",
    });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
