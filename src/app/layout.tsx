import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import type { Metadata, Viewport } from "next";
import { Geist, Roboto } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto.variable} ${geistSans.variable}`}>
        <NextTopLoader
          speed={800}
          color='linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff)'
          showSpinner={false}
        />
        <Navigation />
        <AntdRegistry>
          <div className='children'>{children}</div>
        </AntdRegistry>
        <Footer />
      </body>
    </html>
  );
}
