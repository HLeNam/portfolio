import { Inter } from "next/font/google";

import { ScrollToTop } from "@/components/helper";
import { Provider } from "@/components/hoc";
import Footer from "@/components/home/footer";
import { ResponsiveNavbar } from "@/components/home/navbar";

import "./globals.css";

import type { Metadata } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HLeNam | Software Engineer & Creative Developer",
    template: "%s | HLeNam",
  },
  description:
    "Software Engineer specializing in building exceptional digital experiences. Explore my portfolio to see my latest projects, skills, and professional journey.",
  keywords: [
    "HLeNam",
    "Software Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Full-stack Developer",
  ],
  authors: [{ name: "HLeNam" }],
  creator: "HLeNam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hlenam.id.vn", // Thay đổi sau khi bạn có domain
    siteName: "HLeNam Portfolio",
    title: "HLeNam | Software Engineer & Creative Developer",
    description:
      "Software Engineer specializing in building exceptional digital experiences. Modern web applications, clean code, and user-centric design.",
    images: [
      {
        url: "/og-image.png", // Bạn cần tạo file này trong thư mục public
        width: 1200,
        height: 630,
        alt: "HLeNam Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HLeNam | Software Engineer & Creative Developer",
    description:
      "Software Engineer specializing in building exceptional digital experiences.",
    creator: "@your_twitter", // Thay bằng handle của bạn
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <Provider>
          <ResponsiveNavbar />
          {children}
          <Footer />
          <ScrollToTop />
        </Provider>
      </body>
    </html>
  );
}
