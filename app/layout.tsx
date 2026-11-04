import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.luckycoco.xyz"),
  title: "luckycoco",
  description: "오늘도 행복하세요!",
  openGraph: {
    title: "luckycoco",
    description: "오늘도 행복하세요!",
    url: "https://www.luckycoco.xyz",
    siteName: "luckycoco",
    images: [
      {
        url: "/bear-avatar.jpg",
        width: 1200,
        height: 630,
        alt: "luckycoco",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "luckycoco",
    description: "오늘도 행복하세요!",
    images: ["/bear-avatar.jpg"],
  },
  verification: {
    google: "7i-2bYg2eLxeWKD0tAn4bfkgd3X3egZYdoizP3O5-wM",
    other: {
      "naver-site-verification": "ca49a572ebaddd05d7659e1327ee11e143bc6159",
    },
  },
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

