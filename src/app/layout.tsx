import type { Metadata } from "next";
import { Geist, Roboto } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umzug Firma X",
  description: "Umzugsunternehmen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto.variable} ${geistSans.variable}`}>
        <NextTopLoader speed={800} color='linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff)' showSpinner={false} />
        <Navigation />
        <div className='children'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
