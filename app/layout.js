import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Southeastern Land Specialists | Todd Kindy",
  description:
    "Professional land clearing, gravel driveway repair, drainage systems, forestry mulching, bush hogging, demolition & excavation services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
