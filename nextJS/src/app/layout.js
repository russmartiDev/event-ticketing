import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Event Tickets",
  description: "Buy Event Tickets Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
