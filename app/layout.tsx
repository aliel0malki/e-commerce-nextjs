import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "../components/pages/home/navbar";
import Providers from "./provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Maliki Store",
  description: "Download the The Games For Free.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Providers>
          <NavBar />
          <hr />
          {children}
        </Providers>
      </body>
    </html>
  );
}
