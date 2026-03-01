import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Archive — ContractPulse",
  description: "Browse past issues of ContractPulse, Canadian government contract intelligence newsletter.",
};

const issues = [
  {
    slug: "sample",
    date: "February 28, 2026",
    title: "Issue #1 — Buy Canadian Reshapes Procurement; SSC's $847M Network Vehicle; DND Dominates Awards",
    signal: "Buy Canadian Policy Reshapes Federal Procurement",
    isNew: true,
  },
];

const blogPosts = [
  {
    slug: "track-federal-government-contracts-canada",
    date: "February 28, 2026",
    title: "How to Track Federal Government Contract Awards in Canada (2026 Guide)",
    description: "A comprehensive guide to monitoring Canadian federal procurement using CanadaBuys, open data, and intelligence tools.",
  },
  {
    slug: "largest-government-contracts-this-quarter",
    date: "February 28, 2026",
    title: "The 10 Largest Government Contracts Awarded This Quarter",
    description: "From defence to IT to infrastructure — the biggest federal contract awards of Q1 2026 and what they signal.",
  },
  {
    slug: "government-procurement-trends-2026",
    date: "February 28, 2026",
    title: "Government Procurement Trends: What Contractors Need to Know in 2026",
    description: "Buy Canadian, digital transformation, and Indigenous procurement — the trends shaping federal contracting this year.",
  },
];

export default function ArchivePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold mb-4">
        Newsletter <span className="text-gold">Archive</span>
      </h1>
      <p className="text-gray-400 mb-12">
        Browse past issues of ContractPulse. Each issue delivers the week&apos;s most important 
        government contract intelligence.
      </p>

      {/* Issues */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6 text-gold uppercase tracking-wider text-sm">Issues</h2>
        <div className="space-y-4">
          {issues.map((issue) => (
            <Link
              key={issue.slug}
              href={`/archive/${issue.slug}`}
              className="block bg-forest-500/50 border border-forest-50/20 rounded-lg p-6 hover:border-gold/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-gray-500 text-sm">{issue.date}</span>
                    {issue.isNew && (
                      <span className="bg-gold/10 text-gold text-xs font-semibold px-2 py-0.5 rounded-full">NEW</span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{issue.title}</h3>
                  <p className="text-gray-400 text-sm">Signal of the Week: {issue.signal}</p>
                </div>
                <span className="text-gold text-sm shrink-0">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section>
        <h2 className="text-xl font-semibold mb-6 text-gold uppercase tracking-wider text-sm">Blog & Guides</h2>
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/archive/blog/${post.slug}`}
              className="block bg-forest-500/50 border border-forest-50/20 rounded-lg p-6 hover:border-gold/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <h3 className="text-lg font-semibold mb-1 mt-1">{post.title}</h3>
                  <p className="text-gray-400 text-sm">{post.description}</p>
                </div>
                <span className="text-gold text-sm shrink-0">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
