"use client";

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category?: "value" | "credibility" | "friction" | "upsell";
}

const faqs: FAQItem[] = [
  {
    question: "Is ContractPulse worth it?",
    answer: "Absolutely. Government contracts worth millions are awarded weekly, and knowing about them first gives you a massive competitive advantage. One contract win can generate 10-100x ROI on your subscription. Our free edition alone has helped contractors identify opportunities worth over $50M in their sectors.",
    category: "value"
  },
  {
    question: "What data sources do you use?",
    answer: "ContractPulse aggregates data from official government sources including SAM.gov, USAspending.gov, FPDS (Federal Procurement Data System), the Federal Register, and department-specific procurement portals. All data is verified and cross-referenced for accuracy. We process over 1,000 contract awards weekly.",
    category: "credibility"
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, absolutely. Cancel anytime with one click from your account dashboard. No cancellation fees, no questions asked. Your subscription remains active until the end of your billing period, so you keep getting value right up to the last day.",
    category: "friction"
  },
  {
    question: "What's the difference between Free and Pro?",
    answer: "The Free edition gives you weekly intelligence with top contract awards and trends. Pro subscribers get daily alerts, full database access with search and filtering, sector-specific notifications, data export capabilities, and early access to new features. Enterprise adds team access, API integration, and custom reporting.",
    category: "upsell"
  },
  {
    question: "How quickly do you report new contracts?",
    answer: "New contract awards are typically in your next issue within 24-48 hours of official posting. Pro subscribers get same-day alerts for high-value opportunities. We monitor sources continuously and have automated systems to catch urgent opportunities immediately.",
    category: "credibility"
  },
  {
    question: "Do you cover all federal departments?",
    answer: "Yes, we monitor all major federal departments including Defense (DND), Public Services and Procurement Canada (PSPC), Infrastructure Canada (INFC), Innovation, Science and Economic Development Canada (ISED), and many more. Our coverage includes both goods and services contracts across all sectors.",
    category: "credibility"
  }
];

function FAQAccordionItem({ faq, isOpen, onClick }: {
  faq: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-forest-50/20 rounded-lg bg-forest-500/30 hover:border-gold/30 transition-all duration-200">
      <button
        onClick={onClick}
        className="w-full text-left p-6 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-gold/20 rounded-lg"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
        <div className={`shrink-0 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-6">
          <div className="text-gray-300 leading-relaxed">{faq.answer}</div>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-forest relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest-400 to-forest" />
      
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Frequently asked <span className="text-gold">questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get answers to the most common questions about ContractPulse and how it can
            help you win more government business.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQAccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-forest-500/50 to-forest-400/50 border border-gold/20 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-2">Still have questions?</h3>
          <p className="text-gray-400 mb-6">
            We&apos;re here to help you understand how ContractPulse can accelerate your government contracting success.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <button className="border border-gold text-gold px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gold hover:text-forest transition-all duration-200">
              Contact Support
            </button>
            <a 
              href="/#subscribe" 
              className="bg-gold text-forest px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gold-300 transition-all duration-200"
            >
              Start Free Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}