import Sidebar from '@/components/Sidebar';
import clsx from 'clsx';
import './globals.css';
import { Gothic_A1 } from 'next/font/google';
export const gothic_a1 = Gothic_A1({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export const metadata = {
  title: 'Anhar Fadilah',
  description: 'Saya Anhar, seorang Software Developer di Google Indonesia , dan saya senang dapat berbagi karya dan pengalaman saya dengan Anda di sini.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className={clsx('mt-[9.438rem] w-[1000px]  mx-auto flex', gothic_a1.className)}>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
