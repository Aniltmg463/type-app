'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface HeaderProps {
  siteName?: string;
  navigationLinks: string[];
  cartItemCount?: number;
  onCartClick?: () => void;
  onSearchChange?: (query: string) => void;
}

const getLinkPath = (linkName: string): string => {
  const linkMap: Record<string, string> = {
    'Article': '/article',
    'Shop': '/shop',
    'Product Detail': '/product-detail',
    'Landing': '/landing',
    'Home': '/',
  };
  return linkMap[linkName] || '#';
};

// Search Icon Component
const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

// Cart Icon Component
const CartIcon = ({ count }: { count?: number }) => (
  <div className="relative">
    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L5 3H3m4 10v6a1 1 0 001 1h8a1 1 0 001-1v-6m-9 0h10" />
    </svg>
    {count && count > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        {count > 99 ? '99+' : count}
      </span>
    )}
  </div>
);

export default function Header({ 
  siteName = "Grocery Shop", 
  navigationLinks, 
  cartItemCount = 0,
  onCartClick,
  onSearchChange 
}: HeaderProps) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange?.(query);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery('');
      onSearchChange?.('');
    }
  };

  return (
    <header className="relative bg-white shadow-sm border-b border-gray-100">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between px-5 sm:px-10 lg:px-20 py-4 sm:py-6 lg:py-8">
        <Link 
          href="/" 
          className="product-nav-link text-base sm:text-lg lg:text-xl hover:opacity-80 transition-opacity shrink-0 font-bold text-gray-800"
        >
          {siteName}
        </Link>

        {/* Desktop Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-2 sm:gap-3 lg:gap-4">
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
          
          {/* Cart Button */}
          <button 
            onClick={onCartClick}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Shopping cart"
          >
            <CartIcon count={cartItemCount} />
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center justify-between px-4 py-4">
        <Link 
          href="/" 
          className="text-lg font-bold text-gray-800 hover:opacity-80 transition-opacity"
          onClick={handleLinkClick}
        >
          {siteName}
        </Link>
        
        <div className="flex items-center gap-2">
          {/* Mobile Search Toggle */}
          <button 
            onClick={toggleSearch}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle search"
          >
            <SearchIcon />
          </button>

          {/* Mobile Cart Button */}
          <button 
            onClick={onCartClick}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Shopping cart"
          >
            <CartIcon count={cartItemCount} />
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span 
                className={`block h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span 
                className={`block h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span 
                className={`block h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="lg:hidden px-4 pb-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleLinkClick}
          ></div>
          
          {/* Mobile Menu */}
          <nav className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-50">
            <div className="flex flex-col p-4 space-y-3">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={getLinkPath(link)}
                  onClick={handleLinkClick}
                  className="bg-product-button-bg text-product-button-text px-4 py-3 rounded-md text-sm font-inter font-medium hover:opacity-90 transition-all duration-200 text-center"
                >
                  {link}
                </Link>
              ))}
              <button 
                type="button"
                onClick={() => {
                  router.push('/');
                  handleLinkClick();
                }}
                className="bg-product-button-bg text-product-button-text px-4 py-3 rounded-md text-sm font-inter font-medium hover:opacity-90 transition-all duration-200 text-center"
              >
                Landing Page
              </button>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}