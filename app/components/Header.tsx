'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  siteName?: string;
  navigationLinks: string[];
}

const getLinkPath = (linkName: string): string => {
  const linkMap: Record<string, string> = {
    'Article': '/article',
    'Shop': '/shop',
    'Product Detail': '/product-detail',
  };
  return linkMap[linkName] || '#';
};

export default function Header({ siteName = "Grocery Shop", navigationLinks }: HeaderProps) {
  const router = useRouter();

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 px-5 sm:px-10 lg:px-20 py-4 sm:py-6 lg:py-8">
      <Link 
        href="/" 
        className="product-nav-link text-base sm:text-lg lg:text-xl hover:opacity-80 transition-opacity shrink-0"
      >
        {siteName}
      </Link>
      <nav className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4">
        {navigationLinks.map((link, index) => (
          <Link
            key={index}
            href={getLinkPath(link)}
            className="bg-product-button-bg text-product-button-text px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-md text-xs sm:text-sm lg:text-base font-inter font-medium hover:opacity-90 hover:scale-105 transition-all duration-200 whitespace-nowrap"
          >
            {link}
          </Link>
        ))}
        <button 
          type="button"
          onClick={() => router.push('/')}
          className="bg-product-button-bg text-product-button-text px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-md text-xs sm:text-sm lg:text-base font-inter font-medium hover:opacity-90 hover:scale-105 transition-all duration-200 whitespace-nowrap"
        >
          Landing Page
        </button>
      </nav>
    </header>
  );
}