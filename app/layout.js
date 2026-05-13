import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Southeastern Land Specialists | Land Clearing & Excavation | Buncombe, Burke & McDowell County NC",
  description:
    "Owner-operated land clearing, gravel driveway repair, drainage systems, forestry mulching, bush hogging & demolition serving Buncombe, Burke, and McDowell County NC. Call Todd at 828-231-1146 for a free estimate.",
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Southeastern Land Specialists, LLC",
  "description": "Owner-operated land clearing, gravel driveway repair, drainage systems, forestry mulching, bush hogging, and demolition & excavation serving Buncombe, Burke, and McDowell County, North Carolina.",
  "telephone": "+18282311146",
  "email": "info@southeasternlandspecialists.com",
  "url": "https://www.southeasternlandspecialists.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "P.O. Box 536",
    "addressLocality": "Swannanoa",
    "addressRegion": "NC",
    "postalCode": "28778",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Buncombe County, NC" },
    { "@type": "AdministrativeArea", "name": "Burke County, NC" },
    { "@type": "AdministrativeArea", "name": "McDowell County, NC" }
  ],
  "sameAs": [
    "https://www.facebook.com/southeasternlandspecialists/",
    "https://www.youtube.com/channel/UCx335vOs9rgdYB-n5pWIniA",
    "https://www.instagram.com/digginlife21/"
  ],
  "priceRange": "$$",
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "16:00" }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W7P7QCNS');` }} />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W7P7QCNS" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
