import type { Metadata } from "next";
import "./globals.css";
import { NavigationBar } from "./ui/NavigationBar";
import { lusitana } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Web Lords",
  description: "Create your new website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lusitana.className} bg-primary-light dark:bg-primary-dark text-on-primary-light dark:text-on-primary-dark`}
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
