import Link from "next/link";
import { Phone, Mail, MapPin, Award, ArrowRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="flex flex-col">
                                <span className="text-2xl font-display font-bold tracking-wider text-white">
                                    RAJMOHAN
                                </span>
                                <span className="text-xs font-medium tracking-[0.2em] text-brand-gold">
                                    TRADERS
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            A premium textile trading house based in Erode, Tamil Nadu.
                            Specializing in high-quality wholesale and retail textile goods
                            with a commitment to reliability and customer trust.
                        </p>
                        <div className="flex items-center space-x-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700 w-fit">
                            <Award className="text-brand-gold" size={20} />
                            <div className="flex flex-col text-[10px]">
                                <span className="text-white font-bold">GST REGISTERED</span>
                                <span>33BARPM7889M1ZK</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-display font-semibold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-4">
                            {["Home", "About Us", "Products", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                                        className="flex items-center group hover:text-brand-gold transition-colors"
                                    >
                                        <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-display font-semibold mb-6 text-lg">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="text-brand-gold shrink-0 mt-1" size={18} />
                                <span className="text-sm">
                                    171A, Eswaran Kovil Street,<br />
                                    Erode – 638001,<br />
                                    Tamil Nadu, India
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="text-brand-gold shrink-0" size={18} />
                                <a href="tel:+919894715530" className="text-sm hover:text-white transition-colors">
                                    +91 93859 96553
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="text-brand-gold shrink-0" size={18} />
                                <a href="mailto:rajmohantraders2025@gmail.com" className="text-sm hover:text-white transition-colors">
                                    rajmohantraders2025@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h4 className="text-white font-display font-semibold mb-6 text-lg">Business Hours</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between border-b border-slate-800 pb-2">
                                <span>Monday - Sunday</span>
                                <span className="text-white">9:00 AM - 10:30 PM</span>
                            </li>
                        </ul>
                        <div className="mt-8">
                            <p className="text-[11px] uppercase tracking-widest text-slate-500 mb-2">Proprietor</p>
                            <p className="text-sm font-semibold text-white">Shanmugam Mohanraj</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>© {currentYear} Rajmohan Traders – All Rights Reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0 text-sm">
  <Link href="/privacy-policy" className="hover:text-white transition-colors">
    Privacy Policy
  </Link>
  <Link href="/terms-of-service" className="hover:text-white transition-colors">
    Terms of Service
  </Link>
</div>

                </div>
            </div>
        </footer>
    );
}
