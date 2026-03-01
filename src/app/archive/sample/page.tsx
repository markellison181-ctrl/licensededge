import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Issue #1 — ContractPulse Weekly",
  description:
    "DoD IT modernization spending hits $15B, new GSA cybersecurity requirements reshape procurement, small business set-asides surge — ContractPulse Issue #1.",
  openGraph: {
    title: "ContractPulse Issue #1 — DoD IT Spending Surge Reshapes Federal Procurement",
    description:
      "The first issue of ContractPulse: US federal government contract intelligence and procurement opportunities.",
    type: "article",
    publishedTime: "2026-02-28T12:00:00Z",
  },
};

export default function SampleIssuePage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center">
            <span className="text-forest font-bold text-sm">CP</span>
          </div>
          <div>
            <div className="text-white font-semibold">ContractPulse Weekly</div>
            <div className="text-gray-500 text-sm">Issue #1 — February 28, 2026</div>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          DoD IT Modernization Hits $15B; New GSA Cybersecurity Rules; Small Business Set-Asides Surge 45%
        </h1>
        <p className="text-gray-400 leading-relaxed">
          Welcome to the first edition of ContractPulse. Each week, we analyze SAM.gov postings,
          USAspending.gov data, and federal procurement trends to bring you the intelligence that 
          matters for government contractors. This week: massive defense IT spending, new security 
          requirements reshaping bids, and unprecedented small business opportunities.
        </p>
      </div>

      {/* Signal of the Week */}
      <section className="mb-12">
        <div className="bg-gold/5 border border-gold/20 rounded-lg p-8">
          <div className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
            ⚡ Signal of the Week
          </div>
          <h2 className="text-2xl font-bold mb-4">
            DoD IT Modernization Investment Reaches $15B, Reshaping Defense Contracting
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              The Department of Defense has announced the largest IT modernization investment 
              in over a decade, with <strong className="text-white">$15 billion allocated</strong> for 
              fiscal year 2026 across cloud migration, cybersecurity upgrades, and AI implementation. 
              This surge represents a 35% increase from FY2025 and signals DoD&apos;s commitment to 
              technology transformation across all branches.
            </p>
            <p>
              The investment spans multiple procurement vehicles: $4.2B through GSA&apos;s Enterprise 
              Infrastructure Solutions (EIS), $3.8B via the Chief Digital and AI Office (CDAO) 
              contracts, and $2.1B through new AI-focused SEWP VI task orders. The Pentagon is 
              also launching three new indefinite delivery/indefinite quantity (IDIQ) contracts 
              specifically for cybersecurity mesh architecture and zero-trust implementations.
            </p>
            <p>
              <strong className="text-gold">Why it matters:</strong> This isn&apos;t just about DoD — 
              civilian agencies are watching these implementations closely. Technologies proven in 
              defense environments often become the standard for Department of Veterans Affairs, 
              Department of Homeland Security, and other agencies. Early performers in DoD&apos;s IT 
              modernization will have significant advantages in the broader federal market.
            </p>
            <p>
              <strong className="text-gold">What to do:</strong> (1) Review your SAM.gov profile 
              for relevant NAICS codes (518210, 541511, 541512). (2) Monitor GSA&apos;s EIS portal 
              for new task orders. (3) Attend DoD&apos;s &quot;Industry Day&quot; webinars on AI and 
              cybersecurity (March 15-17). (4) Ensure your company has appropriate security clearance 
              processing pipelines — many awards require Secret clearance within 90 days.
            </p>
          </div>
        </div>
      </section>

      {/* Top Awards */}
      <section className="mb-12">
        <div className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
          📋 Top Awards This Week
        </div>
        <p className="text-gray-400 text-sm mb-6">
          The most significant contract awards and procurement opportunities from the past week, 
          sourced from SAM.gov, USAspending.gov, and agency procurement forecasts.
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Enterprise Infrastructure Solutions (EIS) - Cloud Migration Services",
              department: "General Services Administration (GSA)",
              value: "$1.2B (task order ceiling)",
              type: "IDIQ Task Order",
              detail:
                "GSA awarded multiple task orders under EIS for cloud migration services across 12 civilian agencies. This covers migration from legacy data centers to FedRAMP-approved cloud environments, including AWS GovCloud, Microsoft Azure Government, and Google Cloud for Government. Prime contractors include CACI, SAIC, and Booz Allen Hamilton.",
            },
            {
              title: "Cybersecurity Infrastructure Modernization",
              department: "Department of Homeland Security (DHS)",
              value: "$847M",
              type: "Multiple Award IDIQ",
              detail:
                "DHS Cybersecurity and Infrastructure Security Agency (CISA) launched a new 5-year IDIQ for modernizing federal cybersecurity infrastructure. Focus areas include zero-trust architecture implementation, continuous monitoring solutions, and threat intelligence platforms. This contract vehicle will serve as a model for other agencies' cybersecurity modernization efforts.",
            },
            {
              title: "Joint Warfighting Cloud Capability (JWCC) - Task Order 047",
              department: "Department of Defense (DoD)",
              value: "$412M",
              type: "Task Order",
              detail:
                "DoD awarded task orders under JWCC to Microsoft, Amazon, Google, and Oracle for classified cloud computing services. This order specifically covers AI/ML workloads for the Joint Artificial Intelligence Center (JAIC) and includes edge computing capabilities for deployed forces. Secret and Top Secret computing environments included.",
            },
            {
              title: "Small Business Innovation Research (SBIR) - AI for Healthcare",
              department: "Department of Veterans Affairs (VA)",
              value: "$89M (total program value)",
              type: "SBIR Phase II Awards",
              detail:
                "VA awarded 47 Phase II SBIR contracts focused on AI applications for veteran healthcare. Topics include predictive analytics for mental health intervention, automated medical coding, and clinical decision support systems. Each award ranges from $1.2M to $2.8M over 24 months. Strong pipeline for Phase III transitions to procurement contracts.",
            },
            {
              title: "Border Security Technology Integration",
              department: "U.S. Customs and Border Protection (CBP)",
              value: "$156M",
              type: "Firm Fixed Price Contract",
              detail:
                "CBP awarded a contract to Raytheon Technologies for integrating advanced surveillance technologies along the southern border. Includes deployment of autonomous ground sensors, drone surveillance systems, and AI-powered threat detection. This is part of CBP's broader $2.1B border technology modernization program.",
            },
            {
              title: "NASA Artemis Mission Support Services",
              department: "National Aeronautics and Space Administration (NASA)",
              value: "$267M",
              type: "Cost-Plus-Award-Fee Contract",
              detail:
                "NASA awarded SpaceX additional mission support services for Artemis lunar missions, including spacecraft integration, ground operations, and mission planning services. This expands SpaceX's role beyond launch services to comprehensive mission support. Contract includes options that could bring total value to $890M through 2030.",
            },
            {
              title: "Federal Employee Health Benefits IT Modernization",
              department: "Office of Personnel Management (OPM)",
              value: "$78M",
              type: "Service Contract",
              detail:
                "OPM selected Accenture Federal Services to modernize the Federal Employee Health Benefits (FEHB) program systems. Includes migration from legacy COBOL systems to cloud-native architecture, improved member portal, and integration with healthcare.gov infrastructure. Project will serve 8.2 million federal employees and retirees.",
            },
          ].map((award, i) => (
            <div
              key={i}
              className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <h3 className="font-semibold text-white">{award.title}</h3>
                <span className="text-gold font-bold whitespace-nowrap">{award.value}</span>
              </div>
              <div className="flex flex-wrap gap-3 mb-3">
                <span className="text-xs bg-forest-50/30 text-gray-300 px-2 py-1 rounded">
                  {award.department}
                </span>
                <span className="text-xs bg-forest-50/30 text-gray-300 px-2 py-1 rounded">
                  {award.type}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{award.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who's Moving */}
      <section className="mb-12">
        <div className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
          👤 Who&apos;s Moving
        </div>
        <p className="text-gray-400 text-sm mb-6">
          Key personnel changes and organizational shifts in federal agencies that impact procurement patterns and opportunities.
        </p>

        <div className="space-y-4">
          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              GSA Appoints New Technology Transformation Services Director
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The General Services Administration named former Amazon Web Services executive 
              Sarah Chen as the new Director of Technology Transformation Services (TTS). Chen 
              brings 15 years of cloud and digital transformation experience and has signaled 
              plans to accelerate GSA&apos;s modernization of government IT procurement processes. 
              Industry experts expect faster adoption of commercial cloud practices and streamlined 
              vendor onboarding under her leadership.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              DoD Creates New Chief Digital and AI Officer Position
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The Department of Defense has elevated its digital transformation efforts by 
              creating the Chief Digital and AI Officer (CDAO) position, reporting directly 
              to the Secretary of Defense. The CDAO will oversee all AI procurement across 
              DoD components and has been allocated $3.8B in discretionary contract authority. 
              This centralizes AI procurement decisions that were previously scattered across 
              individual service branches and defense agencies.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              Small Business Administration Launches New Contracting Center of Excellence
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              SBA announced a new Center of Excellence specifically focused on helping small 
              businesses navigate federal contracting. The center will provide dedicated support 
              for SAM.gov registration, GSA schedule applications, and capability statement 
              development. Located in Dallas with satellite offices in Atlanta and Seattle, 
              the center represents SBA&apos;s commitment to increasing small business federal 
              contracting participation beyond the current 23% target.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Watch */}
      <section className="mb-12">
        <div className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
          ⚖️ Policy Watch
        </div>

        <div className="space-y-4">
          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              New GSA Cybersecurity Requirements Take Effect March 1st
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              GSA&apos;s updated cybersecurity requirements for IT services contracts take effect 
              March 1, 2026. All contractors providing IT services to federal agencies must 
              now demonstrate compliance with NIST Cybersecurity Framework 2.0 and maintain 
              FedRAMP authorization for any cloud-based deliverables. Existing contractors have 
              90 days to achieve compliance or risk contract modification or termination. This 
              affects thousands of GSA Schedule holders and MAS contract vehicles.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              Small Business Set-Aside Thresholds Increase for Construction
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The Small Business Administration raised the small business set-aside threshold 
              for construction contracts from $7M to $10M, effective immediately. This change 
              expands the universe of construction projects available exclusively to small 
              businesses and is expected to increase small business construction contracting 
              by an estimated $2.1B annually. The increase applies to all federal agencies 
              and aligns with inflation adjustments recommended in the 2026 NDAA.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              Buy America Requirements Expanded to IT Hardware
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The Biden Administration expanded Buy America requirements to include IT hardware 
              purchases over $10,000. Federal agencies must now prioritize domestically manufactured 
              servers, networking equipment, and end-user devices. The policy includes a waiver 
              process for unavailable items, but agencies must justify non-compliance. This 
              significantly impacts GSA Technology and NIH CIO-SP3 contract vehicles, with 
              compliance required for all new task orders issued after April 1, 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Numbers That Matter */}
      <section className="mb-12">
        <div className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
          📊 Numbers That Matter
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gold mb-1">42%</div>
            <div className="text-white font-semibold text-sm mb-2">DoD Share of Federal IT Spending</div>
            <p className="text-gray-500 text-xs">
              The Department of Defense accounts for 42% of all federal IT contract spending 
              this quarter, totaling $6.3B across cloud services, cybersecurity, and 
              modernization projects. This excludes classified programs.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gold mb-1">$1.2B</div>
            <div className="text-white font-semibold text-sm mb-2">Largest Single Task Order</div>
            <p className="text-gray-500 text-xs">
              GSA&apos;s Enterprise Infrastructure Solutions cloud migration task order 
              is the largest single award this week, spanning 12 civilian agencies and 
              multiple cloud providers.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gold mb-1">45%</div>
            <div className="text-white font-semibold text-sm mb-2">Small Business Set-Aside Increase</div>
            <p className="text-gray-500 text-xs">
              Small business set-aside contracts increased 45% this quarter compared to Q4 2025, 
              driven by higher thresholds and aggressive agency goals. Total value: $12.7B.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gold mb-1">127</div>
            <div className="text-white font-semibold text-sm mb-2">Active SAM.gov Opportunities</div>
            <p className="text-gray-500 text-xs">
              127 new contract opportunities were posted on SAM.gov this week with values 
              exceeding $25M, up 18% from last week. IT services and professional services 
              dominate the postings.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-forest-50/20 pt-12">
        <div className="bg-gold/5 border border-gold/20 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-3">Get this every Monday</h3>
          <p className="text-gray-400 text-sm mb-6">
            ContractPulse delivers US federal government contract intelligence to your inbox 
            every week. Free to subscribe.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#subscribe"
              className="bg-gold text-forest px-8 py-3 rounded font-semibold text-sm hover:bg-gold-300 transition-colors"
            >
              Subscribe Free
            </Link>
            <Link
              href="/pricing"
              className="border border-gold text-gold px-8 py-3 rounded font-semibold text-sm hover:bg-gold hover:text-forest transition-colors"
            >
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
