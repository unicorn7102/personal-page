import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HE Mengfei Research Lab",
  description: "Research lab of HE Mengfei at University Name.",
  openGraph: {
    title: "HE Mengfei Research Lab",
    description: "Research lab of HE Mengfei at University Name.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Umami Analytics — replace data-website-id with your ID from umami.is */}
        <script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id="7cb317d4-fbaa-4f85-a82e-ed5da760fe0e"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
