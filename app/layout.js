import { Inter } from "next/font/google";
import MainHeader from "@/components/(SSR Default)/mainHeader/mainHeader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community",
};

export default function RootLayout({ children }) {
  console.dir("Rendering layout.js");

  return (
    <html lang="en-us">
      <body className={inter.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

// (folderName) Group routes without affecting routing
