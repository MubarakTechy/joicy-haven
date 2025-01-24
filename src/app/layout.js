import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Joicy's Haven - Premier Spa & Wellness Center in Ilorin, Kwara State",
  description: "Discover ultimate relaxation at Joicy's Haven, Ilorin's top spa destination. We offer rejuvenating massages, skincare treatments, and wellness services tailored to your needs. Visit us in Kwara State for a serene and luxurious experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
