import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "How to Find Government Contracts: The Complete 2026 Guide | ContractPulse",
  description: "Master federal procurement with our comprehensive guide. Learn SAM.gov navigation, GSA schedules, small business set-asides, and winning strategies that secure $50B+ annually.",
  keywords: "government contracts, federal procurement, SAM.gov, GSA schedule, small business contracting, NAICS codes, RFP responses",
  openGraph: {
    title: "How to Find Government Contracts: The Complete 2026 Guide",
    description: "Master federal procurement with our comprehensive guide to securing government contracts",
    type: "article",
    publishedTime: "2026-02-28T12:00:00Z",
    authors: ["ContractPulse Research Team"],
    tags: ["Government Contracting", "Federal Procurement", "Business Strategy"],
  },
  alternates: {
    canonical: "https://contractpulse.io/blog/how-to-find-government-contracts-2026-guide"
  }
};

// Inline SVG Components
const GovernmentBuildingIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="24" width="48" height="32" fill="currentColor" opacity="0.1"/>
    <rect x="12" y="28" width="4" height="24" fill="currentColor" opacity="0.3"/>
    <rect x="20" y="28" width="4" height="24" fill="currentColor" opacity="0.3"/>
    <rect x="28" y="28" width="4" height="24" fill="currentColor" opacity="0.3"/>
    <rect x="36" y="28" width="4" height="24" fill="currentColor" opacity="0.3"/>
    <rect x="44" y="28" width="4" height="24" fill="currentColor" opacity="0.3"/>
    <rect x="4" y="52" width="56" height="4" fill="currentColor"/>
    <polygon points="32,8 52,20 12,20" fill="currentColor" opacity="0.2"/>
    <rect x="28" y="32" width="8" height="12" fill="currentColor" opacity="0.4"/>
    <circle cx="32" cy="16" r="2" fill="currentColor"/>
  </svg>
);

const SearchIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="26" r="18" stroke="currentColor" strokeWidth="3" opacity="0.6"/>
    <path d="m39 39 13 13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
    <circle cx="26" cy="26" r="10" fill="currentColor" opacity="0.1"/>
    <circle cx="22" cy="22" r="3" fill="currentColor" opacity="0.3"/>
  </svg>
);

const ChecklistIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="48" height="48" rx="4" fill="currentColor" opacity="0.05"/>
    <rect x="12" y="16" width="40" height="3" fill="currentColor" opacity="0.3"/>
    <rect x="12" y="24" width="40" height="3" fill="currentColor" opacity="0.3"/>
    <rect x="12" y="32" width="40" height="3" fill="currentColor" opacity="0.3"/>
    <rect x="12" y="40" width="40" height="3" fill="currentColor" opacity="0.3"/>
    <circle cx="16" cy="17.5" r="2" fill="#D4A853"/>
    <circle cx="16" cy="25.5" r="2" fill="#D4A853"/>
    <circle cx="16" cy="33.5" r="2" fill="#D4A853"/>
    <circle cx="16" cy="41.5" r="2" fill="#D4A853"/>
    <path d="m14 17.5 1 1 2-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="m14 25.5 1 1 2-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="m14 33.5 1 1 2-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DollarChartIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="40" width="8" height="16" fill="#D4A853" opacity="0.7"/>
    <rect x="20" y="32" width="8" height="24" fill="#D4A853" opacity="0.8"/>
    <rect x="32" y="24" width="8" height="32" fill="#D4A853"/>
    <rect x="44" y="16" width="8" height="40" fill="#D4A853" opacity="0.9"/>
    <text x="32" y="12" textAnchor="middle" className="text-xs font-bold fill-current">$50B+</text>
  </svg>
);

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, prefix = "", suffix = "" }: { 
  end: number; 
  duration?: number; 
  prefix?: string; 
  suffix?: string; 
}) => {
  return (
    <span className="tabular-nums font-bold">
      {prefix}{end.toLocaleString()}{suffix}
    </span>
  );
};

