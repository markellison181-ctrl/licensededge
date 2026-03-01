import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The 10 Largest Government Contracts Awarded This Quarter — ContractPulse",
  description: "From defence to IT to infrastructure — the biggest Canadian federal contract awards of Q1 2026 and what they signal about government priorities.",
  openGraph: {
    title: "The 10 Largest Government Contracts Awarded This Quarter",
    description: "The biggest Canadian federal contract awards of Q1 2026.",
    type: "article",
    publishedTime: "2026-02-28T12:00:00Z",
  },
};

export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-8">
        <Link href="/archive" className="text-gold text-sm hover:text-gold-300">← Back to Archive</Link>
      </div>

      <header className="mb-12">
        <div className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Analysis</div>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          The 10 Largest Government Contracts Awarded This Quarter
        </h1>
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <span>February 28, 2026</span>
          <span>·</span>
          <span>10 min read</span>
        </div>
      </header>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p className="text-lg text-gray-200">
          Every quarter, the Canadian federal government awards billions in contracts across defence, 
          IT, professional services, and construction. Here are the 10 largest procurement actions 
          from Q1 2026 — and what they tell us about where the money is flowing.
        </p>

        <div className="bg-gold/5 border border-gold/20 rounded-lg p-6 my-8">
          <p className="text-gold text-sm font-semibold mb-2">Methodology</p>
          <p className="text-gray-400 text-sm">
            This analysis is based on CanadaBuys tender data, proactive disclosure records, and 
            public procurement announcements from January–February 2026. Values represent estimated 
            contract ceilings or awarded amounts where disclosed.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Network Solutions Procurement Vehicle (NSPV) — $847M</h2>
        <p><strong className="text-white">Department:</strong> Shared Services Canada</p>
        <p>
          The largest single procurement instrument of the quarter, SSC&apos;s NSPV covers enterprise 
          networking equipment, managed network services, and related professional services for the 
          entire federal government. This is a multi-vendor standing offer, meaning multiple 
          qualified vendors can compete for individual call-ups. IT networking giants including Cisco, 
          Juniper, and their Canadian integration partners are expected to qualify.
        </p>
        <p>
          <strong className="text-gold">Signal:</strong> SSC continues to consolidate federal IT 
          procurement under large vehicles, reducing the number of individual contracts departments 
          need to manage.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Build Canada Homes Program — Estimated $500M+</h2>
        <p><strong className="text-white">Department:</strong> Office of Infrastructure of Canada</p>
        <p>
          While still at the RFI stage, the Build Canada Homes program is one of the most significant 
          federal construction initiatives in years. INFC is seeking industry input on prefabricated 
          and modular construction, innovative delivery models, and approaches to northern and remote 
          housing. The eventual procurement is expected to be structured as multiple regional contracts.
        </p>
        <p>
          <strong className="text-gold">Signal:</strong> Housing has become a top federal priority, 
          and the government is looking beyond traditional construction methods. Modular builders and 
          firms with northern experience should be positioning now.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Canadian Surface Combatant — Ongoing ($77B total program)</h2>
        <p><strong className="text-white">Department:</strong> Department of National Defence</p>
        <p>
          Canada&apos;s largest-ever military procurement continues to generate sub-contracts and supply 
          chain opportunities. Q1 2026 saw multiple call-ups for specialized engineering services, 
          weapons systems integration, and combat management system development. Irving Shipbuilding 
          leads as prime contractor, but hundreds of Canadian firms participate in the supply chain.
        </p>
        <p>
          <strong className="text-gold">Signal:</strong> CSC sub-contracting opportunities will 
          continue for the next decade. Firms should register with Irving&apos;s supply chain portal.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Shipborne Weapons Life Cycle Management — $45M</h2>
        <p><strong className="text-white">Department:</strong> Department of National Defence</p>
        <p>
          DND is procuring specialized expertise for managing the life cycle of shipborne weapons 
          systems, including Levels 2 and 3 specialists. This contract supports both the existing 
          Halifax-class frigates and the transition to the new CSC fleet. Defence engineering 
          consultancies are the primary targets.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Adderback IM/IT Services — $38M</h2>
        <p><strong className="text-white">Department:</strong> Department of National Defence</p>
        <p>
          Another major DND IT services contract, covering information management and information 
          technology services. The procurement was amended multiple times in Q1, suggesting active 
          industry engagement and possible scope refinement.
        </p>
        <p>
          <strong className="text-gold">Signal:</strong> DND remains the single largest buyer of 
          IT services in the federal government. Their unique security requirements create a 
          specialized market where cleared firms have significant advantages.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">6. Human-Machine Teaming Research — $12.4M</h2>
        <p><strong className="text-white">Department:</strong> Defence Research and Development Canada</p>
        <p>
          DRDC&apos;s investment in AI-human collaboration research reflects growing military interest in 
          autonomous systems. This contract covers cognitive science, autonomous systems integration, 
          and human factors research. Academic institutions and defence research firms are the 
          likely competitors.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">7. Anti-Ram Vehicle Barriers — $8.7M</h2>
        <p><strong className="text-white">Department:</strong> DND / PSPC Joint</p>
        <p>
          Portable and mobile anti-ram vehicle barriers for federal installations. This is a 
          standing offer, meaning the government is establishing a supply arrangement for rapid 
          procurement when needed. Physical security spending has increased in recent years.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">8. Motor Vessel Services — $5.2M</h2>
        <p><strong className="text-white">Department:</strong> Canada Border Services Agency</p>
        <p>
          CBSA is investing in its marine enforcement capability with repair and upgrade services 
          for two motor vessels. Marine procurement is a growing niche as multiple agencies 
          (CBSA, DFO, Coast Guard) modernize aging fleets.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">9. Northern Construction Standards — $4.1M</h2>
        <p><strong className="text-white">Department:</strong> Standards Council of Canada</p>
        <p>
          SCC is developing guidance for prefabricated and modular construction in northern 
          conditions. This contract connects directly to the Build Canada Homes initiative — 
          the government is building the standards framework before the major construction 
          procurement begins.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">10. Cryo-FIB/SEM Scientific Equipment — $3.8M</h2>
        <p><strong className="text-white">Department:</strong> National Research Council of Canada</p>
        <p>
          NRC continues to invest in world-class research infrastructure. This advanced 
          microscopy equipment supports materials science and nanotechnology research. While 
          the equipment itself comes from specialized manufacturers, installation and ongoing 
          service contracts create additional opportunities.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Key Takeaways</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong className="text-white">DND dominates.</strong> Six of the ten largest procurements involve DND or related defence agencies. Defence remains the federal government&apos;s largest procurement customer.</li>
          <li><strong className="text-white">IT and digital continue to grow.</strong> SSC&apos;s massive NSPV and DND&apos;s IT services contracts reflect ongoing digital transformation across government.</li>
          <li><strong className="text-white">Housing is the new frontier.</strong> The Build Canada Homes program signals massive upcoming construction procurement. Firms should be engaging with the RFI now.</li>
          <li><strong className="text-white">Standing offers and supply arrangements dominate.</strong> The government is increasingly using umbrella procurement instruments rather than one-off contracts, favoring vendors who can qualify for large vehicles.</li>
        </ul>

        <div className="mt-12 bg-gold/5 border border-gold/20 rounded-lg p-8">
          <h3 className="text-xl font-bold text-white mb-3">Track These Contracts Weekly</h3>
          <p className="text-gray-400 mb-4">
            ContractPulse tracks the largest and most significant federal contracts every week. 
            Subscribe for free to get the signals that matter.
          </p>
          <Link href="/#subscribe" className="inline-flex items-center gap-2 bg-gold text-forest px-6 py-3 rounded font-semibold text-sm hover:bg-gold-300 transition-colors">
            Subscribe Free →
          </Link>
        </div>
      </div>
    </article>
  );
}
