'use client';

import './globals.css';
import { AuthProvider } from './context/AuthContext';
import { Inter } from 'next/font/google';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <main>{children}</main>
          {/* <Footer /> */}
        </AuthProvider>
      </body>
    </html>
  );
} 