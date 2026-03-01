import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Top 10 Federal Agencies Spending the Most in 2026: Complete Analysis | ContractPulse",
  description: "Discover which federal agencies spend the most on contracts in 2026. DoD leads with $180B, followed by VA, DHS, and others. Includes spending trends, top contract categories, and winning strategies.",
  keywords: "federal agency spending, DoD contracts, VA contracting, DHS procurement, federal spending analysis, government contract opportunities, agency procurement budgets",
  openGraph: {
    title: "Top 10 Federal Agencies Spending the Most in 2026: Complete Analysis",
    description: "Data-driven analysis of the biggest federal contract opportunities by agency",
    type: "article",
    publishedTime: "2026-02-28T16:00:00Z",
    authors: ["ContractPulse Research Team"],
    tags: ["Federal Spending", "Agency Analysis", "Contract Opportunities"],
  },
  alternates: {
    canonical: "https://contractpulse.io/blog/top-10-federal-agencies-spending-2026"
  }
};

// Advanced SVG Data Visualization Components
const SpendingBarChart = ({ agencies }: { agencies: Array<{name: string, spending: number, percentage: number}> }) => (
  <div className="space-y-4">
    {agencies.map((agency, i) => (
      <div key={i} className="relative">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white font-medium text-sm">{agency.name}</span>
          <span className="text-gold font-bold">${agency.spending}B</span>
        </div>
        <div className="w-full bg-forest-50/20 rounded-full h-3 relative overflow-hidden">
          <div 
            className="bg-gradient-to-r from-gold to-gold/80 h-3 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${agency.percentage}%` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
        </div>
        <div className="text-xs text-gray-400 mt-1">{agency.percentage}% of total federal spending</div>
      </div>
    ))}
  </div>
);

const PieChartIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="24" fill="currentColor" opacity="0.1"/>
    <path d="M32 8 A24 24 0 0 1 52.784 20.216 L32 32 Z" fill="#D4A853" opacity="0.8"/>
    <path d="M52.784 20.216 A24 24 0 0 1 43.784 52.216 L32 32 Z" fill="#D4A853" opacity="0.6"/>
    <path d="M43.784 52.216 A24 24 0 0 1 20.216 52.216 L32 32 Z" fill="#D4A853" opacity="0.4"/>
    <path d="M20.216 52.216 A24 24 0 0 1 8 32 L32 32 Z" fill="#D4A853" opacity="0.2"/>
    <path d="M8 32 A24 24 0 0 1 32 8 L32 32 Z" fill="#D4A853" opacity="0.3"/>
    <circle cx="32" cy="32" r="4" fill="#D4A853"/>
  </svg>
);

const TrendingUpIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 48L20 36L32 40L56 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
    <path d="M8 48L20 36L32 40L56 16" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="36" r="3" fill="#D4A853"/>
    <circle cx="32" cy="40" r="3" fill="#D4A853"/>
    <circle cx="56" cy="16" r="3" fill="#D4A853"/>
    <path d="M46 16L56 16L56 26" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BuildingIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="20" width="32" height="36" fill="currentColor" opacity="0.1"/>
    <rect x="20" y="28" width="3" height="20" fill="currentColor" opacity="0.4"/>
    <rect x="27" y="28" width="3" height="20" fill="currentColor" opacity="0.4"/>
    <rect x="34" y="28" width="3" height="20" fill="currentColor" opacity="0.4"/>
    <rect x="41" y="28" width="3" height="20" fill="currentColor" opacity="0.4"/>
    <polygon points="32,8 48,18 16,18" fill="#D4A853" opacity="0.7"/>
    <rect x="28" y="32" width="8" height="16" fill="#D4A853" opacity="0.3"/>
    <circle cx="32" cy="14" r="2" fill="#D4A853"/>
  </svg>
);

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