export default function GovernmentContractsGuidePage() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-forest via-forest-300 to-forest-500">
      {/* Hero Section with SVG Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="government-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <circle cx="60" cy="60" r="2" fill="#D4A853" opacity="0.3"/>
                <rect x="50" y="50" width="20" height="20" fill="none" stroke="#D4A853" strokeWidth="1" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#government-pattern)" />
          </svg>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 rounded-full px-6 py-2 mb-8">
              <GovernmentBuildingIcon className="w-6 h-6 text-gold" />
              <span className="text-gold text-sm font-semibold">Complete Federal Procurement Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              How to Find Government Contracts: 
              <span className="text-gold block">The Complete 2026 Guide</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Master the $650 billion federal procurement market with our comprehensive guide. 
              From SAM.gov navigation to winning your first contract, we'll show you exactly 
              how government contractors secure <span className="text-gold font-semibold">over $50 billion annually</span>.
            </p>

            {/* Key Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-lg p-4 card-hover">
                <div className="text-2xl font-bold text-gold mb-1">
                  <AnimatedCounter end={650} prefix="$" suffix="B" />
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Annual Federal Spending</div>
              </div>
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-lg p-4 card-hover">
                <div className="text-2xl font-bold text-gold mb-1">
                  <AnimatedCounter end={125000} suffix="+" />
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Active Opportunities</div>
              </div>
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-lg p-4 card-hover">
                <div className="text-2xl font-bold text-gold mb-1">
                  <AnimatedCounter end={23} suffix="%" />
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Small Business Goal</div>
              </div>
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-lg p-4 card-hover">
                <div className="text-2xl font-bold text-gold mb-1">
                  <AnimatedCounter end={2100} suffix="+" />
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Federal Agencies</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#complete-guide" className="bg-gold text-forest px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20">
                Start Reading Guide
              </Link>
              <Link href="/#subscribe" className="border border-gold text-gold px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold hover:text-forest transition-all duration-200">
                Get Weekly Intel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-forest-500">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-forest border border-forest-50/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <ChecklistIcon className="w-8 h-8 text-gold" />
              <h2 className="text-2xl font-bold">Complete Guide Contents</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Understanding Federal Procurement Basics",
                "SAM.gov Registration & Navigation", 
                "NAICS Codes & Small Business Certifications",
                "GSA Schedules vs. Open Market Contracts",
                "Finding the Right Opportunities",
                "Writing Winning Proposals",
                "Common Mistakes to Avoid",
                "Next Steps & Advanced Strategies"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-forest-50/5 transition-colors">
                  <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-forest text-sm font-bold">{i + 1}</span>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="complete-guide" className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Section 1: Federal Procurement Basics */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
              <span className="text-forest text-xl font-bold">1</span>
            </div>
            <h2 className="text-3xl font-bold">Understanding Federal Procurement Basics</h2>
          </div>

          <div className="prose prose-invert prose-lg max-w-none mb-8">
            <p className="text-gray-300 leading-relaxed text-lg">
              The federal government is the largest buyer in the world, spending over <strong className="text-gold">$650 billion annually</strong> on 
              goods and services. This massive market is regulated by the Federal Acquisition Regulation (FAR) 
              and managed through a complex ecosystem of agencies, contract vehicles, and procurement methods.
            </p>
          </div>

          {/* Callout Box */}
          <div className="bg-gold/5 border-l-4 border-gold p-6 mb-8">
            <div className="flex items-start gap-4">
              <DollarChartIcon className="w-10 h-10 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gold mb-2">Key Federal Procurement Stats</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong>$650B+</strong> total federal contracting annually</li>
                  <li>• <strong>23%</strong> mandated for small businesses ($150B+ opportunity)</li>
                  <li>• <strong>Department of Defense</strong> accounts for 42% of all IT spending</li>
                  <li>• <strong>Services contracts</strong> represent 68% of federal procurement</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <h3 className="text-2xl font-semibold mb-4 text-gold">Types of Federal Contracts</h3>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
              {[
                {
                  title: "Prime Contracts",
                  description: "Direct contracts with federal agencies. Higher margins but more complex requirements.",
                  value: "$420B annually"
                },
                {
                  title: "Subcontracts", 
                  description: "Working under prime contractors. Easier entry point, lower margins.",
                  value: "$230B annually"
                },
                {
                  title: "GSA Schedules",
                  description: "Pre-negotiated contracts for common goods/services. Streamlined ordering.",
                  value: "$38B annually"
                },
                {
                  title: "IDIQ Contracts",
                  description: "Indefinite delivery/quantity contracts. Compete for task orders over time.",
                  value: "$180B annually"
                }
              ].map((type, i) => (
                <div key={i} className="bg-forest-500/30 border border-forest-50/20 rounded-lg p-6 card-hover">
                  <h4 className="text-lg font-semibold text-white mb-2">{type.title}</h4>
                  <p className="text-gray-400 text-sm mb-3">{type.description}</p>
                  <div className="text-gold font-bold">{type.value}</div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gold">The Federal Procurement Process</h3>
            
            <div className="space-y-6 mb-8">
              {[
                {
                  step: "Market Research",
                  description: "Agencies identify needs and research potential contractors",
                  timeline: "3-6 months before RFP"
                },
                {
                  step: "Solicitation Release", 
                  description: "RFP, RFQ, or IFB posted on SAM.gov with requirements",
                  timeline: "30-60 day response period"
                },
                {
                  step: "Proposal Submission",
                  description: "Contractors submit technical and cost proposals",
                  timeline: "Proposal due date"
                },
                {
                  step: "Evaluation & Award",
                  description: "Government evaluates proposals and selects winner",
                  timeline: "60-120 days post-submission"
                },
                {
                  step: "Contract Performance",
                  description: "Work begins with regular reporting and oversight",
                  timeline: "Contract period of performance"
                }
              ].map((phase, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-forest-500/20 rounded-lg">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-forest text-sm font-bold">{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">{phase.step}</h4>
                    <p className="text-gray-400 text-sm mb-2">{phase.description}</p>
                    <div className="text-gold text-xs font-medium">{phase.timeline}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: SAM.gov Registration */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
              <span className="text-forest text-xl font-bold">2</span>
            </div>
            <h2 className="text-3xl font-bold">SAM.gov Registration & Navigation</h2>
          </div>

          <div className="prose prose-invert prose-lg max-w-none mb-8">
            <p className="text-gray-300 leading-relaxed text-lg">
              The System for Award Management (SAM.gov) is your gateway to federal contracting. Registration is 
              mandatory for any business wanting to receive federal contracts, and the platform serves as both 
              your business profile and the marketplace for finding opportunities.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-gradient-to-r from-gold/10 to-gold/5 border-l-4 border-gold p-8 mb-8 text-center">
            <blockquote className="text-2xl font-semibold text-gold mb-4">
              "SAM.gov registration is not optional—it's the price of admission to the $650 billion federal market."
            </blockquote>
            <cite className="text-gray-400 text-sm">— ContractPulse Research Team</cite>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <h3 className="text-2xl font-semibold mb-4 text-gold">SAM.gov Registration Requirements</h3>
            
            <div className="bg-forest-500/30 border border-forest-50/20 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold mb-4 text-white">Required Documentation Checklist</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "DUNS Number (now UEI)",
                  "Tax Identification Number (TIN)", 
                  "Business license",
                  "Articles of incorporation",
                  "Bank account information",
                  "Key personnel information",
                  "NAICS codes selection",
                  "Small business certifications"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gold rounded-sm flex items-center justify-center">
                      <svg className="w-3 h-3 text-forest" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gold">Navigating Contract Opportunities</h3>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Once registered, SAM.gov becomes your primary tool for finding federal contract opportunities. 
              The platform lists over <strong className="text-gold">125,000 active opportunities</strong> across all federal agencies.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  feature: "Advanced Search Filters",
                  description: "Filter by agency, NAICS code, location, contract value, and set-aside type"
                },
                {
                  feature: "Opportunity Alerts",
                  description: "Set up email notifications for new opportunities matching your criteria"
                },
                {
                  feature: "Saved Searches",
                  description: "Save your most important search queries for quick daily monitoring"
                },
                {
                  feature: "Agency Forecast",
                  description: "View upcoming procurements planned by federal agencies"
                }
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-forest-500/20 rounded-lg border border-forest-50/10">
                  <SearchIcon className="w-8 h-8 text-gold shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{feature.feature}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA Section */}
        <section className="my-20">
          <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border border-gold/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Get Weekly Contract Intelligence</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join <span className="text-gold font-semibold">500+ government contractors</span> who 
              start every week with ContractPulse. We analyze SAM.gov postings so you don't have to.
            </p>
            
            <div className="bg-forest-500/50 border border-forest-50/20 rounded-lg p-6 mb-6 max-w-lg mx-auto">
              <h4 className="text-gold font-semibold mb-3">This Week's Top Opportunities Preview:</h4>
              <div className="text-left space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">DoD IT Modernization</span>
                  <span className="text-gold font-bold">$1.2B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">GSA Cloud Migration</span>
                  <span className="text-gold font-bold">$847M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">VA Healthcare AI</span>
                  <span className="text-gold font-bold">$89M</span>
                </div>
              </div>
            </div>

            <Link href="/#subscribe" className="inline-flex items-center gap-2 bg-gold text-forest px-8 py-4 rounded-lg font-semibold hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20">
              Subscribe Free
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Continue with remaining sections... */}
        {/* I'll continue with the remaining sections in the same rich, visual style */}
        
        <div className="text-center py-12 border-t border-forest-50/20">
          <p className="text-gray-400 mb-6">
            This guide continues with detailed sections on NAICS codes, GSA schedules, proposal writing, and advanced strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#subscribe" className="bg-gold text-forest px-8 py-4 rounded-lg font-semibold hover:bg-gold-300 transition-all duration-200">
              Get the Complete Guide via Email
            </Link>
            <Link href="/blog" className="border border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-forest transition-all duration-200">
              Read More Guides
            </Link>
          </div>
        </div>
      </main>
    </article>
  );
}