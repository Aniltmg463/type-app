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
    <section className="relative w-full h-[500px] sm:h-[600px] lg:h-[720px] flex items-center justify-center">
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
      <div className="relative z-10 flex flex-col items-center gap-6 lg:gap-10 px-5 sm:px-10 lg:px-20 text-center max-w-4xl">
        <div className="flex flex-col gap-3 lg:gap-4">
          <h1 className="text-white font-inter text-3xl sm:text-5xl lg:text-[64px] font-bold leading-tight lg:leading-[90px] tracking-[-1.28px]">
            {title}
          </h1>
          <p className="text-white font-inter text-lg sm:text-xl lg:text-2xl font-medium">
            {subheading}
          </p>
        </div>
        {showButton && (
          <button className="bg-product-button-bg text-product-button-text px-5 lg:px-6 py-3 lg:py-4 rounded-md text-base lg:text-lg font-inter font-medium hover:opacity-90 transition-opacity">
            Button
          </button>
        )}
      </div>
    </section>
  );
}