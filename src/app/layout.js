import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Rajmohan Traders | Trusted Textile Traders in Erode",
  description: "Quality Wholesale and Retail Textile Goods in Erode, Tamil Nadu. Founded by Shanmugam Mohanraj, Rajmohan Traders provides premium sarees, fabrics, and more.",
  keywords: "Rajmohan Traders, Textile Traders Erode, Wholesale Textiles Tamil Nadu, Retail Textiles Erode, Shanmugam Mohanraj, Textile Business India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
