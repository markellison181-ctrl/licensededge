import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cannabis Regulation Intelligence & Guides | LicensedEdge Blog",
  description: "Expert cannabis licensing guides, regulatory analysis, and market intelligence. State-by-state license applications, dispensary opening guides, and industry trends.",
  keywords: "cannabis licensing blog, dispensary guide, cannabis regulation, cannabis license application, cannabis industry trends, cannabis market analysis",
  openGraph: {
    title: "Cannabis Regulation Intelligence & Guides | LicensedEdge Blog",
    description: "Expert cannabis licensing and regulatory intelligence",
    type: "website",
  },
  alternates: {
    canonical: "https://licensededge.com/blog"
  }
};

const blogPosts = [
  {
    id: 1,
    title: "Cannabis License Application Guide: State-by-State Breakdown",
    slug: "cannabis-license-application-guide-state-by-state",
    description: "Comprehensive guide to cannabis license applications across all legal states. Requirements, costs, timelines, and strategies to maximize your approval chances.",
    category: "Guide",
    readTime: "16 min read",
    publishDate: "Feb 28, 2026",
    featured: true,
    tags: ["Licensing", "State Regulations", "Applications"],
    stats: { value: "40+", metric: "Legal States" }
  },
  {
    id: 2,
    title: "How to Open a Dispensary in 2026: Complete Checklist",
    slug: "how-to-open-dispensary-2026",
    description: "Everything you need to open a cannabis dispensary in 2026. From license applications to build-out, staffing, compliance, and launch — a step-by-step operational guide.",
    category: "Guide",
    readTime: "14 min read",
    publishDate: "Feb 28, 2026",
    featured: true,
    tags: ["Dispensary", "Business Plan", "Operations"],
    stats: { value: "$250K-$2M", metric: "Startup Cost" }
  },
  {
    id: 3,
    title: "Cannabis Industry Trends: Market Size, Growth, and Opportunities",
    slug: "cannabis-industry-trends-market-size-growth",
    description: "Data-driven analysis of the U.S. cannabis market in 2026. Market size, growth projections, emerging segments, and investment opportunities across the supply chain.",
    category: "Analysis",
    readTime: "13 min read",
    publishDate: "Feb 28, 2026",
    featured: true,
    tags: ["Market Trends", "Industry Analysis", "Investment"],
    stats: { value: "$45B+", metric: "U.S. Market Size" }
  },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-forest via-forest-300 to-forest-500">
      <section className="relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 rounded-full px-6 py-2 mb-8">
              <span className="text-gold text-sm font-semibold">🌿 Expert Cannabis Regulation Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Cannabis Regulation
              <span className="text-gold block">Intelligence & Guides</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              Navigate cannabis licensing and regulations with expert guides, state-by-state analysis, and market intelligence.
              We decode the <span className="text-gold font-semibold">$45+ billion U.S. cannabis market</span> for you.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-gold mb-1">$45B+</div>
                <div className="text-sm text-gray-400">Market Size</div>
              </div>
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-gold mb-1">40+</div>
                <div className="text-sm text-gray-400">Legal States</div>
              </div>
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-gold mb-1">500K+</div>
                <div className="text-sm text-gray-400">Industry Jobs</div>
              </div>
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-gold mb-1">14%</div>
                <div className="text-sm text-gray-400">Annual Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Intelligence & Guides</h2>
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group bg-gradient-to-r from-forest-500/50 to-forest-500/20 border border-forest-50/30 rounded-xl overflow-hidden hover:border-gold/40 transition-all duration-300 card-hover">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-medium">{post.category}</span>
                      <div className="text-gray-400 text-sm">{post.readTime}</div>
                      <div className="text-gray-400 text-sm">{post.publishDate}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors leading-tight">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, j) => (
                          <span key={j} className="bg-forest/50 text-gray-400 px-2 py-1 rounded text-xs">{tag}</span>
                        ))}
                      </div>
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-gold hover:text-gold-300 font-medium text-sm">
                        Read Full Guide →
                      </Link>
                    </div>
                  </div>
                  <div className="bg-forest/50 p-8 flex flex-col justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gold mb-2">{post.stats.value}</div>
                      <div className="text-gray-400 text-sm">{post.stats.metric}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border border-gold/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">Get Weekly Cannabis Regulation Intelligence</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join <span className="text-gold font-semibold">cannabis professionals</span> who get our latest licensing updates, regulatory changes, and market intelligence delivered weekly.
            </p>
            <Link href="/#subscribe" className="inline-flex items-center gap-2 bg-gold text-forest px-8 py-4 rounded-lg font-semibold hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20">
              Subscribe Free →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
