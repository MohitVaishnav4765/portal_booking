import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bus Arabia - Effortless Booking. Seamless Travel.',
  description: 'Book bus tickets in Saudi Arabia and the Middle East with verified operators, instant seat lock guarantee, and bilingual Arabic/English booking flow.',
  keywords: ['Bus Saudi Arabia', 'SAPTCO tickets', 'Riyadh to Jeddah bus', 'Mecca Medina bus', 'حافلات السعودية', 'حجز باص'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@1,800;1,900&family=Cairo:wght@400;500;600;700;800;900&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700;1,800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#fcf9f8] text-[#1c1b1b] antialiased selection:bg-[#b20163] selection:text-white">
        {children}
      </body>
    </html>
  );
}
