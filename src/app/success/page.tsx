import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import SuccessContent from "./SuccessContent";

export const metadata: Metadata = {
  title: "Welcome to ContractPulse Pro! — ContractPulse",
  description: "Your ContractPulse Pro subscription is active. Get ready for daily contract intelligence and exclusive data access.",
};

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto px-6 py-16 text-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}