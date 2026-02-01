"use client";

import PageWrapper from "@/components/PageWrapper";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <PageWrapper>

      {/* Header */}
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-gold/10 mb-6">
            <ShieldCheck className="text-brand-gold" size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl text-brand-blue mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Your privacy matters to us. This policy explains how Rajmohan Traders
            collects, uses, and safeguards your information.
          </p>
        </div>
      </section>

      {/* Content Card */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 space-y-10">

            {/* Intro */}
            <p className="text-slate-600 leading-relaxed text-lg">
              Rajmohan Traders respects your privacy and is committed to protecting
              any personal information you share with us through our website or
              business communications.
            </p>

            {/* Section */}
            <div>
              <h2 className="text-xl font-semibold text-brand-blue mb-3">
                Information We Collect
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may collect personal and business-related information such as
                your name, phone number, email address, company details, and
                inquiry information when you interact with us.
              </p>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-xl font-semibold text-brand-blue mb-3">
                How We Use Your Information
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-slate-600">
                <li>Respond to inquiries and business communication</li>
                <li>Provide quotations, order updates, and service information</li>
                <li>Improve our website, offerings, and customer experience</li>
              </ul>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-xl font-semibold text-brand-blue mb-3">
                Data Protection & Security
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We do not sell, rent, or share your personal information with
                third parties. All data is handled responsibly and used strictly
                for legitimate business purposes.
              </p>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-xl font-semibold text-brand-blue mb-3">
                Third-Party Websites
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our website may contain links to third-party websites. Rajmohan
                Traders is not responsible for the privacy practices or content
                of those external sites.
              </p>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-xl font-semibold text-brand-blue mb-3">
                Policy Updates
              </h2>
              <p className="text-slate-600 leading-relaxed">
                This Privacy Policy may be updated periodically. Any changes will
                be posted on this page to keep you informed.
              </p>
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm">
                Last updated: {new Date().getFullYear()}
              </p>
              <p className="text-xs text-slate-400">
                © Rajmohan Traders. All rights reserved.
              </p>
            </div>

          </div>
        </div>
      </section>

    </PageWrapper>
  );
}
