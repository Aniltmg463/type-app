interface HeaderProps {
  siteName?: string;
  navigationLinks: string[];
}

export default function Header({ siteName = "Site name", navigationLinks }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-5 sm:px-10 lg:px-20 py-6 lg:py-8">
      <div className="product-nav-link text-base sm:text-lg lg:text-xl">{siteName}</div>
      <nav className="flex items-center gap-4 sm:gap-6 lg:gap-12">
        {navigationLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            className="hidden sm:inline-block bg-product-button-bg text-product-button-text px-4 lg:px-6 py-2 lg:py-3 rounded-md text-sm lg:text-base font-inter font-medium hover:opacity-90 transition-opacity"
          >
            {link}
          </a>
        ))}
        <button className="bg-product-button-bg text-product-button-text px-4 lg:px-6 py-2 lg:py-3 rounded-md text-sm lg:text-base font-inter font-medium hover:opacity-90 transition-opacity">
          Button
        </button>
      </nav>
    </header>
  );
}