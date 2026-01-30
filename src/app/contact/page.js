"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    Award,
    ArrowRight,
    MessageSquare
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send to an API
        alert("Inquiry sent successfully! We will contact you soon.");
        setFormData({ name: "", phone: "", email: "", message: "" });
    };

    return (
        <PageWrapper>
            {/* Header */}
            <section className="pt-32 pb-16 bg-brand-blue text-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl mb-6">Connect With Us</h1>
                        <p className="text-xl text-blue-100/80 leading-relaxed">
                            Have a question about our products or need a wholesale quote?
                            Reach out to us and we'll get back to you within 24 hours.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Contact Info Sidebar */}
                        <div className="lg:col-span-1 space-y-10">
                            <div className="space-y-6">
                                <h2 className="text-2xl text-brand-blue font-bold">Store Details</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 mb-1">Visit Our Office</p>
                                            <address className="not-italic text-sm text-slate-500 leading-relaxed">
                                                171A, Eswaran Kovil Street,<br />
                                                Erode – 638001,<br />
                                                Tamil Nadu, India
                                            </address>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 mb-1">Call Us</p>
                                            <div className="flex flex-col space-y-1">
                                                <a href="tel:+919894715530" className="text-sm text-slate-500 hover:text-brand-blue">
                                                    +91 98947 15530
                                                </a>
                                                <a href="tel:+919385996553" className="text-sm text-slate-500 hover:text-brand-blue">
                                                    +91 93859 96553
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 mb-1">Email Inquiry</p>
                                            <a href="mailto:rajmohantraders2025@gmail.com" className="text-sm text-slate-500 hover:text-brand-blue break-all">
                                                rajmohantraders2025@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                <h3 className="text-lg font-bold text-brand-blue mb-6 flex items-center">
                                    <Clock size={20} className="mr-2 text-brand-gold" />
                                    Business Hours
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex justify-between text-sm py-2 border-b border-slate-200">
                                        <span className="text-slate-500">Mon - Sat</span>
                                        <span className="font-bold text-slate-900">9 AM - 8:30 PM</span>
                                    </li>
                                    <li className="flex justify-between text-sm py-2">
                                        <span className="text-slate-500">Sunday</span>
                                        <span className="font-bold text-brand-gold">Closed</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 bg-brand-blue rounded-3xl text-white">
                                <div className="flex items-center space-x-3 mb-4">
                                    <Award className="text-brand-gold" size={24} />
                                    <span className="font-bold uppercase tracking-widest text-xs">Proprietor</span>
                                </div>
                                <p className="text-lg font-medium">Shanmugam Mohanraj</p>
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">GSTIN</p>
                                    <p className="text-xs font-mono">33BARPM7889M1ZK</p>
                                </div>
                            </div>
                        </div>

                        {/* Inquiry Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 h-full">
                                <div className="mb-10">
                                    <h2 className="text-3xl font-bold text-brand-blue mb-4">Send an Enquiry</h2>
                                    <p className="text-slate-500">Fill out the form below and our team will contact you shortly.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:リング-2 focus:ring-brand-blue/20 outline-none transition-all text-slate-900"
                                                placeholder="e.g. Rahul Sharma"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                required
                                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:リング-2 focus:ring-brand-blue/20 outline-none transition-all text-slate-900"
                                                placeholder="e.g. +91 98765 43210"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:リング-2 focus:ring-brand-blue/20 outline-none transition-all text-slate-900"
                                            placeholder="e.g. support@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">Message / Requirements</label>
                                        <textarea
                                            rows="5"
                                            required
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:リング-2 focus:ring-brand-blue/20 outline-none transition-all text-slate-900 resize-none"
                                            placeholder="Tell us what you are looking for..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full md:w-auto px-12 py-5 bg-brand-blue text-white rounded-full font-bold text-lg hover:bg-brand-blue-dark transition-all flex items-center justify-center space-x-3 shadow-xl hover:scale-105 active:scale-95"
                                    >
                                        <span>Send Message</span>
                                        <Send size={18} />
                                    </button>
                                </form>

                                {/* Map Placeholder */}
                                <div className="mt-16 relative rounded-3xl overflow-hidden h-64 bg-slate-200 flex items-center justify-center border border-slate-200">
                                    <div className="text-center p-6">
                                        <MapPin className="text-brand-blue/40 mx-auto mb-4" size={48} />
                                        <p className="text-slate-500 font-medium italic">Map Location View - Erode, TN</p>
                                        <p className="text-[10px] text-slate-400 mt-2">171A, Eswaran Kovil Street, Erode</p>
                                    </div>
                                    <div className="absolute inset-0 bg-transparent cursor-pointer hover:bg-brand-blue/5 transition-colors"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Feature Bar */}
            <section className="pb-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex items-center space-x-6">
                            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-blue shrink-0">
                                <MessageSquare size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-brand-blue">Live Chat</h4>
                                <p className="text-xs text-slate-500">Available on WhatsApp</p>
                            </div>
                        </div>
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex items-center space-x-6">
                            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-blue shrink-0">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-brand-blue">Call Support</h4>
                                <p className="text-xs text-slate-500">9 AM - 8 PM IST</p>
                            </div>
                        </div>
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex items-center space-x-6">
                            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-blue shrink-0">
                                <Award size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-brand-blue">GST Invoiced</h4>
                                <p className="text-xs text-slate-500">Authenticated Business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
