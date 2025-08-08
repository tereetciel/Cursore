import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PrintShop — Boutique d\'imprimerie sécurisée',
  description: 'Vendez vos services d\'impression en ligne avec sécurité renforcée.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}