import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Akash Biswas Portfolio",
  description: "Hello my name is Akash Biswas, i am a full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
