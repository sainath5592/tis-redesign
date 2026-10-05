import { Outfit } from 'next/font/google';
import './globals.css';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://tis.edu.in'),
  title: "Boarding School in Dehradun India | Tula's International School",
  description: "Tula's International School (TIS) is a top CBSE co-ed boarding school in Dehradun, Uttarakhand. Offering Modern Gurukul education, 16+ sports, and world-class residential facilities from Class 4 to 12.",
  keywords: [
    "boarding school in dehradun india",
    "cbse co-ed boarding school in dehradun",
    "coed boarding school in dehradun india",
    "residential school in uttarakhand india",
    "class 4 to 12 boarding school in dehradun",
    "tulas international school dehradun",
  ],
  authors: [{ name: "Tula's International School" }],
  openGraph: {
    title: "Boarding School in Dehradun India | Tula's International School",
    description: "CBSE-affiliated co-ed boarding school in Dehradun, Uttarakhand for boys and girls from Class 4 to 12.",
    url: "https://tis.edu.in/",
    siteName: "Tula's International School",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-campus.jpg",
        width: 1200,
        height: 630,
        alt: "Tula's International School Campus in Dehradun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boarding School in Dehradun India | Tula's International School",
    description: "CBSE-affiliated co-ed boarding school for boys and girls from Class 4 to 12.",
    images: ["/images/hero-campus.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${outfit.variable} dark scroll-smooth`}>
      <body className="bg-[#0b0f19] text-slate-100 min-h-screen antialiased selection:bg-[#b90124] selection:text-white">
        <ScrollProgress />
        <CustomCursor />
        <main>{children}</main>
      </body>
    </html>
  );
}
