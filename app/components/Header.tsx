interface HeaderProps {
  siteName?: string;
  navigationLinks: string[];
}

export default function Header({ siteName = "Site name", navigationLinks }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-20 py-8">
      <div className="product-nav-link">{siteName}</div>
      <nav className="flex items-center gap-12">
        {navigationLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            className={index === navigationLinks.length - 1 
              ? "bg-product-button-bg text-product-button-text px-6 py-3 rounded-md product-button-text hover:opacity-90 transition-opacity" 
              : "product-nav-link hover:opacity-70 transition-opacity"}
          >
            {link}
          </a>
        ))}
        <button className="bg-product-button-bg text-product-button-text px-6 py-3 rounded-md product-button-text hover:opacity-90 transition-opacity">
          Button
        </button>
      </nav>
    </header>
  );
}