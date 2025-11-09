import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Lab Insights Dashboard - Demo",
  description: "Real-time lab results monitoring and risk stratification for proactive care management",
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
