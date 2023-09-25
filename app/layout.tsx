import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "@globals.scss";
import { Suspense } from "react";

const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${playfairDisplay.className} ${montserrat.className} container`}>
                {children}
            </body>
        </html>
    )
}