import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | InfiAutoDM - InfiSpark',
  description: 'Privacy Policy for InfiAutoDM Instagram automation services by InfiSpark.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F5F6F8] text-[#111827] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 sm:p-10 space-y-8">
        <div>
          <Link href="/" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 tracking-wide uppercase">
            ← Back to InfiAutoDM
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] mt-3">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#6B7280] mt-1">Last Updated: September 9, 2026</p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed text-[#374151]">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-[#111827]">1. Introduction</h2>
            <p>
              InfiAutoDM by <strong>InfiSpark</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) provides self-hosted Instagram comment-to-DM and messaging automation tools. We respect your privacy and are committed to protecting your personal data in accordance with Meta Platform Policies and applicable data protection laws.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-[#111827]">2. Information We Access &amp; Collect</h2>
            <p>When you connect your Instagram Professional / Creator account to InfiAutoDM, we access and process only the permissions required to run your configured automations:</p>
            <ul className="list-disc pl-5 space-y-1 text-[#4B5563]">
              <li><strong>Instagram Account Profile:</strong> Instagram User ID, username, name, and profile picture.</li>
              <li><strong>Public Comments &amp; Messages:</strong> Comment text, timestamp, media ID, and commenter username for posts on which you have enabled automated triggers.</li>
              <li><strong>Direct Messages:</strong> Inbound keyword messages sent directly to your connected account to trigger automated responses.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-[#111827]">3. How We Use Your Information</h2>
            <p>We process information strictly for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1 text-[#4B5563]">
              <li>Delivering automated DM responses and public comment replies that you have explicitly created and activated.</li>
              <li>Displaying analytics, funnel metrics, and automation delivery history in your dashboard.</li>
              <li>Ensuring compliance with Meta rate limits and API policies.</li>
            </ul>
            <p><strong>We do NOT sell, rent, or monetize your data or your followers&rsquo; data under any circumstance.</strong></p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-[#111827]">4. Data Storage &amp; Security</h2>
            <p>
              Your Meta App Secrets and Instagram OAuth access tokens are <strong>AES-256-GCM encrypted</strong> before being stored in your database. All communications with Meta APIs use secure HTTPS/TLS encryption.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-[#111827]">5. Data Retention &amp; Deletion Request</h2>
            <p>
              You may disconnect your Instagram account or delete your data at any time from the <strong>Settings</strong> page of your InfiAutoDM console. Disconnecting your account immediately purges your stored tokens and associated automations.
            </p>
            <p>
              To request full data deletion manually, contact us at <a href="mailto:support@infispark.in" className="text-indigo-600 underline">support@infispark.in</a>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-[#111827]">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="bg-[#F9FAFB] p-4 rounded-lg border border-[#E5E7EB] text-xs space-y-1">
              <p><strong>InfiSpark Technologies</strong></p>
              <p>Website: <a href="https://infispark.in" target="_blank" rel="noreferrer" className="text-indigo-600">https://infispark.in</a></p>
              <p>Email: <a href="mailto:support@infispark.in" className="text-indigo-600">support@infispark.in</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
