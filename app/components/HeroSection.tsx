import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subheading: string;
  backgroundImage: string;
  showButton?: boolean;
  hasOverlay?: boolean;
}

export default function HeroSection({ 
  title, 
  subheading, 
  backgroundImage, 
  showButton = false,
  hasOverlay = false 
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-[720px] flex items-center justify-center">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      {hasOverlay && (
        <div className="absolute inset-0 bg-black/25" />
      )}
      <div className="relative z-10 flex flex-col items-center gap-10 px-20 text-center max-w-4xl">
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-inter text-[64px] font-bold leading-[90px] tracking-[-1.28px]">
            {title}
          </h1>
          <p className="text-white font-inter text-2xl font-medium">
            {subheading}
          </p>
        </div>
        {showButton && (
          <button className="bg-product-button-bg text-product-button-text px-6 py-4 rounded-md product-button-text hover:opacity-90 transition-opacity">
            Button
          </button>
        )}
      </div>
    </section>
  );
}