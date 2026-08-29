import React from 'react';
import type { Metadata } from 'next';
import { ClientLayout } from '@/components/layout/ClientLayout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Brookfield Dental Associates | Dentist in Springfield & Falls Church VA',
  description:
    'Brookfield Dental Associates provides dental implants, veneers, teeth whitening, crowns, and emergency dental care in Springfield and Falls Church VA at 20% less than other offices.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
