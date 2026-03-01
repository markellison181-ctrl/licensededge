import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — ContractPulse",
  description: "Terms of Service for ContractPulse newsletter by SignalStack Media.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
      <p className="text-gray-400 mb-12">Last updated: February 28, 2026</p>
      <div className="space-y-8 text-gray-300 leading-relaxed text-sm">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
          <p>These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Subscriber,&quot; &quot;you,&quot; or &quot;your&quot;) and SignalStack Media Inc. (&quot;SignalStack,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a corporation incorporated under the laws of Ontario, Canada, with its principal office at 181 Bay Street, Suite 1400, Toronto, ON M5J 2T3.</p>
          <p className="mt-3">By accessing ContractPulse (contractpulse.io), subscribing to our newsletter, or using any of our services, you agree to be bound by these Terms and our Privacy Policy.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
          <p>ContractPulse is a niche intelligence newsletter service providing analysis of Canadian federal government contract awards, procurement trends, policy changes, and related data. Our services include free and paid newsletter subscriptions, web-based content and archives, searchable procurement data (Pro and Enterprise tiers), API access (Enterprise tier), and data export functionality.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. Subscription and Account</h2>
          <p>To subscribe, you must provide a valid email address. For paid subscriptions, valid payment information is required. You represent that you are at least 18 years of age and that all information you provide is accurate. You are responsible for maintaining the confidentiality of your account.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Paid Subscriptions and Billing</h2>
          <p>Paid subscriptions (Pro at $29 CAD/month, Enterprise at $99 CAD/month) are billed monthly through Stripe. Applicable taxes (HST) will be added. You may cancel at any time; cancellation takes effect at the end of your billing period. No partial refunds except as required by law. We may change pricing with 30 days&apos; notice.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Free Trial</h2>
          <p>Pro subscriptions include a 14-day free trial. If you do not cancel before the trial ends, your payment method will be charged. You may cancel the trial at any time without charge.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Intellectual Property</h2>
          <p>All content is the property of SignalStack Media Inc. or its licensors. Your subscription grants a limited, non-exclusive, non-transferable license for personal or internal business use. Redistribution, republication, or resale of our content is prohibited without written consent. Enterprise subscribers may share within their organization per their agreement.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. Data and Information Disclaimer</h2>
          <p>ContractPulse provides analysis based on publicly available government procurement data. While we make reasonable efforts to ensure accuracy, we do not guarantee completeness or accuracy. Our content is for informational purposes only and does not constitute legal, financial, or professional advice. Contract values, dates, and details should be verified through official sources before making business decisions.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">8. API Usage (Enterprise)</h2>
          <p>Enterprise API access is subject to rate limits (10,000 requests/month standard). API credentials are non-transferable. Automated scraping or redistribution of API data is prohibited. We reserve the right to suspend API access for abuse.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">9. CASL Compliance</h2>
          <p>We comply with Canada&apos;s Anti-Spam Legislation (CASL). By subscribing, you provide express consent to receive commercial electronic messages. Every message identifies SignalStack Media as the sender, includes contact information, and provides a functioning unsubscribe mechanism. Unsubscribe requests are processed within 10 business days.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">10. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, SignalStack Media shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Our total aggregate liability shall not exceed amounts paid by you in the 12 months preceding the claim.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">11. Governing Law</h2>
          <p>These Terms are governed by the laws of Ontario, Canada. Disputes are subject to the exclusive jurisdiction of the courts of Ontario, sitting in Toronto.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">12. Contact</h2>
          <p>SignalStack Media Inc.<br />181 Bay Street, Suite 1400, Toronto, ON M5J 2T3<br />Email: hello@contractpulse.io</p>
        </section>
      </div>
    </div>
  );
}
