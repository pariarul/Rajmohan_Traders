"use client";

import PageWrapper from "@/components/PageWrapper";
import {
  FileText,
  Briefcase,
  Tag,
  Copyright,
  AlertTriangle,
  Scale
} from "lucide-react";

export default function TermsOfService() {
  return (
    <PageWrapper>

      {/* Header */}
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-gold/10 mb-6">
            <FileText className="text-brand-gold" size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl text-brand-blue mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Please read these terms carefully before using the Rajmohan Traders
            website and services.
          </p>
        </div>
      </section>

      {/* Content Card */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 space-y-10">

            {/* Intro */}
            <p className="text-slate-600 leading-relaxed text-lg">
              By accessing or using this website, you acknowledge that you have
              read, understood, and agree to be bound by these Terms of Service
              of Rajmohan Traders.
            </p>

            {/* Section */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                <Briefcase className="text-brand-blue" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-brand-blue mb-2">
                  Business Nature
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Rajmohan Traders operates as a wholesale and retail textile
                  trading business. All information provided on this website is
                  intended solely for general business reference.
                </p>
              </div>
            </div>

            {/* Section */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                <Tag className="text-brand-blue" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-brand-blue mb-2">
                  Pricing & Orders
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Product pricing, availability, and specifications may change
                  without prior notice. Orders are confirmed only after direct
                  communication and mutual agreement.
                </p>
              </div>
            </div>

            {/* Section */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                <Copyright className="text-brand-blue" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-brand-blue mb-2">
                  Intellectual Property
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  All content including text, images, logos, and branding
                  materials on this website are the intellectual property of
                  Rajmohan Traders and may not be reproduced without written
                  permission.
                </p>
              </div>
            </div>

            {/* Section */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center shrink-0">
                <AlertTriangle className="text-yellow-600" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-brand-blue mb-2">
                  Limitation of Liability
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Rajmohan Traders shall not be liable for any indirect,
                  incidental, or consequential damages arising from the use of
                  this website or its content.
                </p>
              </div>
            </div>

            {/* Section */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                <Scale className="text-brand-blue" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-brand-blue mb-2">
                  Governing Law
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  These Terms of Service are governed by the laws of India. Any
                  disputes shall be subject to the jurisdiction of Erode, Tamil
                  Nadu.
                </p>
              </div>
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
