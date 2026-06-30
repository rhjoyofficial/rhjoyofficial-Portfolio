import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { personSchema, websiteSchema } from "@/lib/schemas";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rakibul Hasan Joy — Full Stack Developer & AI Automation Engineer",
    template: "%s | Rakibul Hasan Joy",
  },
  description:
    "Full Stack Developer & AI Automation Engineer from Bangladesh. I build Laravel, React, and AI-powered web applications for businesses worldwide.",
  keywords: [
    "Laravel developer",
    "React developer",
    "AI automation",
    "Full stack developer Bangladesh",
    "hire Laravel developer",
    "n8n automation",
  ],
  authors: [{ name: "Rakibul Hasan Joy", url: "https://rakibulhasanjoy.com" }],
  creator: "Rakibul Hasan Joy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rakibulhasanjoy.com",
    siteName: "Rakibul Hasan Joy",
    title: "Rakibul Hasan Joy — Full Stack Developer & AI Automation Engineer",
    description: "I build web apps and AI systems that make businesses run faster.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakibul Hasan Joy — Full Stack Developer & AI Automation Engineer",
    description: "I build web apps and AI systems that make businesses run faster.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://rakibulhasanjoy.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
