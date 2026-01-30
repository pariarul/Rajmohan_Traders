"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Users, Briefcase, History, MapPin } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

export default function About() {
    return (
        <PageWrapper>
            {/* Intro Header */}
            <section className="relative pt-32 pb-20 bg-brand-blue overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -ml-48 -mb-48"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl text-white mb-6">About Rajmohan Traders</h1>
                        <p className="text-xl text-blue-100/80 leading-relaxed">
                            Serving the textile heartland of India with integrity, quality, and excellence since inception.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* History & Identity */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-3 text-brand-blue font-bold tracking-widest uppercase text-sm">
                                <History size={20} className="text-brand-gold" />
                                <span>Our Identity</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl text-brand-blue">A Government Registered Proprietorship</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                <strong>Rajmohan Traders</strong> is a officially registered business entity founded by
                                <strong> Shanmugam Mohanraj</strong>. We operate as a proprietorship firm,
                                ensuring a personal commitment to quality and direct accountability in every transaction.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Located in Erode, Tamil Nadu—one of the largest textile hubs in India—we are
                                fully GST registered and government-approved. Our business is built on the
                                foundation of trust, transparency, and a deep understanding of the textile domain.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex items-start space-x-4 p-4 border border-slate-100 rounded-xl bg-slate-50">
                                    <Briefcase className="text-brand-gold shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold text-brand-blue">Proprietorship</h4>
                                        <p className="text-xs text-slate-500">Solely owned by S. Mohanraj</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 border border-slate-100 rounded-xl bg-slate-50">
                                    <Award className="text-brand-gold shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold text-brand-blue">GST Registered</h4>
                                        <p className="text-xs text-slate-500">33BARPM7889M1ZK</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl skew-y-1">
                                <Image
                                    src="/category-fabrics.jpg"
                                    alt="Textile Business Growth"
                                    width={600}
                                    height={450}
                                    className="object-cover w-full h-[450px]"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <ShieldCheck className="text-green-600" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Verified Business</p>
                                        <p className="text-xs text-slate-500">Established 2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl text-brand-blue mb-4">Our Core Values</h2>
                        <p className="text-slate-600">The principles that guide our everyday business operations.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Quality Assurance",
                                icon: <Award className="text-brand-blue" />,
                                desc: "We never compromise on the quality of our fabrics. Each batch is inspected to ensure it meets our standards."
                            },
                            {
                                title: "Customer Trust",
                                icon: <Users className="text-brand-blue" />,
                                desc: "We believe in long-term relationships over short-term gains. Our customers' trust is our biggest asset."
                            },
                            {
                                title: "Ethical Trading",
                                icon: <ShieldCheck className="text-brand-blue" />,
                                desc: "Fair pricing and transparent dealings are the cornerstones of Rajmohan Traders."
                            }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-lg transition-all text-center border border-white"
                            >
                                <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-brand-gold">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl text-brand-blue mb-4">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {value.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location Bar */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="bg-white border-2 border-brand-gold/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center space-x-6">
                            <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center shrink-0">
                                <MapPin className="text-white" size={28} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-brand-blue">Based in Erode</h4>
                                <p className="text-slate-500">171A, Eswaran Kovil Street, Erode – 638001</p>
                            </div>
                        </div>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            className="px-8 py-3 bg-brand-blue text-white rounded-full font-bold hover:bg-brand-blue-dark transition-all"
                        >
                            Get Directions
                        </a>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
