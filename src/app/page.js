"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const highlights = [
  {
    title: "Quality Textile Goods",
    description: "Premium fabrics sourced from the best manufacturers.",
    icon: <ShoppingBag className="text-brand-gold" size={24} />,
  },
  {
    title: "Wholesale & Retail",
    description: "Flexible supply options for businesses and individuals.",
    icon: <Users className="text-brand-gold" size={24} />,
  },
  {
    title: "Trusted Local Business",
    description: "Deep roots in Erode's famous textile community.",
    icon: <ShieldCheck className="text-brand-gold" size={24} />,
  },
  {
    title: "Competitive Pricing",
    description: "Best market rates without compromising on quality.",
    icon: <TrendingUp className="text-brand-gold" size={24} />,
  },
];

export default function Home() {
  return (
    <PageWrapper>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-textile.jpg"
            alt="Premium Textile Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/90 via-brand-blue-dark/70 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold-light text-xs sm:text-sm font-semibold mb-6 tracking-widest uppercase">
                Welcome to Rajmohan Traders
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-7xl text-white mb-6 leading-tight">
                Trusted Wholesale & <br />
                <span className="text-gradient-gold">Retail Textile</span> Traders
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                Experience excellence in Every Thread. We provide premium quality
                fabrics, sarees, and textile goods to Erode and beyond, built on
                decades of trust and reliability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <span>Enquire Now</span>
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/products"
                  className="btn-secondary w-full sm:w-auto flex items-center justify-center bg-white/10 border-white/20 text-white hover:bg-white hover:text-brand-blue"
                >
                  Explore Products
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FLOATING BADGES (DESKTOP ONLY) */}
        <div className="absolute bottom-10 left-0 w-full hidden md:block">
          <div className="container mx-auto px-6">
            <div className="flex space-x-12 text-white/60 text-sm uppercase tracking-wider">
              {["GST Registered", "Erode Based", "Premium Quality"].map(
                (item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle2 size={16} className="text-brand-gold" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl text-brand-blue mb-4">
              Why Choose Rajmohan Traders?
            </h2>
            <p className="text-slate-600">
              We take pride in our heritage and commitment to providing the finest
              textile products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl text-brand-blue mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO / LEGACY */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="relative w-full lg:w-1/2 h-[360px] sm:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/category-saree.jpg"
                alt="Textile Display"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              <div className="relative z-10 flex h-full items-end p-6 sm:p-8">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                  <p className="text-4xl font-bold text-brand-blue">100%</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-600">
                    Reliability
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-5 md:space-y-6 text-center lg:text-left">
              <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">
                Our Legacy
              </span>
              <h2 className="text-3xl sm:text-4xl text-brand-blue leading-tight">
                Authentic Textile Heritage <br /> From Erode
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Rajmohan Traders is a proprietorship firm led by{" "}
                <strong>Shanmugam Mohanraj</strong>, serving wholesale and retail
                customers with trusted quality.
              </p>
              <p className="text-slate-600 leading-relaxed">
                From traditional sarees to modern fabrics, we ensure fair
                pricing and consistent quality.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-brand-blue font-bold group"
              >
                Learn more about us
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="bg-brand-blue rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Ready to Source Premium Textiles?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Contact us for wholesale inquiries or visit our store in Erode.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="tel:+919385996553"
                className="w-full sm:w-auto bg-brand-gold text-brand-blue px-10 py-5 rounded-full font-bold text-lg shadow-xl"
              >
                Call Now
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-white text-brand-blue px-10 py-5 rounded-full font-bold text-lg shadow-xl"
              >
                Email Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
