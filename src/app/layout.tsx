import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: 'عيادة سيد الأسنان في بغداد | أفضل رعاية سنية',
  description: 'عيادة سيد الأسنان في بغداد تقدم خدمات طب الأسنان التجميلية والعلاجية بأعلى جودة واحترافية.',
  openGraph: {
    "title": "عيادة سيد الأسنان في بغداد",
    "description": "ابتسامتك هي أولويتنا.",
    "type": "website",
    "siteName": "عيادة سيد الأسنان"
  },
};

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
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
