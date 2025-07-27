
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})



export default function RootLayout({
  children,
} ) {
  return (
    <html lang="en">
      <body
      >
       
          <Navbar/>
          {children}
          <Footer/>
       
      </body>
    </html>
  );
}