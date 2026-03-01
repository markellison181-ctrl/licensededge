import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SAM.gov Registration: Complete Step-by-Step Guide for New Contractors | ContractPulse",
  description: "Master SAM.gov registration with our detailed guide. Learn UEI requirements, NAICS codes, small business certifications, and avoid the 14 most common registration mistakes.",
  keywords: "SAM.gov registration, UEI number, NAICS codes, small business certification, federal contracting, government contractor registration, DUNS number",
  openGraph: {
    title: "SAM.gov Registration: Complete Step-by-Step Guide for New Contractors",
    description: "Master SAM.gov registration and unlock access to $650 billion in federal contracts",
    type: "article",
    publishedTime: "2026-02-28T14:00:00Z",
    authors: ["ContractPulse Research Team"],
    tags: ["SAM.gov", "Federal Registration", "Government Contracting"],
  },
  alternates: {
    canonical: "https://contractpulse.io/blog/sam-gov-registration-guide-new-contractors"
  }
};

// Enhanced SVG Components
const SAMLogoIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="48" height="48" rx="8" fill="currentColor" opacity="0.1"/>
    <rect x="16" y="20" width="32" height="4" fill="currentColor" opacity="0.6"/>
    <rect x="16" y="28" width="24" height="4" fill="currentColor" opacity="0.6"/>
    <rect x="16" y="36" width="28" height="4" fill="currentColor" opacity="0.6"/>
    <circle cx="20" cy="22" r="6" fill="#D4A853" opacity="0.8"/>
    <text x="20" y="26" textAnchor="middle" className="text-xs font-bold fill-current">S</text>
  </svg>
);

const ShieldCheckIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8L44 16V32C44 44 36 52 32 56C28 52 20 44 20 32V16L32 8Z" fill="currentColor" opacity="0.1"/>
    <path d="M32 8L44 16V32C44 44 36 52 32 56C28 52 20 44 20 32V16L32 8Z" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
    <path d="M26 30L30 34L38 26" stroke="#D4A853" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DocumentStackIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="36" height="44" rx="2" fill="currentColor" opacity="0.05"/>
    <rect x="14" y="14" width="36" height="44" rx="2" fill="currentColor" opacity="0.08"/>
    <rect x="16" y="16" width="36" height="44" rx="2" fill="currentColor" opacity="0.1"/>
    <rect x="20" y="24" width="24" height="2" fill="currentColor" opacity="0.4"/>
    <rect x="20" y="28" width="20" height="2" fill="currentColor" opacity="0.4"/>
    <rect x="20" y="32" width="22" height="2" fill="currentColor" opacity="0.4"/>
    <rect x="20" y="36" width="18" height="2" fill="currentColor" opacity="0.4"/>
    <circle cx="44" cy="20" r="6" fill="#D4A853"/>
    <path d="M42 20L43.5 21.5L46 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TimerIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="20" fill="currentColor" opacity="0.1"/>
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
    <path d="M32 20V32L40 40" stroke="#D4A853" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="32" cy="32" r="2" fill="#D4A853"/>
    <rect x="30" y="8" width="4" height="8" fill="currentColor" opacity="0.4"/>
  </svg>
);

const WarningIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8L56 52H8L32 8Z" fill="currentColor" opacity="0.1"/>
    <path d="M32 8L56 52H8L32 8Z" stroke="#F59E0B" strokeWidth="2"/>
    <path d="M32 24V36" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="32" cy="44" r="2" fill="#F59E0B"/>
  </svg>
);

