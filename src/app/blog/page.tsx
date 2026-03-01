import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Government Contracting Intelligence & Guides | ContractPulse Blog",
  description: "Expert analysis, step-by-step guides, and actionable intelligence for federal contractors. Master SAM.gov, discover spending trends, and win more government contracts.",
  keywords: "government contracting blog, federal procurement guides, SAM.gov help, contracting intelligence, federal spending analysis, contractor resources",
  openGraph: {
    title: "Government Contracting Intelligence & Guides | ContractPulse Blog",
    description: "Expert analysis and actionable intelligence for federal contractors",
    type: "website",
  },
  alternates: {
    canonical: "https://contractpulse.io/blog"
  }
};

// SVG Components for Blog Categories
const GuideIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="8" width="32" height="48" rx="2" fill="currentColor" opacity="0.1"/>
    <rect x="20" y="16" width="24" height="2" fill="currentColor" opacity="0.6"/>
    <rect x="20" y="20" width="20" height="2" fill="currentColor" opacity="0.6"/>
    <rect x="20" y="24" width="22" height="2" fill="currentColor" opacity="0.6"/>
    <rect x="20" y="32" width="24" height="2" fill="currentColor" opacity="0.6"/>
    <rect x="20" y="36" width="18" height="2" fill="currentColor" opacity="0.6"/>
    <circle cx="12" cy="12" r="6" fill="#D4A853"/>
    <path d="M10 12L11.5 13.5L14 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AnalysisIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="40" width="6" height="16" fill="#D4A853" opacity="0.7"/>
    <rect x="18" y="32" width="6" height="24" fill="#D4A853" opacity="0.8"/>
    <rect x="28" y="24" width="6" height="32" fill="#D4A853"/>
    <rect x="38" y="16" width="6" height="40" fill="#D4A853" opacity="0.9"/>
    <rect x="48" y="20" width="6" height="36" fill="#D4A853" opacity="0.6"/>
    <path d="M4 12 Q16 8 32 12 T60 8" stroke="currentColor" strokeWidth="2" opacity="0.4" fill="none"/>
  </svg>
);

const TrendIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 48L20 36L32 40L56 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
    <path d="M8 48L20 36L32 40L56 16" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="36" r="2" fill="#D4A853"/>
    <circle cx="32" cy="40" r="2" fill="#D4A853"/>
    <circle cx="56" cy="16" r="2" fill="#D4A853"/>
  </svg>
);

const SearchIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="26" r="16" stroke="currentColor" strokeWidth="3" opacity="0.6"/>
    <path d="m38 38 12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
    <circle cx="26" cy="26" r="8" fill="currentColor" opacity="0.1"/>
  </svg>
);

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "How to Find Government Contracts: The Complete 2026 Guide",
    slug: "how-to-find-government-contracts-2026-guide",
    description: "Master federal procurement with our comprehensive guide. Learn SAM.gov navigation, GSA schedules, small business set-asides, and winning strategies that secure $50B+ annually.",
    category: "Guide",
    readTime: "15 min read",
    publishDate: "Feb 28, 2026",
    featured: true,
    tags: ["SAM.gov", "Federal Procurement", "Beginner Guide"],
    stats: {
      value: "$650B",
      metric: "Market Size"
    }
  },
  {
    id: 2,
    title: "SAM.gov Registration: Complete Step-by-Step Guide for New Contractors",
    slug: "sam-gov-registration-guide-new-contractors",
    description: "Master SAM.gov registration and avoid the 14 most common mistakes that delay approval. 98% success rate following our detailed walkthrough.",
    category: "Guide", 
    readTime: "12 min read",
    publishDate: "Feb 28, 2026",
    featured: true,
    tags: ["SAM.gov", "Registration", "Compliance"],
    stats: {
      value: "98%",
      metric: "Success Rate"
    }
  },
  {
    id: 3,
    title: "Top 10 Federal Agencies Spending the Most in 2026: Complete Analysis",
    slug: "top-10-federal-agencies-spending-2026",
    description: "Data-driven analysis of federal spending by agency. DoD leads with $180B, followed by VA's 12% growth. Includes actionable contractor intelligence.",
    category: "Analysis",
    readTime: "18 min read", 
    publishDate: "Feb 28, 2026",
    featured: true,
    tags: ["Federal Spending", "Agency Analysis", "Market Intelligence"],
    stats: {
      value: "$180B",
      metric: "DoD Spending"
    }
  },
  {
    id: 4,
    title: "Small Business Set-Aside Contracts: Everything You Need to Know",
    slug: "small-business-set-aside-contracts-guide",
    description: "Navigate the $150B+ small business contracting landscape. Certification requirements, set-aside types, and winning strategies for 8(a), HUBZone, WOSB, and VOSB programs.",
    category: "Guide",
    readTime: "14 min read",
    publishDate: "Coming Soon",
    featured: false,
    tags: ["Small Business", "Set-Asides", "Certifications"],
    stats: {
      value: "$150B+",
      metric: "SB Market"
    }
  },
  {
    id: 5,
    title: "GSA Schedule vs Open Market: Which Path is Right for You?",
    slug: "gsa-schedule-vs-open-market-contracting",
    description: "Compare GSA Schedules and open market contracting. Cost analysis, time to revenue, and strategic recommendations based on your business profile.",
    category: "Analysis",
    readTime: "10 min read", 
    publishDate: "Coming Soon",
    featured: false,
    tags: ["GSA Schedule", "Strategy", "Business Development"],
    stats: {
      value: "$38B",
      metric: "GSA Volume"
    }
  }
];

