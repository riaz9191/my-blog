import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { siteConfig } from "@/config/site";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "FMCG",
    "Ecommerce",
    "Global Distribution",
    "Import/Export",
    "Wholesale",
    "Private Label",
  ],
  authors: [
    {
      name: "Riaz Ahammed",
      url: "https://github.com/riaz-ahammed-showrov",
    },
  ],
  creator: "Riaz Ahammed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      /**
       * The Open Graph image for social media sharing.
       * This image will be displayed when the website is shared on platforms like Facebook, LinkedIn, etc.
       * It's crucial for good social media presence.
       */
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@riaz_ahammed",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <SonnerToaster />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
