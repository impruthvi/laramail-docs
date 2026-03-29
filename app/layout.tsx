import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import {
  WebSiteSchema,
  SoftwareSourceCodeSchema,
} from "@/components/seo/json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://laramail.impruthvi.me"),
  title: {
    default: "laramail — AdonisJS mailer, but framework-agnostic",
    template: "%s | laramail",
  },
  description: "Laravel-style mailer for Node.js — Mail.fake() + Mail.assertSent() for zero-setup email testing, provider switching via env var, works with Express/Fastify/any framework.",
  keywords: ["laramail", "email", "nodejs", "typescript", "mail fake", "email testing", "smtp", "sendgrid", "ses", "mailgun", "resend", "postmark", "laravel", "mailable", "nodemailer mock"],
  authors: [{ name: "impruthvi" }],
  openGraph: {
    title: "laramail — AdonisJS mailer, but framework-agnostic",
    description: "Mail.fake() + Mail.assertSent() for zero-setup email testing. No Mailtrap, no mock setup. Works with Express, Fastify, or any Node.js app.",
    type: "website",
    url: "https://laramail.impruthvi.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "laramail",
    description: "Mail.fake() + Mail.assertSent() — zero-setup email testing for Node.js",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <WebSiteSchema />
        <SoftwareSourceCodeSchema />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
