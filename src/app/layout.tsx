import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Luxury Estate Group | Exclusive Real Estate',
  description: 'Discover unparalleled luxury properties and bespoke real estate services with Luxury Estate Group. Your trusted partner for high-end homes and investments.',
  keywords: ["luxury real estate, exclusive properties, high-end homes, luxury estates, real estate agent, luxury investments, property advisory, premium residences"],
  openGraph: {
    "title": "Luxury Estate Group | Exclusive Real Estate",
    "description": "Discover unparalleled luxury properties and bespoke real estate services with Luxury Estate Group.",
    "url": "https://www.luxuryestategroup.com",
    "siteName": "Luxury Estate Group",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/young-happy-smiling-caucasian-woman-traveller-fitting-dress-sunglasses-high-floor-bangkok_343596-1460.jpg",
        "alt": "Luxury Villa Exterior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Luxury Estate Group | Exclusive Real Estate",
    "description": "Discover unparalleled luxury properties and bespoke real estate services with Luxury Estate Group.",
    "images": [
      "http://img.b2bpic.net/free-photo/young-happy-smiling-caucasian-woman-traveller-fitting-dress-sunglasses-high-floor-bangkok_343596-1460.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const lato = Lato({
  variable: "--font-lato",  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
