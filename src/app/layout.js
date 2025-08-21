"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react"; 
import NextAuthProvider from "@/provider/Nextauthprovider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <NextAuthProvider>
      <body>
       
          <Navbar />
          <ToastContainer
            position="top-right"
            autoClose={700}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
           <main className="flex-grow pt-10  min-h-screen">{children}</main>
          <Footer />
       
      </body>
      </NextAuthProvider>
    </html>
  );
}
