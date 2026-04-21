import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "معشبة الحاج العروسي - العلاج الطبيعي",
  description: "مكمل طبيعي وموثوق. احصل عليه الآن.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-cairo bg-gray-50">{children}</body>
    </html>
  );
}
