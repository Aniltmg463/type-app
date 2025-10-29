import type { NavigationLink, SocialIcon } from '../types/product';
import FacebookIcon from './icons/FacebookIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import YouTubeIcon from './icons/YouTubeIcon';
import InstagramIcon from './icons/InstagramIcon';

interface FooterProps {
  siteName?: string;
  navigationLinks: NavigationLink[];
  socialIcons: SocialIcon[];
}

const iconComponents = {
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
};

export default function Footer({ siteName = "Site name", navigationLinks, socialIcons }: FooterProps) {
  return (
    <footer className="px-5 sm:px-10 lg:px-20 py-12 lg:py-16">
      <div className="border-t border-product-border pt-8 lg:pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="flex flex-col gap-6 lg:gap-8">
            <h3 className="text-xl lg:text-2xl font-inter font-medium text-product-text-primary">{siteName}</h3>
            <div className="flex gap-3">
              {socialIcons.map((social) => {
                const IconComponent = iconComponents[social.icon as keyof typeof iconComponents];
                return IconComponent ? (
                  <a
                    key={social.name}
                    href="#"
                    className="hover:opacity-70 transition-opacity"
                    aria-label={social.name}
                  >
                    <IconComponent width={20} height={20} color="#828282" />
                  </a>
                ) : null;
              })}
            </div>
          </div>
          
          {navigationLinks.map((section, index) => (
            <div key={index} className="flex flex-col gap-6">
              <h4 className="product-footer-heading">{section.topic}</h4>
              <nav className="flex flex-col gap-3">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="product-footer-link hover:opacity-70 transition-opacity"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}