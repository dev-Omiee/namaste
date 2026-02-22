import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/store/Provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Namaste Globals — Import & Export Excellence",
  description: "Premium import-export business specializing in natural jaggery products. Delivered worldwide with quality and trust.",
  keywords: "jaggery, gur, liquid jaggery, jaggery powder, import export, India, organic sweetener",
  openGraph: { title: "Namaste Globals", description: "Premium Indian exports.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ReduxProvider>
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </div>
          <Toaster position="top-right" />
        </ReduxProvider>
      </body>
    </html>
  );
}
