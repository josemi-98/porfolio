import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "José Miguel Martín - Desarrollador fronted & Full-Stack",
    description: "Porfolio de José Miguel Martín Berlango",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <link rel="icon" type="image/svg+xml" href="/image.png" />
            </head>
            <body className={`${inter.className}`}>
            {/* <div class="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}

            <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000000_40%,#800080_100%)]"></div>

                {children}
            </body>
        </html>
    );
}
