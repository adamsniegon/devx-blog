import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Navigation from "@components/navigation/Navigation";
import "@globals.scss";

export const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
export const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${montserrat.className}`}>
                <div className="container">
                    <Navigation />
                </div>
                {children}
            </body>
        </html>
    )
}
