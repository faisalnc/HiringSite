// app/ClientLayout.tsx
'use client';

import { Providers } from '@/redux/provider';
import Navbar from '@/components/Navbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Navbar />
      <main className="pt-20">
<div className="mx-auto max-w-7xl px-2 overflow-hidden rounded-2xl bg-white shadow-md">
          {children}
        </div>
      </main>
    </Providers>
  );
}
