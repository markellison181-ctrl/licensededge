"use client";

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is LicensedEdge worth it?",
    answer: "Absolutely. Cannabis regulation changes weekly, and missing a license window or compliance update can cost you thousands. Our free edition alone has helped operators identify licensing opportunities across multiple states. One license win pays for years of subscription.",
  },
  {
    question: "What data sources do you use?",
    answer: "LicensedEdge aggregates data from official state regulatory agencies across all 40+ legal cannabis states, including the California DCC, Colorado MED, New York OCM, Illinois IDFPR, Michigan CRA, and more. All data is verified and cross-referenced for accuracy.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, absolutely. Cancel anytime with one click from your account dashboard. No cancellation fees, no questions asked. Your subscription remains active until the end of your billing period.",
  },
  {
    question: "What's the difference between Free and Pro?",
    answer: "The Free edition gives you weekly intelligence with top regulatory updates and license opportunities. Pro subscribers get daily alerts, state-specific filtering, compliance calendar access, license deadline tracking, and historical analytics. Enterprise adds team access, API integration, and custom reports.",
  },
  {
    question: "How quickly do you report regulatory changes?",
    answer: "New regulatory changes are typically in your next issue within 24-48 hours of official posting. Pro subscribers get same-day alerts for critical compliance updates and license application windows.",
  },
  {
    question: "Do you cover all legal cannabis states?",
    answer: "Yes, we monitor all 40+ states with legal cannabis programs, including both recreational and medical markets. Our coverage includes licensing, compliance requirements, testing regulations, banking updates, and tax policy changes across all jurisdictions.",
  }
];

function FAQAccordionItem({ faq, isOpen, onClick }: {
  faq: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-white/15 rounded-lg bg-white/[0.06] hover:border-gold/30 transition-all duration-200">
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
          <div className="text-gray-200 leading-relaxed">{faq.answer}</div>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-forest relative">
      <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest-400 to-forest" />
      
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Frequently asked <span className="text-gold">questions</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get answers to the most common questions about LicensedEdge and how it can
            help you navigate cannabis regulation.
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

        <div className="mt-12 text-center p-8 bg-gradient-to-r from-forest-500/50 to-forest-400/50 border border-gold/20 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-2">Still have questions?</h3>
          <p className="text-gray-300 mb-6">
            We&apos;re here to help you understand how LicensedEdge can keep you ahead of cannabis regulation.
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
