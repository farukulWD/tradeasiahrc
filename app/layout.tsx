import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/providers/providers";
import NavigationBar from "@/components/common/NavigationBar";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TRADE ASIA HRC (PVT.) LIMITED",
  description:
    "THE TRADE ASIA HRC (PVT.) LIMITED HAS STARTED OPERATION AS AN ENGINE OIL IMPORTER COMPANY.Also we involved with business like Export, Import, Supply, Manufacturing, Real estate, Construction, Agro, Information Technology, Chemical, Pharmaceutical, E-commerce, Food and Beverage.We strive relentlessly to meet and exceed applicable standards and bear a great responsibility for people, machines and the environment. Satisfied and delighted customers are the top priority in our corporate philosophy. We offer great back up support services to our customers so as together we tackle the difficult task and solve them with both experience and commitments in focused team work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavigationBar></NavigationBar>
          {children}
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
