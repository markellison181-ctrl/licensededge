"use client";

const StateSourceLogo = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center p-4 bg-white/6 border border-white/15 rounded-lg hover:border-gold/30 transition-all duration-200 group">
    <div className="text-center">
      <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mb-2 mx-auto group-hover:bg-gold/20 transition-colors">
        <svg className="w-4 h-4 text-gray-300 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
        {name}
      </div>
    </div>
  </div>
);

const stateSources = [
  "California DCC",
  "Colorado MED", 
  "Illinois IDFPR",
  "New York OCM",
  "Michigan CRA"
];

export default function TrustBar() {
  return (
    <section className="py-16 bg-emerald-500 border-y border-emerald-50/10">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-12">
          <div className="text-center mb-8">
            <p className="text-gray-300 text-sm font-medium uppercase tracking-wider mb-6">
              Aggregating intelligence from official state regulatory agencies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {stateSources.map((source) => (
              <StateSourceLogo key={source} name={source} />
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-50/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-full border-2 border-green-500/20 mb-3">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-lg font-semibold text-white">Industry Compliant</div>
              <div className="text-gray-300 text-sm">Full compliance with cannabis industry standards</div>
            </div>
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-full border-2 border-blue-500/20 mb-3">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="text-lg font-semibold text-white">Data Security</div>
              <div className="text-gray-300 text-sm">Bank-level encryption and secure data handling</div>
            </div>
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 rounded-full border-2 border-gold/20 mb-3">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-lg font-semibold text-white">Real-time Updates</div>
              <div className="text-gray-300 text-sm">Automated monitoring of all 40+ state regulatory agencies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
