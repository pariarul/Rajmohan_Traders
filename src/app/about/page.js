"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Users,
  Briefcase,
  History,
  MapPin,
  Factory,
  Truck,
  CheckCircle
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

/* Animation Variants */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const overlayFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};


export default function About() {
  return (
    <PageWrapper>

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-20 bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -ml-48 -mb-48" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl text-white mb-6">
              About Rajmohan Traders
            </h1>
            <p className="text-xl text-blue-100/80 leading-relaxed">
              A trusted textile trading firm rooted in Erode, delivering
              consistent quality and transparent business practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= IDENTITY ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-8"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-3 text-brand-blue font-bold tracking-widest uppercase text-sm">
                <History className="text-brand-gold" />
                Our Identity
              </motion.div>

              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl text-brand-blue">
                Government Registered Textile Proprietorship
              </motion.h2>

              <motion.p variants={fadeUp} className="text-slate-600 text-lg leading-relaxed">
                <strong>Rajmohan Traders</strong>, founded by
                <strong> Shanmugam Mohanraj</strong>, operates as a proprietorship
                firm with direct ownership, accountability, and ethical trading
                at its core.
              </motion.p>

              <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed">
                Located in <strong>Erode, Tamil Nadu</strong> — India’s textile
                nerve center — we serve wholesalers, retailers, and bulk buyers
                with quality-checked textile products.
              </motion.p>

              <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border">
                  <Briefcase className="text-brand-gold" />
                  <div>
                    <h4 className="font-bold text-brand-blue">Proprietorship</h4>
                    <p className="text-xs text-slate-500">Owned & managed directly</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border">
                  <Award className="text-brand-gold" />
                  <div>
                    <h4 className="font-bold text-brand-blue">GST Registered</h4>
                    <p className="text-xs text-slate-500">33BARPM7889M1ZK</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/mohan.png"
                  alt="Textile Business"
                  width={600}
                  height={450}
                  className="h-[450px] w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= INFRASTRUCTURE ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl text-brand-blue mb-4">
              Infrastructure & Capabilities
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600">
              Strong sourcing, logistics, and quality control systems.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Factory />, title: "Strong Supplier Network" },
              { icon: <CheckCircle />, title: "Quality Inspection Process" },
              { icon: <Truck />, title: "Reliable Logistics Support" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-gold">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-blue">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMAGE GALLERY (7 IMAGES) ================= */}
<section className="py-24 bg-gray-50">
  <div className="container mx-auto px-6">

    {/* Heading */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-center max-w-2xl mx-auto mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-brand-blue">
        Our Work & Products
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        Premium-quality garments manufactured with precision, consistency,
        and global export standards.
      </p>
    </motion.div>

    {/* Grid */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {[
        { img: "/ab1.webp", title: "Cotton Knitwear", desc: "Soft, breathable export-quality fabrics" },
        { img: "/ab2.webp", title: "Casual Wear", desc: "Modern designs with durable stitching" },
        { img: "/ab3.webp", title: "Mens Apparel", desc: "Consistent sizing & premium finishing" },
        { img: "/a5.jpeg", title: "Bulk Production", desc: "Scalable manufacturing for global buyers" },
        { img: "/a6.avif", title: "Quality Control", desc: "Multi-level inspection & compliance" },
        { img: "/ab3.jpg", title: "Export Packaging", desc: "Buyer-ready packing & labeling" },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          whileHover={{ y: -6 }}
          className="group relative rounded-2xl overflow-hidden shadow-lg bg-white"
        >
          {/* Image */}
          <Image
            src={item.img}
            alt={item.title}
            width={400}
            height={300}
            className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <motion.div
            variants={overlayFade}
            className="absolute inset-0 bg-black/55 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          >
            <div className="p-6 text-white">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm mt-1 text-gray-200">{item.desc}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/* ================= LOCATION ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white border-2 border-brand-gold/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center">
                <MapPin className="text-white" size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-blue">
                  Based in Erode
                </h4>
                <p className="text-slate-500">
                  171A, Eswaran Kovil Street, Erode – 638001
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              className="px-8 py-3 bg-brand-blue text-white rounded-full font-bold hover:bg-brand-blue-dark transition"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

    </PageWrapper>
  );
}
