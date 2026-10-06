import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "스마트텍 2026 - Next.js",
  description: "Next.js + TypeScript + Tailwind CSS App Router 프로젝트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-[#c0d6df] text-slate-950 antialiased selection:bg-[#1d4ed8] selection:text-white">
        {children}
      </body>
    </html>
  );
}

