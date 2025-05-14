import { Button } from '@/components/ui/button';
import { Geist, Geist_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export default function Home() {
  return (
    <div
      className={cn(
        'min-h-screen bg-background font-sans antialiased',
        geistSans.variable,
        geistMono.variable,
      )}
    >
      <Button variant="secondary">Hello World</Button>
    </div>
  );
}
