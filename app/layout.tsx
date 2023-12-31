import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Navigation from "@components/navigation/Navigation";
import { getServerSession } from "next-auth";
import SessionProvider from "@components/sessionProvider";
import "@globals.scss";

export const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
export const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession();
    return (
        <html lang="en">
            <body className={`${montserrat.className}`}>
                <SessionProvider session={session}>
                    <div className="container">
                        <Navigation />
                    </div>
                    {children}
                </SessionProvider>
            </body>
        </html>
    )
}
