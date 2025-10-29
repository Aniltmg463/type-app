'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  siteName?: string;
  navigationLinks: string[];
}

// Map navigation link names to their routes
const getLinkPath = (linkName: string): string => {
  const linkMap: Record<string, string> = {
    'Article': '/article',
    'Shop': '/shop',
    'Product Detail': '/product-detail',
  };
  return linkMap[linkName] || '#';
};

export default function Header({ siteName = "Site name", navigationLinks }: HeaderProps) {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between px-5 sm:px-10 lg:px-20 py-6 lg:py-8">
      <Link href="/" className="product-nav-link text-base sm:text-lg lg:text-xl hover:opacity-80 transition-opacity">
        {siteName}
      </Link>
      <nav className="flex items-center gap-4 sm:gap-6 lg:gap-12">
        {navigationLinks.map((link, index) => (
          <Link
            key={index}
            href={getLinkPath(link)}
            className="hidden sm:inline-block bg-product-button-bg text-product-button-text px-4 lg:px-6 py-2 lg:py-3 rounded-md text-sm lg:text-base font-inter font-medium hover:opacity-90 hover:scale-105 transition-all duration-200"
          >
            {link}
          </Link>
        ))}
        <button 
          type="button"
          onClick={() => router.push('/')}
          className="bg-product-button-bg text-product-button-text px-4 lg:px-6 py-2 lg:py-3 rounded-md text-sm lg:text-base font-inter font-medium hover:opacity-90 hover:scale-105 transition-all duration-200"
        >
          Button
        </button>
      </nav>
    </header>
  );
}