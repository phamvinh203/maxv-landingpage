import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "700", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://maxv-landingpage.vercel.app/";
const siteName = "Maxv Accounting";
const defaultTitle = "Maxv Accounting - Phần mềm kế toán online cho doanh nghiệp";
const defaultDescription =
  "Phần mềm kế toán online Maxv Accounting — giải pháp kế toán toàn diện cho doanh nghiệp vừa và nhỏ. Tự động hóa hóa đơn, báo cáo thuế, quản lý tài chính hiệu quả mọi lúc mọi nơi.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "phần mềm kế toán",
    "kế toán online",
    "Maxv Accounting",
    "phần mềm kế toán doanh nghiệp",
    "kế toán đám mây",
    "hóa đơn điện tử",
    "báo cáo thuế",
    "kế toán vừa và nhỏ",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maxv Accounting - Phần mềm kế toán online",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-image.png"],
    creator: "@maxv_vn",
  },};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