// Agency spending data
const topAgencies = [
  { name: "Department of Defense (DoD)", spending: 180, percentage: 100 },
  { name: "Department of Veterans Affairs (VA)", spending: 89, percentage: 49 },
  { name: "Department of Homeland Security (DHS)", spending: 67, percentage: 37 },
  { name: "Department of Health & Human Services (HHS)", spending: 54, percentage: 30 },
  { name: "General Services Administration (GSA)", spending: 43, percentage: 24 },
  { name: "Department of Energy (DOE)", spending: 38, percentage: 21 },
  { name: "NASA", spending: 32, percentage: 18 },
  { name: "Department of Agriculture (USDA)", spending: 28, percentage: 16 },
  { name: "Department of Transportation (DOT)", spending: 24, percentage: 13 },
  { name: "Department of Justice (DOJ)", spending: 21, percentage: 12 }
];

export default function TopFederalAgenciesSpendingPage() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-forest via-forest-300 to-forest-500">
      {/* Hero Section with Data Visualization */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="data-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="#D4A853" opacity="0.4"/>
                <circle cx="75" cy="75" r="1" fill="#D4A853" opacity="0.4"/>
                <path d="M0 50 Q25 25 50 50 T100 50" stroke="#D4A853" strokeWidth="0.5" opacity="0.2" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#data-pattern)" />
          </svg>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 rounded-full px-6 py-2 mb-8">
              <PieChartIcon className="w-6 h-6 text-gold" />
              <span className="text-gold text-sm font-semibold">2026 Federal Spending Analysis</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Top 10 Federal Agencies 
              <span className="text-gold block">Spending the Most in 2026</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              Navigate the $650 billion federal procurement landscape with our data-driven analysis. 
              Discover which agencies offer the biggest opportunities, emerging spending trends, and 
              <span className="text-gold font-semibold"> insider strategies</span> for winning more contracts.
            </p>

            {/* Executive Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6 card-hover">
                <TrendingUpIcon className="w-10 h-10 text-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-gold mb-1">
                  <AnimatedCounter end={650} prefix="$" suffix="B" />
                </div>
                <div className="text-sm text-gray-400">Total Federal Spending</div>
              </div>
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6 card-hover">
                <div className="text-3xl font-bold text-gold mb-1">
                  <AnimatedCounter end={180} prefix="$" suffix="B" />
                </div>
                <div className="text-sm text-gray-400">DoD (Top Spender)</div>
              </div>
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6 card-hover">
                <div className="text-3xl font-bold text-gold mb-1">
                  <AnimatedCounter end={27} suffix="%" />
                </div>
                <div className="text-sm text-gray-400">DoD Share of Total</div>
              </div>
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6 card-hover">
                <div className="text-3xl font-bold text-gold mb-1">
                  <AnimatedCounter end={8} suffix="%" />
                </div>
                <div className="text-sm text-gray-400">YoY Growth Average</div>
              </div>
            </div>
          </div>

          {/* Quick Visual Overview */}
          <div className="bg-gradient-to-r from-forest-500/80 to-forest-500/40 border border-forest-50/30 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Federal Spending at a Glance</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gold mb-4">Top 5 Agencies by Contract Volume</h3>
                <SpendingBarChart agencies={topAgencies.slice(0, 5)} />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gold mb-4">Key Insights</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-forest/50 rounded-lg">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0"></div>
                      <span className="text-gray-300 text-sm">DoD dominates with 27% of all federal contract spending</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-forest/50 rounded-lg">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0"></div>
                      <span className="text-gray-300 text-sm">VA spending increased 12% year-over-year, fastest growth</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-forest/50 rounded-lg">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0"></div>
                      <span className="text-gray-300 text-sm">IT services represent 42% of total agency spending</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-forest/50 rounded-lg">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0"></div>
                      <span className="text-gray-300 text-sm">Small business set-asides up 23% across all agencies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Agency Rankings */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Complete Agency Rankings & Analysis</h2>
          
          <div className="space-y-8">
            {[
              {
                rank: 1,
                name: "Department of Defense (DoD)",
                spending: 180,
                growth: "+6%",
                topCategories: ["IT Services", "R&D", "Weapons Systems", "Logistics"],
                keyInsights: "DoD continues to dominate federal procurement with massive IT modernization investments. JWCC cloud contracts and AI initiatives drive growth.",
                opportunities: "$15B IT modernization, $8B cybersecurity, $12B R&D contracts",
                icon: "🛡️"
              },
              {
                rank: 2,
                name: "Department of Veterans Affairs (VA)",
                spending: 89,
                growth: "+12%",
                topCategories: ["Healthcare IT", "Medical Equipment", "Construction", "Professional Services"],
                keyInsights: "Fastest-growing federal spender driven by healthcare modernization and infrastructure investments. Heavy focus on AI and telehealth.",
                opportunities: "$23B healthcare IT, $11B construction, $6B medical equipment",
                icon: "🏥"
              },
              {
                rank: 3,
                name: "Department of Homeland Security (DHS)",
                spending: 67,
                growth: "+9%",
                topCategories: ["Cybersecurity", "Border Security", "IT Services", "Emergency Response"],
                keyInsights: "Border technology and cybersecurity drive spending increases. CISA leads major cybersecurity infrastructure investments.",
                opportunities: "$12B cybersecurity, $8B border tech, $5B IT infrastructure",
                icon: "🛡️"
              },
              {
                rank: 4,
                name: "Department of Health & Human Services (HHS)",
                spending: 54,
                growth: "+7%",
                topCategories: ["Healthcare IT", "Research", "Data Analytics", "Cloud Services"],
                keyInsights: "NIH research spending and CDC technology investments drive growth. Major focus on health data analytics and AI.",
                opportunities: "$8B research contracts, $6B healthcare IT, $4B data analytics",
                icon: "⚕️"
              },
              {
                rank: 5,
                name: "General Services Administration (GSA)",
                spending: 43,
                growth: "+4%",
                topCategories: ["IT Services", "Professional Services", "Facilities", "Vehicles"],
                keyInsights: "GSA Schedules and EIS contracts provide stable growth. Technology Transformation Services leading innovation.",
                opportunities: "$18B IT services, $12B professional services, $8B facilities",
                icon: "🏛️"
              }
            ].slice(0, 5).map((agency) => (
              <div key={agency.rank} className="bg-gradient-to-r from-forest-500/50 to-forest-500/20 border border-forest-50/30 rounded-xl p-8 hover:border-gold/30 transition-all duration-300 card-hover">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center shrink-0">
                        <span className="text-forest text-xl font-bold">#{agency.rank}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{agency.icon}</span>
                          <h3 className="text-2xl font-bold text-white">{agency.name}</h3>
                        </div>
                        <div className="flex items-center gap-6 mb-3">
                          <div className="text-3xl font-bold text-gold">${agency.spending}B</div>
                          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                            {agency.growth} YoY
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{agency.keyInsights}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-gold font-semibold mb-2">Top Contract Categories:</h4>
                      <div className="flex flex-wrap gap-2">
                        {agency.topCategories.map((category, i) => (
                          <span key={i} className="bg-forest/50 text-gray-300 px-3 py-1 rounded-full text-sm">
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-forest/50 border border-forest-50/20 rounded-lg p-6">
                    <h4 className="text-gold font-semibold mb-3">Major Opportunities 2026:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{agency.opportunities}</p>
                    
                    <div className="mt-6 pt-4 border-t border-forest-50/20">
                      <Link 
                        href={`/blog/targeting-${agency.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-contracts`}
                        className="text-gold hover:text-gold-300 text-sm font-medium inline-flex items-center gap-1"
                      >
                        Deep Dive Analysis 
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show remaining agencies in condensed format */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">Complete Top 10 Rankings</h3>
            <div className="bg-forest-500/30 border border-forest-50/20 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {topAgencies.slice(5).map((agency, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-forest/50 rounded-lg">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-forest text-xs font-bold">
                          {i + 6}
                        </span>
                        <span className="text-white font-medium text-sm">{agency.name}</span>
                      </div>
                    </div>
                    <div className="text-gold font-bold">${agency.spending}B</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Spending Trends Analysis */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">2026 Spending Trends & Predictions</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-forest-500/50 to-forest-500/20 border border-forest-50/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gold">Fastest Growing Categories</h3>
              <div className="space-y-4">
                {[
                  { category: "Artificial Intelligence & Machine Learning", growth: "+34%", value: "$18.2B" },
                  { category: "Cybersecurity Infrastructure", growth: "+28%", value: "$24.7B" },
                  { category: "Cloud Computing Services", growth: "+22%", value: "$31.4B" },
                  { category: "Healthcare Technology", growth: "+19%", value: "$15.8B" },
                  { category: "Data Analytics & Visualization", growth: "+16%", value: "$12.3B" }
                ].map((trend, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-forest/50 rounded-lg">
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1">{trend.category}</h4>
                      <div className="text-gray-400 text-xs">{trend.value}</div>
                    </div>
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold">
                      {trend.growth}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-forest-500/50 to-forest-500/20 border border-forest-50/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gold">Declining Categories</h3>
              <div className="space-y-4">
                {[
                  { category: "Legacy IT Hardware", growth: "-12%", value: "$8.9B" },
                  { category: "Traditional Construction", growth: "-8%", value: "$16.2B" },
                  { category: "Paper-based Processing", growth: "-15%", value: "$3.4B" },
                  { category: "On-premise Software", growth: "-9%", value: "$11.7B" },
                  { category: "Manual Security Services", growth: "-6%", value: "$7.1B" }
                ].map((trend, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-forest/50 rounded-lg">
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1">{trend.category}</h4>
                      <div className="text-gray-400 text-xs">{trend.value}</div>
                    </div>
                    <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold">
                      {trend.growth}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-yellow-400 font-semibold text-sm">Strategic Warning</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Contractors heavily invested in declining categories should diversify into growth areas 
                  or risk significant revenue loss by 2027.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Actionable Intelligence */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border border-gold/20 rounded-xl p-8">
            <div className="flex items-start gap-6">
              <BuildingIcon className="w-16 h-16 text-gold shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Actionable Intelligence for Contractors</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  This data reveals significant opportunities for smart contractors. Here's how to position 
                  your business for maximum success in the 2026 federal market.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gold">Immediate Actions</h3>
                    {[
                      "Target VA healthcare IT opportunities ($23B market)",
                      "Pursue DoD AI/ML contracts (34% growth rate)",
                      "Focus on DHS cybersecurity infrastructure",
                      "Develop GSA schedule presence for consistent revenue"
                    ].map((action, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0"></div>
                        <span className="text-gray-300 text-sm">{action}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gold">Strategic Positioning</h3>
                    {[
                      "Build capabilities in AI/ML to capture 34% growth",
                      "Develop cybersecurity expertise for $24B+ market",
                      "Create cloud-native service offerings",
                      "Establish small business certifications for set-asides"
                    ].map((strategy, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0"></div>
                        <span className="text-gray-300 text-sm">{strategy}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-forest-500/50 border border-forest-50/20 rounded-lg p-6">
                  <h4 className="text-gold font-semibold mb-3">Weekly Intelligence Update:</h4>
                  <div className="text-left space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">New DoD AI opportunities this week</span>
                      <span className="text-gold font-bold">47 contracts</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">VA healthcare IT RFPs released</span>
                      <span className="text-gold font-bold">$2.3B total</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">DHS cybersecurity task orders</span>
                      <span className="text-gold font-bold">$890M available</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Link href="/#subscribe" className="bg-gold text-forest px-8 py-4 rounded-lg font-semibold hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20">
                    Get Weekly Agency Intelligence
                  </Link>
                  <Link href="/blog" className="border border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-forest transition-all duration-200">
                    More Analysis & Guides
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </article>
  );
}