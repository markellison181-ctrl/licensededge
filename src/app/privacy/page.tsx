import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — ContractPulse",
  description: "Privacy Policy for ContractPulse by SignalStack Media — PIPEDA and CASL compliant.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-gray-400 mb-12">Last updated: February 28, 2026</p>
      <div className="space-y-8 text-gray-300 leading-relaxed text-sm">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
          <p>SignalStack Media Inc. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates ContractPulse (contractpulse.io). This Privacy Policy explains how we collect, use, disclose, and protect your personal information in compliance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and Canada&apos;s Anti-Spam Legislation (CASL).</p>
          <p className="mt-3">SignalStack Media Inc. is located at 181 Bay Street, Suite 1400, Toronto, ON M5J 2T3, Canada.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
          <p><strong className="text-white">Directly provided:</strong> Email address (subscription), name and company (optional), payment information (via Stripe — we do not store card numbers), and support communications.</p>
          <p className="mt-3"><strong className="text-white">Automatically collected:</strong> IP address and approximate location, browser and device info, pages visited and engagement patterns, email open and click rates, and referral source.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
          <p>We use your information to deliver newsletters and services, process payments, improve our content and user experience, send service communications, comply with legal obligations, and analyze aggregate usage trends.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Consent</h2>
          <p>By subscribing, you provide express consent to receive commercial electronic messages per CASL. You may withdraw consent at any time by clicking unsubscribe in any email, emailing privacy@contractpulse.io, or writing to our mailing address. Withdrawal is processed within 10 business days.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Disclosure</h2>
          <p>We may share information with service providers (SendGrid for email, Stripe for payments, Vercel for hosting), when required by law, or in connection with a business transfer (with advance notice). We do not sell or rent your personal information.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Data Storage and Transfers</h2>
          <p>Your data may be stored in Canada and the United States where our service providers operate. We ensure adequate safeguards per PIPEDA for international transfers.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. Security</h2>
          <p>We implement appropriate technical and organizational measures including TLS encryption, secure storage, and access controls. No system is 100% secure; we cannot guarantee absolute security.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">8. Retention</h2>
          <p>Active subscriber data: duration of subscription plus 30 days. Payment records: 7 years (Canadian tax law). Analytics: 26 months. Support communications: 3 years.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">9. Your Rights (PIPEDA)</h2>
          <p>You may request access to your personal information, request correction of inaccuracies, withdraw consent (subject to legal restrictions), and file a complaint with the Office of the Privacy Commissioner of Canada. Contact our Privacy Officer at privacy@contractpulse.io. We respond within 30 days.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">10. Cookies</h2>
          <p>We use essential cookies (site functionality), analytics cookies (usage understanding), and preference cookies (your settings). Control cookies through your browser settings.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">11. Contact</h2>
          <p>Privacy Officer, SignalStack Media Inc.<br />181 Bay Street, Suite 1400, Toronto, ON M5J 2T3<br />Email: privacy@contractpulse.io</p>
          <p className="mt-3">Complaints: Office of the Privacy Commissioner of Canada — www.priv.gc.ca</p>
        </section>
      </div>
    </div>
  );
}
