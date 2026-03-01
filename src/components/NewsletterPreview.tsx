"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function NewsletterPreview() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 bg-emerald relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "linear-gradient(45deg, transparent 40%, rgba(201,168,76,0.1) 50%, transparent 60%)",
            backgroundSize: "100px 100px",
          }} 
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            This is what you&apos;ll get <span className="text-gold">every week</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See exactly what LicensedEdge delivers to your inbox. Here&apos;s a preview
            of our latest issue with real cannabis regulatory intelligence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className={`transition-transform duration-500 ease-out ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Email mockup frame */}
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800">
              {/* Email header bar */}
              <div className="bg-gray-100 border-b border-gray-300 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded border px-3 py-1 text-xs text-gray-600 font-mono">
                  📧 LicensedEdge Weekly - Issue #23 - Florida Adult-Use Launches March 15
                </div>
              </div>

              {/* Email content */}
              <div className="bg-white text-gray-900 p-6 md:p-8">
                {/* Header */}
                <div className="border-b border-gray-200 pb-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-700 to-emerald-800 rounded flex items-center justify-center">
                      <span className="text-yellow-400 font-bold text-lg">LE</span>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">LicensedEdge Weekly</div>
                      <div className="text-gray-500 text-sm">Issue #23 — March 6, 2026</div>
                    </div>
                  </div>
                  <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                    Florida Adult-Use Applications Open; New York Social Equity Expansion; Federal Banking Guidelines
                  </h1>
                </div>

                {/* Signal of the Week */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                  <div className="text-yellow-700 text-xs font-bold uppercase tracking-wider mb-2">
                    ⚡ Regulatory Alert
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-3">
                    Florida Adult-Use License Applications Open March 15 — 200 Dispensary Slots Available
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Florida&apos;s Department of Health announced adult-use cannabis license applications 
                    will open March 15, 2026, with 200 initial dispensary licenses and 50 cultivation 
                    permits available through a lottery system. Application fee is $100,000 with 
                    $2M liquid capital requirement. Vertical integration mandatory for first 24 months...
                  </p>
                  <div className="mt-3 text-yellow-700 text-sm font-medium">
                    💡 Impact: Largest new market opportunity in 2026 — expect significant applicant competition
                  </div>
                </div>

                {/* Top Updates */}
                <div className="mb-6">
                  <div className="text-gray-700 text-xs font-bold uppercase tracking-wider mb-3">
                    📋 State-by-State Updates
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start border-b border-gray-100 pb-2">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">New York Social Equity Application Period 2 — OCM</div>
                        <div className="text-gray-500 text-xs">150 additional CAURD licenses for rural areas</div>
                      </div>
                      <div className="text-emerald-600 font-bold text-sm whitespace-nowrap ml-4">May 30</div>
                    </div>
                    <div className="flex justify-between items-start border-b border-gray-100 pb-2">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">Pennsylvania Cultivation License Renewals — DOH</div>
                        <div className="text-gray-500 text-xs">All 25 existing permits expire, renewal deadline</div>
                      </div>
                      <div className="text-emerald-600 font-bold text-sm whitespace-nowrap ml-4">Apr 1</div>
                    </div>
                    <div className="flex justify-between items-start border-b border-gray-100 pb-2">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">Texas Medical Expansion Program — DSHS</div>
                        <div className="text-gray-500 text-xs">New qualifying conditions and delivery pilot</div>
                      </div>
                      <div className="text-emerald-600 font-bold text-sm whitespace-nowrap ml-4">Jun 15</div>
                    </div>
                  </div>
                </div>

                {/* Who's Moving */}
                <div className="mb-6">
                  <div className="text-gray-700 text-xs font-bold uppercase tracking-wider mb-3">
                    👤 Industry Movement
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="font-medium text-gray-900 text-sm mb-1">
                      California DCC Appoints New Enforcement Chief
                    </div>
                    <p className="text-gray-700 text-xs leading-relaxed">
                      Former DOJ prosecutor Maria Rodriguez named as Director of Cannabis Compliance 
                      and Enforcement, signaling stricter oversight of unlicensed operations and 
                      enhanced coordination with local law enforcement.
                    </p>
                  </div>
                </div>

                {/* Numbers */}
                <div className="mb-6">
                  <div className="text-gray-700 text-xs font-bold uppercase tracking-wider mb-3">
                    📊 Market Intelligence
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-600">847</div>
                      <div className="text-gray-600 text-xs">New license applications filed</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-600">$4.2B</div>
                      <div className="text-gray-600 text-xs">Q1 2026 market size estimate</div>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="border-t border-gray-200 pt-6 text-center">
                  <div className="bg-gradient-to-r from-emerald-50 to-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Upgrade to Pro for Daily Alerts</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Get same-day notifications for license opportunities and regulatory changes
                    </p>
                    <div className="inline-block bg-emerald-600 text-white px-4 py-2 rounded font-medium text-sm">
                      Start 14-Day Free Trial
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA below preview */}
          <div className="text-center mt-8">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link
                href="/archive/sample"
                className="inline-flex items-center gap-2 border border-gold text-gold px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gold hover:text-emerald transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Read the Full Issue
              </Link>
              <Link
                href="/#subscribe"
                className="inline-flex items-center gap-2 bg-gold text-emerald px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get This Every Week
              </Link>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              Free weekly digest delivered every Monday. Join 300+ cannabis operators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}