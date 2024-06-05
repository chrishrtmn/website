import "@/styles/globals.css";
import { PHProvider } from "@/utilities/providers";
import { VercelToolbar } from "@vercel/toolbar/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://chrishrtmn.com"),
  title: {
    default: "Chris Hartman",
    template: "%s | Chris Hartman",
  },
  description: "UI developer, design engineer, and creator.",
  openGraph: {
    title: "Chris Hartman",
    description: "UI developer, design engineer, and creator.",
    url: "https://chrishrtmn.com",
    siteName: "Chris Hartman",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chris Hartman",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const shouldInjectToolbar = process.env.NODE_ENV === "development";
  return (
    <html lang="en">
      <PHProvider>
        <body className={inter.className}>
          {children}
          {shouldInjectToolbar && <VercelToolbar />}
        </body>
      </PHProvider>
    </html>
  );
}
