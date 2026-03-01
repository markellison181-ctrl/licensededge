"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyBottomCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed this session
    const dismissed = sessionStorage.getItem('bottom-cta-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      // Show after scrolling 30% of page height
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent > 30 && !isDismissed) {
        setIsVisible(true);
      } else if (scrollPercent <= 30) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('bottom-cta-dismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-40 transform transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Gradient backdrop for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/95 to-forest/80 backdrop-blur-md"></div>
      
      <div className="relative border-t border-gold/20 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          {/* Message */}
          <div className="flex-1 min-w-0">
            <p className="text-white font-medium text-sm md:text-base truncate">
              <span className="hidden sm:inline">Get federal contract intelligence delivered daily</span>
              <span className="sm:hidden">Get daily contract alerts</span>
              <span className="text-gold ml-2">→ Subscribe Free</span>
            </p>
            <p className="text-gray-400 text-xs hidden md:block">
              Join 500+ government contractors getting the edge
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/#subscribe"
              className="bg-gold text-forest px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 whitespace-nowrap"
              onClick={() => {
                // Track conversion (add analytics later)
              }}
            >
              Subscribe Free
            </Link>
            
            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Dismiss notification"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Animated progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold/20">
          <div 
            className="h-full bg-gold transition-all duration-300 ease-out"
            style={{
              width: `${Math.min(100, (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)}%`
            }}
          />
        </div>
      </div>
    </div>
  );
}