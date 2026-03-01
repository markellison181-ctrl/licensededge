"use client";

import { useState, useEffect } from 'react';

interface ExitIntentPopupProps {
  onSubscribe?: (email: string) => void;
}

export default function ExitIntentPopup({ onSubscribe }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check if popup has already been shown this session
    const hasBeenShown = sessionStorage.getItem('exit-intent-shown');
    if (hasBeenShown) return;

    let exitTimer: NodeJS.Timeout | undefined;
    
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is moving toward top of viewport (browser close/back)
      if (e.clientY <= 50 && !hasBeenShown) {
        setIsVisible(true);
        sessionStorage.setItem('exit-intent-shown', 'true');
      }
    };

    const handleBeforeUnload = () => {
      if (!hasBeenShown) {
        // Note: Modern browsers don't allow custom beforeunload messages
        // but we can still detect the intent
        setIsVisible(true);
        sessionStorage.setItem('exit-intent-shown', 'true');
      }
    };

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (exitTimer) clearTimeout(exitTimer);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "exit-intent" }),
      });
      const data = await res.json();
      
      if (res.ok) {
        setStatus("success");
        setMessage("Perfect! Check your inbox for this week's top 5 opportunities.");
        setEmail("");
        if (onSubscribe) onSubscribe(email);
        
        // Auto-close after success
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        {/* Popup */}
        <div 
          className="bg-forest border-2 border-gold/30 rounded-2xl p-8 max-w-lg w-full relative shadow-2xl transform animate-in zoom-in-95 fade-in duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Close popup"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Icon */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full border-2 border-gold/30 mb-4">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Wait — get this week&apos;s top 5 federal contract opportunities free
            </h2>
            <p className="text-gray-300 text-sm">
              Before you go, grab the contract intelligence that could land your next big deal.
            </p>
          </div>

          {/* Form */}
          {status !== "success" ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for instant access"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm transition-all duration-200 focus:border-gold focus:bg-white/20"
                />
              </div>
              
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gold text-forest px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-50"
              >
                {status === "loading" ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-forest/30 border-t-forest rounded-full animate-spin"></div>
                    Subscribing...
                  </div>
                ) : (
                  "Send Me This Week's Top 5 Opportunities"
                )}
              </button>
              
              {message && status === "error" && (
                <p className="text-red-400 text-sm text-center">{message}</p>
              )}
              
              <p className="text-gray-500 text-xs text-center">
                Free weekly digest. No spam. Unsubscribe anytime.
              </p>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-full border-2 border-green-500/30 mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-green-400 font-medium">{message}</p>
              <p className="text-gray-400 text-sm mt-2">
                This popup will close automatically...
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}