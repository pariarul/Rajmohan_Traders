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
  MapPin,
  Clock
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-textile.jpg" // Placeholder path for now, I'll need to move my generated images
            alt="Premium Textile Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/90 via-brand-blue-dark/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold-light text-sm font-semibold mb-6 tracking-widest uppercase">
                Welcome to Rajmohan Traders
              </span>
              <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
                Trusted Wholesale & <br />
                <span className="text-gradient-gold">Retail Textile</span> Traders
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                Experience excellence in Every Thread. We provide premium quality
                fabrics, sarees, and textile goods to Erode and beyond, built on
                decades of trust and reliability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary flex items-center justify-center space-x-2">
                  <span>Enquire Now</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/products" className="btn-secondary flex items-center justify-center bg-white/10 border-white/20 text-white hover:bg-white hover:text-brand-blue">
                  Explore Products
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Badges for Mobile-First visual appeal */}
        <div className="absolute bottom-10 left-0 w-full hidden md:block">
          <div className="container mx-auto px-6">
            <div className="flex space-x-12 text-white/60 text-sm tracking-wider uppercase">
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-brand-gold" />
                <span>GST Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-brand-gold" />
                <span>Erode Based</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-brand-gold" />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl text-brand-blue mb-4">Why Choose Rajmohan Traders?</h2>
            <p className="text-slate-600">
              We take pride in our heritage and commitment to providing the finest textile products to our valued customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl text-brand-blue mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/category-saree.jpg"
                  alt="Textile Display"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[500px]"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-brand-gold/10 rounded-full -z-10 blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/5 rounded-full -z-10"></div>

              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl border border-brand-gold/20 hidden md:block">
                <p className="text-4xl font-display font-bold text-brand-blue mb-1">100%</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Reliability</p>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-6">
              <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">Our Legacy</span>
              <h2 className="text-4xl text-brand-blue leading-tight">
                Authentic Textile Heritage <br /> From Erode
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Rajmohan Traders is a proprietorship firm led by <strong>Shanmugam Mohanraj</strong>.
                Based in the heart of Erode's textile hub, we have established ourselves
                as a reliable partner for both wholesale buyers and retail customers.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our commitment to quality and fair pricing has made us a preferred choice
                in the region. Whether you are looking for traditional sarees or modern
                fabrics, we offer a curated selection that meets the highest standards.
              </p>
              <div className="pt-6">
                <Link href="/about" className="text-brand-blue font-bold flex items-center space-x-2 group">
                  <span>Learn more about us</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-brand-blue rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,gold_1px,transparent_1px)] bg-[length:40px_40px]"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-5xl text-white mb-8">Ready to Source Premium Textiles?</h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl">
                Get in touch with us today for wholesale inquiries or visit our store in Erode for retail shopping.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="tel:+919894715530" className="bg-brand-gold text-brand-blue px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-gold-light transition-all shadow-xl">
                  Call: +91 98947 15530
                </a>
                <Link href="/contact" className="bg-white text-brand-blue px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
                  Email Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
