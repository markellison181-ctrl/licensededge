"use client";

import { useState, useEffect, useRef } from 'react';

interface StatItem {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  animatedValue: number;
}

const stats: StatItem[] = [
  {
    value: "$30B",
    label: "cannabis market size tracked",
    prefix: "$",
    suffix: "B+",
    animatedValue: 30,
  },
  {
    value: "40",
    label: "legal cannabis states monitored",
    suffix: "+",
    animatedValue: 40,
  },
  {
    value: "15,000",
    label: "licensed cannabis operators",
    suffix: "+",
    animatedValue: 15000,
  },
];

function useCountAnimation(targetValue: number, shouldStart: boolean): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 FPS
    const stepValue = targetValue / steps;
    const stepDuration = duration / steps;

    let currentValue = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      currentValue = Math.min(targetValue, Math.floor(stepValue * step));
      setCount(currentValue);

      if (step >= steps) {
        clearInterval(timer);
        setCount(targetValue);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [targetValue, shouldStart]);

  return count;
}

function StatCounter({ stat, shouldAnimate }: { stat: StatItem; shouldAnimate: boolean }) {
  const animatedCount = useCountAnimation(stat.animatedValue, shouldAnimate);

  const formatNumber = (num: number): string => {
    if (stat.suffix === "B+") {
      return num.toString();
    }
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <div className="text-center group">
      <div className="text-3xl md:text-5xl font-bold text-gold mb-2 tabular-nums">
        {stat.prefix}
        {formatNumber(animatedCount)}
        {stat.suffix}
      </div>
      <div className="text-gray-300 text-sm md:text-base leading-relaxed">
        {stat.label}
      </div>
    </div>
  );
}

export default function AnimatedStats() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: '-50px 0px', // Start animation slightly after entering viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-20 bg-emerald-500 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(201,168,76,0.3) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }} 
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Powering smarter <span className="text-gold">cannabis operations</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            LicensedEdge processes regulatory data from 40+ legal states to give you
            the cannabis intelligence that matters.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ease-out ${
                isInView 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`, // Stagger the animations
              }}
            >
              <StatCounter stat={stat} shouldAnimate={isInView} />
            </div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-16 pt-8 border-t border-emerald-50/20">
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-lg font-semibold text-white">Real-time Processing</div>
              <div className="text-gray-400 text-sm">
                Data refreshed daily from official state regulatory sources
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-lg font-semibold text-white">Professional Network</div>
              <div className="text-gray-400 text-sm">
                Trusted by operators, compliance officers, and cannabis professionals
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}