const categories = [
  { name: "All", count: blogPosts.length, icon: null },
  { name: "Guide", count: 3, icon: GuideIcon },
  { name: "Analysis", count: 2, icon: AnalysisIcon },
  { name: "Trends", count: 0, icon: TrendIcon }
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-forest via-forest-300 to-forest-500">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="blog-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="#D4A853" opacity="0.4"/>
                <rect x="15" y="15" width="30" height="30" rx="4" fill="none" stroke="#D4A853" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-pattern)" />
          </svg>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 rounded-full px-6 py-2 mb-8">
              <GuideIcon className="w-6 h-6 text-gold" />
              <span className="text-gold text-sm font-semibold">Expert Government Contracting Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Government Contracting 
              <span className="text-gold block">Intelligence & Guides</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              Master federal procurement with our expert analysis, step-by-step guides, and actionable 
              intelligence. From SAM.gov registration to winning $100M+ contracts, we decode the 
              <span className="text-gold font-semibold"> $650 billion federal market</span> for you.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-gold mb-1">50+</div>
                <div className="text-sm text-gray-400">Expert Guides</div>
              </div>
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-gold mb-1">$650B</div>
                <div className="text-sm text-gray-400">Market Analysis</div>
              </div>
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-gold mb-1">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-gold mb-1">500+</div>
                <div className="text-sm text-gray-400">Contractors Served</div>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="relative">
                  <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search guides, analysis, and intelligence..."
                    className="w-full pl-12 pr-4 py-3 bg-forest border border-forest-50/20 rounded-lg text-white placeholder-gray-400 focus:border-gold/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, i) => (
                  <button
                    key={i}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      i === 0 
                        ? 'bg-gold text-forest' 
                        : 'bg-forest border border-forest-50/20 text-gray-300 hover:border-gold/30 hover:text-gold'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {category.icon && <category.icon className="w-4 h-4" />}
                      {category.name} ({category.count})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Intelligence & Guides</h2>
          
          <div className="space-y-8">
            {blogPosts.filter(post => post.featured).map((post, i) => (
              <article 
                key={post.id}
                className="group bg-gradient-to-r from-forest-500/50 to-forest-500/20 border border-forest-50/30 rounded-xl overflow-hidden hover:border-gold/40 transition-all duration-300 card-hover"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        {post.category === 'Guide' && <GuideIcon className="w-5 h-5 text-gold" />}
                        {post.category === 'Analysis' && <AnalysisIcon className="w-5 h-5 text-gold" />}
                        <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                      <div className="text-gray-500 text-sm">{post.readTime}</div>
                      <div className="text-gray-500 text-sm">{post.publishDate}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors leading-tight">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{post.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, j) => (
                          <span 
                            key={j}
                            className="bg-forest/50 text-gray-400 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-gold hover:text-gold-300 font-medium text-sm"
                      >
                        Read Full Guide
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="bg-forest/50 p-8 flex flex-col justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gold mb-2">{post.stats.value}</div>
                      <div className="text-gray-400 text-sm">{post.stats.metric}</div>
                      
                      <div className="mt-6 pt-6 border-t border-forest-50/20">
                        <div className="text-xs text-gray-500 mb-2">Reading Progress</div>
                        <div className="w-full bg-forest-50/20 rounded-full h-2">
                          <div className="bg-gold h-2 rounded-full" style={{ width: '0%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 bg-forest-500">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">All Guides & Analysis</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <article 
                key={post.id}
                className={`group bg-forest border border-forest-50/30 rounded-xl p-6 hover:border-gold/40 transition-all duration-300 card-hover ${
                  post.publishDate === 'Coming Soon' ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {post.category === 'Guide' && <GuideIcon className="w-5 h-5 text-gold" />}
                  {post.category === 'Analysis' && <AnalysisIcon className="w-5 h-5 text-gold" />}
                  <div className="flex items-center gap-2">
                    <span className="bg-gold/10 text-gold px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors leading-tight">
                  {post.publishDate === 'Coming Soon' ? (
                    <span className="cursor-default">{post.title}</span>
                  ) : (
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  )}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{post.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-gold font-bold text-lg">{post.stats.value}</div>
                    <div className="text-gray-500 text-xs">{post.stats.metric}</div>
                  </div>
                  
                  {post.publishDate === 'Coming Soon' ? (
                    <span className="text-gray-500 text-sm">Coming Soon</span>
                  ) : (
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-gold hover:text-gold-300 text-sm font-medium"
                    >
                      Read →
                    </Link>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-1 mt-4 pt-4 border-t border-forest-50/20">
                  {post.tags.map((tag, j) => (
                    <span 
                      key={j}
                      className="bg-forest-50/10 text-gray-400 px-2 py-0.5 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border border-gold/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">Get Weekly Contract Intelligence</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join <span className="text-gold font-semibold">500+ government contractors</span> who get 
              our latest guides, analysis, and contract opportunities delivered every Monday.
            </p>
            
            <div className="bg-forest-500/50 border border-forest-50/20 rounded-lg p-6 mb-6 max-w-lg mx-auto">
              <h4 className="text-gold font-semibold mb-3">This Week's Intelligence Includes:</h4>
              <div className="text-left space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300">47 new DoD AI/ML opportunities ($2.1B total)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300">VA healthcare IT spending surge (+23%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300">New GSA cybersecurity requirements analysis</span>
                </div>
              </div>
            </div>

            <Link 
              href="/#subscribe" 
              className="inline-flex items-center gap-2 bg-gold text-forest px-8 py-4 rounded-lg font-semibold hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
            >
              Subscribe Free
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}