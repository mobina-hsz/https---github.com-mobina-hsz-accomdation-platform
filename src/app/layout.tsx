import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "خانه‌راه | رزرو اقامتگاه",
  description: "اقامتگاه دلخواهت را پیدا کن و با خیال راحت راهی سفر شو.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
