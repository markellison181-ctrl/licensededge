"use client";

import { useState } from "react";
import Link from "next/link";

const SUPABASE_URL = "https://vsbwqlkbcgvmphuqfgqb.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzYndxbGtiY2d2bXBodXFmZ3FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4MTgyMjYsImV4cCI6MjA4NjM5NDIyNn0.wGbB-LZl3UfnE1iNz9pR9dyGuc-bFoP8cxZ90toxSHg";

const states = [
  { rank: 1, state: "New York", status: "Adult-Use + Medical", appWindow: "Rolling — CAURD Round 2 open", fee: "$2,000–$210,000", difficulty: "High", note: "CAURD social equity licenses prioritized. Conditional adult-use retail still processing — expect 6-12 month approval timeline. Municipal opt-in required." },
  { rank: 2, state: "Ohio", status: "Adult-Use (new) + Medical", appWindow: "Q2 2026 expected", fee: "$5,000–$50,000", difficulty: "Medium", note: "Adult-use sales began Dec 2025. New cultivator and processor licenses expected Q2 2026. First-mover advantage is massive." },
  { rank: 3, state: "Florida", status: "Medical (adult-use pending)", appWindow: "Amendment 3 failed — medical only", fee: "$60,830", difficulty: "Very High", note: "Vertically integrated only. 25 MMTC licenses exist. Secondary market sales $50-80M per license. Watch 2026 legislative session for potential adult-use bill." },
  { rank: 4, state: "California", status: "Adult-Use + Medical", appWindow: "Rolling — local jurisdiction dependent", fee: "$1,000–$120,000", difficulty: "High", note: "Over-saturated in many markets. Social equity programs in LA, Oakland, SF. Key: secure local permit FIRST — state license follows." },
  { rank: 5, state: "New Jersey", status: "Adult-Use + Medical", appWindow: "Rolling", fee: "$2,000–$50,000", difficulty: "Medium-High", note: "Market maturing — 120+ dispensaries. Micro-business licenses best entry point ($1,000 fee). Social equity applicants get priority review." },
  { rank: 6, state: "Illinois", status: "Adult-Use + Medical", appWindow: "Social equity round ongoing", fee: "$2,500–$30,000", difficulty: "High", note: "Litigation delayed craft grower licenses. Social equity dispensary round active. $3.5B annual market — worth the fight." },
  { rank: 7, state: "Michigan", status: "Adult-Use + Medical", appWindow: "Rolling", fee: "$3,000–$66,000", difficulty: "Medium", note: "Most open market in the Midwest. Price compression hitting cultivators hard — $800/lb wholesale. Retail and processing more profitable." },
  { rank: 8, state: "Missouri", status: "Adult-Use + Medical", appWindow: "Micro-business round Q1 2026", fee: "$1,500–$25,000", difficulty: "Medium", note: "Micro-business licenses (cultivation + manufacturing + dispensary) launching Q1 2026. Best new opportunity in the Midwest." },
  { rank: 9, state: "Maryland", status: "Adult-Use + Medical", appWindow: "Standard licenses Q2 2026", fee: "$5,000–$50,000", difficulty: "Medium", note: "Adult-use launched Jul 2023. Social equity licenses converting. Standard license applications expected mid-2026." },
  { rank: 10, state: "Minnesota", status: "Adult-Use (launching)", appWindow: "Applications opened Jan 2026", fee: "$2,000–$20,000", difficulty: "Medium-Low", note: "Brand new market — first licenses issued Q1 2026. Social equity and lower-potency hemp-derived edible market active." },
  { rank: 11, state: "Connecticut", status: "Adult-Use + Medical", appWindow: "Social equity ongoing", fee: "$3,000–$25,000", difficulty: "Medium", note: "Social equity licenses get 50% of all new licenses. Micro-cultivator license is accessible entry point." },
  { rank: 12, state: "Virginia", status: "Adult-Use (retail pending)", appWindow: "Retail expected late 2026", fee: "TBD", difficulty: "Medium", note: "Home grow legal since 2021. Retail sales bill advancing — could open late 2026. Watch for application announcements." },
  { rank: 13, state: "Pennsylvania", status: "Medical only", appWindow: "No new rounds announced", fee: "$5,000–$10,000", difficulty: "Very High", note: "Adult-use bill gaining traction — Gov. Shapiro supportive. If passed, existing medical operators get first crack. Watch closely." },
  { rank: 14, state: "Arizona", status: "Adult-Use + Medical", appWindow: "Social equity ongoing", fee: "$2,500–$25,000", difficulty: "Medium", note: "Mature market, good margins. Social equity licenses still available. 26 for-profit licenses still being issued." },
  { rank: 15, state: "Massachusetts", status: "Adult-Use + Medical", appWindow: "Rolling", fee: "$1,500–$50,000", difficulty: "Medium", note: "Delivery-only licenses are the easiest entry point. Host community agreements still required — negotiate hard on community impact fees." },
  { rank: 16, state: "Colorado", status: "Adult-Use + Medical", appWindow: "Rolling", fee: "$1,000–$14,000", difficulty: "Low-Medium", note: "Most mature market in US. Price compression severe — $400/lb wholesale. Best for experienced operators who can compete on efficiency." },
  { rank: 17, state: "Oregon", status: "Adult-Use + Medical", appWindow: "Moratorium lifted 2025", fee: "$1,000–$5,750", difficulty: "Low", note: "Oversupplied. 2-year production moratorium lifted. Interstate commerce pilot program could be transformative — watch HB 3000." },
  { rank: 18, state: "Delaware", status: "Adult-Use (launching)", appWindow: "Applications expected 2026", fee: "TBD", difficulty: "Medium", note: "Adult-use signed Apr 2023 but no retail yet. Commissioner appointed. Application process expected to launch 2026." },
  { rank: 19, state: "Hawaii", status: "Medical + Adult-Use pending", appWindow: "Adult-use bill advancing", fee: "$5,000 (medical)", difficulty: "High", note: "Adult-use legislation progressing. Limited license model expected. Medical operators will have significant advantage." },
  { rank: 20, state: "Kentucky", status: "Medical (new)", appWindow: "Applications 2025, sales 2026", fee: "$5,000–$30,000", difficulty: "Medium", note: "Medical program launching 2026. Cultivator, processor, and dispensary licenses. First-mover advantage in conservative market." },
];

