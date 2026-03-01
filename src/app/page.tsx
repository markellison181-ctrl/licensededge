"use client";

import Link from "next/link";
import { useState } from "react";
import ExitIntentPopup from "../components/ExitIntentPopup";
import StickyBottomCTA from "../components/StickyBottomCTA";
import AnimatedStats from "../components/AnimatedStats";
import NewsletterPreview from "../components/NewsletterPreview";
import FAQSection from "../components/FAQSection";
import TrustBar from "../components/TrustBar";

/* ── Cannabis Industry SVG Icons (Professional style) ── */
const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);
const IconScale = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
  </svg>
);
const IconMap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
  </svg>
);
const IconDocumentCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a9 9 0 0 1 9 9M16.5 18.75h-9m9-3.75h-9m3.75-6h-3.75" />
  </svg>
);
const IconChart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);
const IconBell = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  </svg>
);
const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gold mt-0.5 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("You're in. Check your inbox for confirmation.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@cannabis.com"
          required
          className="flex-1 px-4 py-3 rounded bg-white/10 border border-white/30 text-white placeholder-gray-500 text-sm transition-all duration-200"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-gold text-emerald px-6 py-3 rounded font-semibold text-sm hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-50 whitespace-nowrap"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe Free"}
        </button>
      </form>
      {message && (
        <p className={`text-sm mt-3 ${status === "success" ? "text-green-400" : "text-red-400"}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Exit Intent Popup */}
      <ExitIntentPopup />
      
      {/* Sticky Bottom CTA */}
      <StickyBottomCTA />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0d2118 0%, #0a1a14 100%)" }}>
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(201,168,76,0.4) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-sm font-medium">Free weekly edition every Monday</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Stay ahead in{" "}
              <span className="text-gold">cannabis regulation</span>{" "}
              before changes impact your business.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl">
              Weekly intelligence on cannabis licensing, regulatory changes, and
              market entry strategies across all legal states.
            </p>
            <div id="subscribe">
              <SubscribeForm />
              <p className="text-gray-400 text-xs mt-4">
                Free weekly digest. No spam. Unsubscribe anytime. Industry-focused.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Bar */}
      <TrustBar />

      {/* Animated Stats */}
      <AnimatedStats />

      {/* What You Get */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Every issue delivers <span className="text-gold">six regulatory signals</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              No fluff, no filler. Each edition of LicensedEdge is structured to give you
              the cannabis regulatory intelligence that matters in 5 minutes or less.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <IconShield />,
                title: "Regulatory Alert",
                description: "The most important regulatory change or compliance update that could impact your cannabis business operations.",
              },
              {
                icon: <IconMap />,
                title: "State-by-State Tracker",
                description: "New license application windows, regulatory changes, and policy updates across all 40+ legal cannabis states.",
              },
              {
                icon: <IconDocumentCheck />,
                title: "License Opportunities",
                description: "Upcoming license application periods, renewal deadlines, and new market entry opportunities by state and license type.",
              },
              {
                icon: <IconScale />,
                title: "Compliance Watch",
                description: "Banking updates, tax policy changes, testing requirements, and packaging regulation modifications that affect operations.",
              },
              {
                icon: <IconChart />,
                title: "Market Intelligence",
                description: "Data on license values, market performance metrics, M&A activity, and investment trends in the cannabis sector.",
              },
              {
                icon: <IconBell />,
                title: "Pro: Daily Alerts",
                description: "Pro subscribers get daily regulatory alerts filtered by state, license type, and business stage. Plus compliance calendar access.",
              },
            ].map((item, i) => (
              <div key={i} className="card-hover bg-white/[0.06] border border-white/15 rounded-lg p-6 hover:border-gold/30">
                <div className="text-gold mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 tracking-tight">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Preview */}
      <NewsletterPreview />

      {/* FAQ Section */}
      <FAQSection />

      {/* Pricing Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            Start free. Upgrade when you need more.
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            The free weekly edition gives you essential regulatory signals. Pro and Enterprise unlock
            daily alerts, compliance calendars, and multi-state tracking.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-hover bg-gradient-to-b from-emerald-500/80 to-emerald-500/40 border border-white/10 rounded-xl p-8">
              <div className="text-gray-300 label-uppercase mb-2">Free</div>
              <div className="text-4xl font-bold mb-1">$0</div>
              <div className="text-gray-400 text-sm mb-6">forever</div>
              <ul className="space-y-3 text-sm text-gray-300 text-left mb-8">
                <li className="flex items-start gap-2"><IconCheck /> Weekly regulatory digest</li>
                <li className="flex items-start gap-2"><IconCheck /> Top 5 state updates</li>
                <li className="flex items-start gap-2"><IconCheck /> License opportunity alerts</li>
                <li className="flex items-start gap-2"><IconCheck /> Compliance highlights</li>
              </ul>
              <Link href="/#subscribe" className="block w-full text-center border border-gold text-gold px-6 py-3 rounded font-semibold text-sm hover:bg-gold hover:text-emerald transition-all duration-200">
                Subscribe Free
              </Link>
            </div>
            <div className="card-hover bg-gradient-to-b from-emerald-500/80 to-emerald-500/40 border-2 border-gold rounded-xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-emerald text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="text-gold label-uppercase mb-2">Pro</div>
              <div className="text-4xl font-bold mb-1">$29</div>
              <div className="text-gray-400 text-sm mb-6">per month</div>
              <ul className="space-y-3 text-sm text-gray-300 text-left mb-8">
                <li className="flex items-start gap-2"><IconCheck /> Everything in Free</li>
                <li className="flex items-start gap-2"><IconCheck /> Daily regulatory alerts</li>
                <li className="flex items-start gap-2"><IconCheck /> State-specific filters</li>
                <li className="flex items-start gap-2"><IconCheck /> Compliance calendar access</li>
                <li className="flex items-start gap-2"><IconCheck /> License deadline tracker</li>
              </ul>
              <Link href="/pricing" className="block w-full text-center bg-gold text-emerald px-6 py-3 rounded font-semibold text-sm hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20">
                Start Pro Trial
              </Link>
            </div>
            <div className="card-hover bg-gradient-to-b from-emerald-500/80 to-emerald-500/40 border border-white/10 rounded-xl p-8">
              <div className="text-gray-300 label-uppercase mb-2">Enterprise</div>
              <div className="text-4xl font-bold mb-1">$99</div>
              <div className="text-gray-400 text-sm mb-6">per month</div>
              <ul className="space-y-3 text-sm text-gray-300 text-left mb-8">
                <li className="flex items-start gap-2"><IconCheck /> Everything in Pro</li>
                <li className="flex items-start gap-2"><IconCheck /> Up to 10 team seats</li>
                <li className="flex items-start gap-2"><IconCheck /> API access</li>
                <li className="flex items-start gap-2"><IconCheck /> Custom state reports</li>
                <li className="flex items-start gap-2"><IconCheck /> Priority support</li>
              </ul>
              <Link href="/pricing" className="block w-full text-center border border-gold text-gold px-6 py-3 rounded font-semibold text-sm hover:bg-gold hover:text-emerald transition-all duration-200">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0d2118]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            Don&apos;t let regulatory changes catch you off-guard.
          </h2>
          <p className="text-gray-300 mb-8">
            Join the cannabis operators, compliance officers, and investors who
            start every week with LicensedEdge.
          </p>
          <div className="flex justify-center">
            <SubscribeForm />
          </div>
        </div>
      </section>
    </>
  );
}
