import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./provider";
import Navbar from "./components/navbar";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tuti Do",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-fit bg-no-repeat bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-800 from-[#d3dcf5] to-[#e6e6e6]">
        <Provider>
          <Navbar/>
          <div className="mx-auto">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
