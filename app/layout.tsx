import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteLayout } from "@/components/layout/SiteLayout";

import "./globals.css";

export const metadata: Metadata = {
  title: "FieryPrompts AI",
  description: "AI-powered prompt engineering platform.",
};

interface RootLayoutProps { children: ReactNode; }

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return <html lang="en"><body><SiteLayout>{children}</SiteLayout></body></html>;
}