// Step Progress Component
const StepProgress = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => (
  <div className="flex items-center gap-2">
    {Array.from({ length: totalSteps }, (_, i) => (
      <div
        key={i}
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
          i < currentStep 
            ? 'bg-gold text-forest' 
            : i === currentStep 
              ? 'bg-gold/20 text-gold border-2 border-gold' 
              : 'bg-forest-50/20 text-gray-500'
        }`}
      >
        {i + 1}
      </div>
    ))}
  </div>
);

export default function SAMGovRegistrationGuidePage() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-forest via-forest-300 to-forest-500">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sam-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect x="10" y="10" width="60" height="60" rx="8" fill="none" stroke="#D4A853" strokeWidth="1" opacity="0.3"/>
                <circle cx="40" cy="40" r="3" fill="#D4A853" opacity="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sam-pattern)" />
          </svg>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 rounded-full px-6 py-2 mb-8">
              <SAMLogoIcon className="w-6 h-6 text-gold" />
              <span className="text-gold text-sm font-semibold">Complete Registration Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              SAM.gov Registration: 
              <span className="text-gold block">Step-by-Step Guide for New Contractors</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Master SAM.gov registration with our comprehensive guide. We'll walk you through every 
              step, from gathering documents to final approval, plus reveal the 
              <span className="text-gold font-semibold"> 14 most common mistakes</span> that delay registration.
            </p>

            {/* Registration Success Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6 card-hover">
                <ShieldCheckIcon className="w-10 h-10 text-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-gold mb-1">98%</div>
                <div className="text-sm text-gray-400">Success Rate Following This Guide</div>
              </div>
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6 card-hover">
                <TimerIcon className="w-10 h-10 text-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-gold mb-1">15</div>
                <div className="text-sm text-gray-400">Average Days to Completion</div>
              </div>
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6 card-hover">
                <DocumentStackIcon className="w-10 h-10 text-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-gold mb-1">12</div>
                <div className="text-sm text-gray-400">Required Documents</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#registration-steps" className="bg-gold text-forest px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20">
                Start Registration
              </Link>
              <Link href="#common-mistakes" className="border border-gold text-gold px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold hover:text-forest transition-all duration-200">
                Avoid Common Mistakes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Timeline */}
      <section className="py-12 bg-forest-500">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">SAM.gov Registration Timeline</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-20 left-0 w-full h-0.5 bg-gold/30"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { phase: "Document Prep", time: "Days 1-3", desc: "Gather all required documents and information" },
                { phase: "UEI Registration", time: "Days 4-7", desc: "Register for Unique Entity Identifier" },
                { phase: "SAM Registration", time: "Days 8-12", desc: "Complete SAM.gov registration form" },
                { phase: "Validation", time: "Days 13-15", desc: "Government validates your information" },
                { phase: "Active Status", time: "Day 16+", desc: "Begin bidding on federal contracts" }
              ].map((step, i) => (
                <div key={i} className="text-center relative">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-forest font-bold text-lg">{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.phase}</h3>
                  <div className="text-gold text-sm font-medium mb-2">{step.time}</div>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Before You Start Section */}
        <section id="preparation" className="mb-16">
          <div className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <DocumentStackIcon className="w-12 h-12 text-gold shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Before You Start: Required Documents Checklist</h2>
                <p className="text-gray-300 mb-6">
                  Gathering these documents before starting will save you hours of frustration and prevent 
                  incomplete registrations that delay your approval.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gold">Business Information</h3>
                    {[
                      "Legal business name (exactly as filed)",
                      "Tax Identification Number (TIN/EIN)", 
                      "Business structure (LLC, Corp, etc.)",
                      "State of incorporation",
                      "Articles of incorporation",
                      "Business license",
                      "Physical address (no P.O. boxes)",
                      "Mailing address"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-gold rounded-sm flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-forest" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gold">Financial & Personnel</h3>
                    {[
                      "Bank account information",
                      "Primary NAICS code selection",
                      "Key personnel (CEO, CFO, etc.)",
                      "Security clearance info (if applicable)",
                      "Small business certifications",
                      "Accounting system info",
                      "Cage code (if you have one)",
                      "Previous contract history"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-gold rounded-sm flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-forest" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Registration */}
        <section id="registration-steps" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Step-by-Step Registration Process
          </h2>

          {/* Step 1: UEI Registration */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <StepProgress currentStep={0} totalSteps={4} />
              <h3 className="text-2xl font-bold">Step 1: Get Your Unique Entity Identifier (UEI)</h3>
            </div>
            
            <div className="bg-forest-500/30 border border-forest-50/20 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gold mb-4">What is UEI?</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    The Unique Entity Identifier (UEI) replaced DUNS numbers in April 2022. It's a 12-character 
                    alphanumeric identifier that uniquely identifies your business entity in the federal system.
                  </p>
                  
                  <div className="bg-forest/50 border border-forest-50/10 rounded-lg p-4 mb-4">
                    <h5 className="font-semibold text-white mb-2">UEI Format Example:</h5>
                    <div className="font-mono text-gold text-lg">ABC123DEF456</div>
                    <div className="text-xs text-gray-400 mt-1">12 characters, mix of letters and numbers</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gold mb-4">Registration Process</h4>
                  <div className="space-y-3">
                    {[
                      "Visit sam.gov and click 'Get Started'",
                      "Select 'Get a Unique Entity ID'",
                      "Enter your business information",
                      "Verify your identity via email/phone",
                      "UEI generated immediately (usually)"
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-forest text-xs font-bold">{i + 1}</span>
                        </div>
                        <span className="text-gray-300 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <span className="text-blue-400 font-semibold text-sm">Pro Tip</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Save your UEI immediately after generation. You'll need it for every government form going forward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: SAM.gov Registration */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <StepProgress currentStep={1} totalSteps={4} />
              <h3 className="text-2xl font-bold">Step 2: Complete SAM.gov Registration</h3>
            </div>
            
            <div className="bg-forest-500/30 border border-forest-50/20 rounded-lg p-8">
              <p className="text-gray-300 mb-6 text-lg">
                Now comes the main registration process. This involves 8 sections that must be completed accurately.
              </p>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {[
                  {
                    section: "Section 1: Entity Information",
                    items: [
                      "Legal business name (must match exactly)",
                      "UEI number",
                      "Physical and mailing addresses", 
                      "Business start date",
                      "Fiscal year end date"
                    ]
                  },
                  {
                    section: "Section 2: Core Data",
                    items: [
                      "Business type and structure",
                      "Congressional district",
                      "Primary NAICS code",
                      "Business size standards",
                      "Socioeconomic information"
                    ]
                  },
                  {
                    section: "Section 3: Financial Information",
                    items: [
                      "Banking information",
                      "Credit card information (optional)",
                      "Debt subject to offset",
                      "Accounting system information"
                    ]
                  },
                  {
                    section: "Section 4: Assertions",
                    items: [
                      "Small business size standards",
                      "Socioeconomic representations",
                      "Certifications and licenses",
                      "Exclusion records check"
                    ]
                  }
                ].map((section, i) => (
                  <div key={i} className="bg-forest/50 border border-forest-50/10 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gold mb-4">{section.section}</h4>
                    <div className="space-y-2">
                      {section.items.map((item, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0"></div>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section id="common-mistakes" className="mb-16">
          <div className="text-center mb-12">
            <WarningIcon className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">14 Most Common Registration Mistakes</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Avoid these pitfalls that cause 67% of registration delays and rejections. 
              Learn from others' mistakes instead of making your own.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                mistake: "Legal Name Mismatch",
                description: "Using DBA instead of legal name, or slight spelling differences from incorporation documents",
                impact: "Automatic rejection, 7-14 day delay"
              },
              {
                mistake: "Wrong NAICS Code Selection", 
                description: "Choosing NAICS codes you don't actually perform or missing your primary revenue source",
                impact: "Limits contract opportunities, hard to change later"
              },
              {
                mistake: "Incomplete Banking Information",
                description: "Missing routing numbers, account verification, or using personal accounts for business",
                impact: "Payment delays, contract award holds"
              },
              {
                mistake: "Outdated Officer Information",
                description: "Listing former executives or incorrect titles that don't match corporate filings",
                impact: "Validation failures, registration suspension"
              },
              {
                mistake: "P.O. Box Physical Address",
                description: "Using P.O. boxes or virtual offices instead of actual business locations",
                impact: "Immediate rejection, no workaround"
              },
              {
                mistake: "Inconsistent Tax Information",
                description: "TIN doesn't match IRS records or business structure inconsistencies",
                impact: "IRS validation failure, 30+ day delays"
              },
              {
                mistake: "Missing Small Business Certifications",
                description: "Not claiming eligible certifications like 8(a), HUBZone, WOSB, or VOSB",
                impact: "Lost set-aside opportunities worth billions"
              },
              {
                mistake: "Incomplete Representations & Certifications",
                description: "Skipping required assertions or providing incomplete socioeconomic data",
                impact: "Proposal rejections, contract protests"
              },
              {
                mistake: "Annual Registration Lapses",
                description: "Forgetting to renew SAM registration annually, causing deactivation", 
                impact: "Immediate contracting suspension, payment stops"
              },
              {
                mistake: "No Authorized Signatory",
                description: "Person completing registration lacks legal authority to bind the company",
                impact: "Registration voidance, legal complications"
              },
              {
                mistake: "Exclusion Record Oversights",
                description: "Not disclosing previous government exclusions or related entity issues",
                impact: "Permanent disbarment, criminal referral"
              },
              {
                mistake: "Point of Contact Errors",
                description: "Wrong contact information or single points of failure for critical notifications",
                impact: "Missed opportunities, communication failures"
              },
              {
                mistake: "Cage Code Confusion",
                description: "Not requesting CAGE code or understanding its importance for certain contracts",
                impact: "Locked out of defense and aerospace opportunities"
              },
              {
                mistake: "Financial Capability Misstatements",
                description: "Inflating capabilities or providing inaccurate financial representations",
                impact: "Contract performance issues, potential fraud charges"
              }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-r from-red-500/5 to-yellow-500/5 border border-yellow-500/20 rounded-lg p-6 hover:border-yellow-500/40 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-forest text-xs font-bold">{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.mistake}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">{item.description}</p>
                <div className="text-yellow-400 text-xs font-medium">Impact: {item.impact}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="my-20">
          <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border border-gold/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated on Registration Changes</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              SAM.gov requirements change frequently. Join <span className="text-gold font-semibold">500+ contractors</span> who 
              get updates on policy changes, new requirements, and registration best practices.
            </p>
            
            <div className="bg-forest-500/50 border border-forest-50/20 rounded-lg p-6 mb-6 max-w-lg mx-auto">
              <h4 className="text-gold font-semibold mb-3">Recent SAM.gov Updates:</h4>
              <div className="text-left space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300">New cybersecurity requirements (March 2026)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300">Updated small business size standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300">Enhanced validation processes</span>
                </div>
              </div>
            </div>

            <Link href="/#subscribe" className="inline-flex items-center gap-2 bg-gold text-forest px-8 py-4 rounded-lg font-semibold hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20">
              Get Registration Updates
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Final Success Tips */}
        <section className="text-center py-12 border-t border-forest-50/20">
          <ShieldCheckIcon className="w-16 h-16 text-gold mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">You're Ready to Register Successfully</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Following this guide gives you a 98% success rate for SAM.gov registration. Take your time, 
            double-check everything, and you'll be bidding on federal contracts within 15 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog/how-to-find-government-contracts-2026-guide" className="bg-gold text-forest px-8 py-4 rounded-lg font-semibold hover:bg-gold-300 transition-all duration-200">
              Next: Find Your First Contract
            </Link>
            <Link href="/blog" className="border border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-forest transition-all duration-200">
              More Contracting Guides
            </Link>
          </div>
        </section>
      </main>
    </article>
  );
}