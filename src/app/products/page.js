"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight, ExternalLink } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const categories = [
    {
        id: 1,
        name: "Premium Sarees",
        description: "Elegant silk, cotton, and designer sarees for all occasions. Direct from Erode's best looms.",
        image: "/category-saree.jpg",
        items: ["Kanchipuram Silk", "Soft Silk", "Cotton Silk", "Printed Sarees"]
    },
    {
        id: 2,
        name: "Shirt Materials",
        description: "High-quality cotton and linen fabrics for men's shirts. Durable and comfortable.",
        image: "/category-fabrics.jpg",
        items: ["100% Cotton", "Linen Blends", "Digital Prints", "Checks & Stripes"]
    },
    {
        id: 3,
        name: "Dhoti & Traditional Wear",
        description: "Authentic traditional attire crafted with premium yarns for maximum comfort.",
        image: "/category-fabrics.jpg", // Using fabric as placeholder
        items: ["Veshti / Dhoti", "Angavastram", "Traditional Sets"]
    },
    {
        id: 4,
        name: "Cotton Fabrics",
        description: "Breathable and sustainable cotton materials suitable for various tailoring needs.",
        image: "/hero-textile.jpg", // Using hero as placeholder
        items: ["Plain Cotton", "Handloom Cotton", "Printed Fabrics", "Voile"]
    }
];

export default function Products() {
    return (
        <PageWrapper>
            {/* Page Header */}
            <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">Our Catalog</span>
                        <h1 className="text-4xl md:text-5xl text-brand-blue mb-6">Textile Categories</h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We offer a wide range of wholesale and retail textile goods.
                            Our collection is curated to ensure the highest quality at competitive prices.
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100"
                            >
                                <div className="md:w-1/2 relative h-72 md:h-auto overflow-hidden">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors"></div>
                                </div>

                                <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                                    <div className="w-12 h-12 bg-brand-blue/5 rounded-full flex items-center justify-center text-brand-blue mb-6">
                                        <ShoppingBag size={24} />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl text-brand-blue mb-4">{category.name}</h2>
                                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                                        {category.description}
                                    </p>

                                    <div className="mb-8">
                                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">Key Offerings</p>
                                        <div className="flex flex-wrap gap-2">
                                            {category.items.map((item) => (
                                                <span key={item} className="px-3 py-1 bg-slate-50 text-slate-600 text-[11px] rounded-full border border-slate-100">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <a
                                        href="/contact"
                                        className="flex items-center space-x-2 text-brand-blue font-bold group/link"
                                    >
                                        <span>Enquire Now</span>
                                        <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-2" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bulk Order Section */}
            <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
                <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-2/3">
                        <h2 className="text-3xl md:text-4xl mb-6">Wholesale & Bulk Inquiries</h2>
                        <p className="text-xl text-blue-100/80 mb-8 leading-relaxed">
                            We specialize in bulk supplies for wholesalers, retailers, and boutique owners.
                            Get custom quotes and competitive pricing for large scale orders.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="tel:+919894715530" className="btn-primary bg-brand-gold text-brand-blue hover:bg-brand-gold-light">
                                Call for Wholesale
                            </a>
                            <a href="mailto:rajmohantraders2025@gmail.com" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-brand-blue">
                                Email Requirements
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-1/3">
                        <div className="p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20">
                            <ul className="space-y-4">
                                {[
                                    "Direct Sourcing from Looms",
                                    "Custom Packaging Available",
                                    "Timely Delivery Assurance",
                                    "GST Invoicing for All Orders"
                                ].map((text) => (
                                    <li key={text} className="flex items-center space-x-3 text-sm">
                                        <div className="w-6 h-6 bg-brand-gold/20 rounded-full flex items-center justify-center shrink-0">
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                            >
                                                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
                                            </motion.div>
                                        </div>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
