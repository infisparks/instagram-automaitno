import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | InfiAutoDM - InfiSpark',
  description: 'Terms of Service for InfiAutoDM by InfiSpark.',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#F5F6F8] text-[#111827] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 sm:p-10 space-y-8">
        <div>
          <Link href="/" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 tracking-wide uppercase">
            ← Back to InfiAutoDM
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] mt-3">
            Terms of Service
          </h1>
          <p className="text-xs text-[#6B7280] mt-1">Last Updated: September 9, 2026</p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed text-[#374151]">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-[#111827]">1. Agreement to Terms</h2>
            <p>
              By accessing or using InfiAutoDM provided by <strong>InfiSpark</strong>, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-[#111827]">2. Use of Service &amp; Meta Policies</h2>
            <p>
              You agree to use InfiAutoDM strictly in compliance with Meta&rsquo;s Platform Terms and Instagram Community Guidelines. You agree not to send unsolicited spam, abusive content, or violate rate limits.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-[#111827]">3. Disclaimer &amp; Liability</h2>
            <p>
              The service is provided &ldquo;as is&rdquo; without warranties of any kind. InfiSpark is not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-[#111827]">4. Contact Information</h2>
            <p>For inquiries regarding these terms, reach out to <a href="mailto:support@infispark.in" className="text-indigo-600">support@infispark.in</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
