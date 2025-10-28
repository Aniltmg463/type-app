import Image from 'next/image';

interface ContentSectionProps {
  heading: string;
  subheading: string;
  image: string;
  imagePosition: "left" | "right";
  showButtons?: boolean;
}

export default function ContentSection({ 
  heading, 
  subheading, 
  image, 
  imagePosition,
  showButtons = false 
}: ContentSectionProps) {
  const content = (
    <div className="flex flex-col gap-6 max-w-xl">
      <h2 className="product-title">{heading}</h2>
      <p className="text-2xl font-inter font-normal leading-9 text-product-text-secondary">
        {subheading}
      </p>
      {showButtons && (
        <div className="flex gap-4">
          <button className="bg-product-button-bg text-product-button-text px-6 py-4 rounded-lg text-2xl font-inter font-medium hover:opacity-90 transition-opacity">
            Button
          </button>
          <button className="bg-gray-200 text-product-text-primary px-6 py-4 rounded-lg text-2xl font-inter font-medium hover:opacity-90 transition-opacity">
            Secondary button
          </button>
        </div>
      )}
    </div>
  );

  const imageElement = (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={heading}
        fill
        className="object-cover"
      />
    </div>
  );

  return (
    <section className="px-20 py-16">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
        {imagePosition === 'left' ? (
          <>
            {imageElement}
            {content}
          </>
        ) : (
          <>
            {content}
            {imageElement}
          </>
        )}
      </div>
    </section>
  );
}