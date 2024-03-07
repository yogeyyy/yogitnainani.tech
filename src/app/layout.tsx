import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" />
        <title>Yogit's Portfolio</title>
      </head>
      <body className="bg-[#0C0C0F]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
