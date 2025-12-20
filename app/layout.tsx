import type { Metadata } from "next";
import "./globals.css";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/header/Header";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Web Project for College",
  description: "A simple web project built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full bg-gray-50 dark:bg-gray-950 transition-colors duration-500 ease-in-out">
        <Toaster position="top-center"/>
        <div style={{ width: "100%", height: "100%", position: "fixed" , zIndex: -1}}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
