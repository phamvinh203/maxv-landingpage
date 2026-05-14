import { faqItems } from "@/src/constants/dataSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://maxv-landingpage.vercel.app";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Maxv Accounting",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: "https://maxv.vn/wp-content/uploads/2024/04/Logo-Maxv-200x60-New-01.png",
    width: 200,
    height: 60,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+84-382-325-225",
    email: "SoftMaxv@gmail.com",
    contactType: "customer support",
    availableLanguage: "Vietnamese",
    hoursAvailable: "Mo-Sa 08:30-17:30",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tầng 2, số 180 phố Hoàng Ngân",
    addressLocality: "Hà Nội",
    addressRegion: "Phường Yên Hòa",
    addressCountry: "VN",
  },
  sameAs: [
    "https://www.facebook.com/www.maxv.vn",
    "https://www.youtube.com/@PhanMemKeToanMaxv",
    "https://www.tiktok.com/@maxv.vn",
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Maxv Accounting",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Windows, iOS, Android",
  description:
    "Phần mềm kế toán online toàn diện cho doanh nghiệp vừa và nhỏ. Tự động hóa hóa đơn điện tử, báo cáo thuế, quản lý tài chính trên nền tảng đám mây.",
  url: siteUrl,
  offers: {
    "@type": "Offer",
    price: "1650000",
    priceCurrency: "VND",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2500",
    bestRating: "5",
    worstRating: "1",
  },
  publisher: {
    "@type": "Organization",
    name: "Maxv Accounting",
    url: siteUrl,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Maxv Accounting",
  url: siteUrl,
  inLanguage: "vi",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
