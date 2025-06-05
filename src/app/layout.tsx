import "./globals.css";
import { Geist } from "next/font/google";
import Navbar from "./components/Navbar";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
