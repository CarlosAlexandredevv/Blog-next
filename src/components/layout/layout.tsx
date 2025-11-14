import { Inter, PT_Sans_Caption } from 'next/font/google';
import { Header } from './header';
import { Footer } from './footer';
import { CallToAction } from '../templates/landing-page';
interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-sans',
});

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${inter.className} ${ptSansCaption.className} relative flex min-h-screen flex-col bg-gray-700`}
    >
      <Header />
      <main className="flex-1 flex flex-col mb-12">{children}</main>
      <CallToAction />
      <Footer />
    </div>
  );
}
