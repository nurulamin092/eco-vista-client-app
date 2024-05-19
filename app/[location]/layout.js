import { Inter } from "next/font/google";
import Image from "next/image";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "EcoVista",
    description: "One page dashboard for eco information",
};

export default function RootLayout({ children, weather, aqi, wind, temperature }) {
    return (

        <div className="wrapper">

            <Image
                src="/background.png"
                className="bg-img"
                width={700}
                height={1200}
            />
            <div className="overlay"></div>
            <main className="!z-50 w-ful">
                <div className="container">
                    <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
                        {children}
                        {weather}
                        {aqi}
                        {wind}
                        {temperature}
                    </div>
                </div>

            </main>

        </div>
    );
}