export default function CannabisLicenseGuideReport() {
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/subscribers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          email,
          newsletter: "licensededge",
          source: "lead-magnet-state-cannabis-guide-2026",
          status: "active",
        }),
      });
      if (res.ok || res.status === 409) {
        setUnlocked(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← Back to LicensedEdge
        </Link>

        <div className="inline-block bg-purple-500/10 text-purple-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          FREE GUIDE — 2026 EDITION
        </div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          State-by-State Cannabis License Guide
          <span className="text-purple-400"> 2026</span>
        </h1>

        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
          The 20 most important cannabis markets ranked by opportunity. Application windows,
          fees, difficulty ratings, and insider analysis for every state.
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-12">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
            20 states covered
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            Fees, timelines, difficulty
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v9.75" /></svg>
            Updated March 2026
          </span>
        </div>

        {/* Preview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Preview: Top 5 Markets</h2>
          <div className="space-y-4">
            {states.slice(0, 5).map((s) => (
              <div key={s.rank} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="bg-purple-500/20 text-purple-400 text-xs font-bold px-2 py-0.5 rounded">#{s.rank}</span>
                      <span className="font-semibold text-white">{s.state}</span>
                      <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded">{s.status}</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{s.note}</p>
                    <div className="flex gap-3 mt-2 text-xs">
                      <span className="text-purple-300">Fee: {s.fee}</span>
                      <span className="text-gray-500">|</span>
                      <span className="text-purple-300">Difficulty: {s.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {!unlocked ? (
          <div className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-700 rounded-xl p-8 text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950 z-10 pointer-events-none" />
              <div className="opacity-30 blur-sm space-y-3">
                {states.slice(5, 10).map((s) => (
                  <div key={s.rank} className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-left">
                    <span className="font-semibold">{s.state}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2">Get the Full Guide — Free</h3>
            <p className="text-gray-400 mb-6">
              Enter your email to unlock all 20 states, application windows, fee schedules,
              and our insider analysis on where the best opportunities are in 2026.
            </p>

            <form onSubmit={handleUnlock} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition disabled:opacity-50"
              >
                {loading ? "Unlocking..." : "Unlock Guide"}
              </button>
            </form>
            {error && <p className="text-red-400 text-sm mt-3">{error}</p>}

            <p className="text-xs text-gray-500 mt-4">
              You&apos;ll also get LicensedEdge — our free weekly cannabis industry intelligence newsletter.
              Unsubscribe anytime.
            </p>
          </div>
        ) : (
          <div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-8 text-center">
              <p className="text-green-400 font-semibold">✓ Guide unlocked! You&apos;re now subscribed to LicensedEdge.</p>
            </div>

            <h2 className="text-2xl font-bold mb-6">Full Guide: 20 Cannabis Markets — 2026</h2>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-4 text-purple-400">2026 Market Themes</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-purple-400 shrink-0">→</span>
                  <span><strong className="text-white">New markets = best margins:</strong> Ohio, Minnesota, Kentucky, and Delaware are launching adult-use/medical programs. First movers in these markets see 2-3x the margins of mature states.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 shrink-0">→</span>
                  <span><strong className="text-white">Social equity is the entry point:</strong> NY, IL, NJ, CT, and MD are all prioritizing social equity licenses. If you qualify, your application gets reviewed first and fees are often reduced 50-75%.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 shrink-0">→</span>
                  <span><strong className="text-white">Micro-licenses are the play:</strong> Missouri, Massachusetts, and Connecticut offer micro-business licenses with lower capital requirements. Best path for operators under $500K.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 shrink-0">→</span>
                  <span><strong className="text-white">Price compression is real:</strong> Colorado, Oregon, and Michigan wholesale prices are at all-time lows. Avoid cultivation in mature markets unless you can produce under $200/lb.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              {states.map((s) => (
                <div key={s.rank} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="bg-purple-500/20 text-purple-400 text-xs font-bold px-2 py-0.5 rounded">#{s.rank}</span>
                        <span className="font-semibold text-white">{s.state}</span>
                        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded">{s.status}</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{s.note}</p>
                      <div className="flex flex-wrap gap-3 mt-2 text-xs">
                        <span className="text-purple-300">Fee: {s.fee}</span>
                        <span className="text-gray-500">|</span>
                        <span className="text-purple-300">Difficulty: {s.difficulty}</span>
                        <span className="text-gray-500">|</span>
                        <span className="text-purple-300">Window: {s.appWindow}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-purple-600/10 border border-purple-500/30 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Stay Ahead of License Windows</h3>
              <p className="text-gray-400 mb-6">
                LicensedEdge delivers cannabis industry intelligence to your inbox — license windows,
                regulatory changes, and market opportunities before the competition.
              </p>
              <Link
                href="/pricing"
                className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition"
              >
                See Plans →
              </Link>
            </div>

            <p className="text-xs text-gray-500 text-center mt-8">
              Data compiled from state regulatory agencies, NCIA, and MJBizDaily. Updated March 2026.
              Analysis by LicensedEdge, a SignalStack Media LLC publication.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
