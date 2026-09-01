/*
 * Partners slider
 * - Four logos per row on desktop, two on tablet, one on mobile
 * - Arrows on every breakpoint, swipe/drag on touch devices
 */

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface Partner {
  src: string;
  alt: string;
  href?: string;
}

const partners: Partner[] = [
  {
    src: "/images/partners/pixels2pixels.png",
    alt: "Pixels2Pixels",
    href: "https://pixels2pixels.com",
  },
  {
    src: "/images/partners/ns-com-ex.jpeg",
    alt: "Produktna berza ad Novi Sad",
  },
  {
    src: "/images/partners/novosadski-sajam.png",
    alt: "Novosadski sajam",
  },
  {
    src: "/images/partners/sheraton.jpeg",
    alt: "Sheraton Novi Sad",
  },
  {
    src: "/images/partners/vrnjacka-banja.jpeg",
    alt: "Municipality of Vrnjačka Banja",
  },
];

const tileClass =
  "border border-[var(--color-copper)] rounded-sm overflow-hidden hover:border-[var(--color-copper)]/50 transition-all bg-white flex items-center justify-center aspect-[3/2] p-6";

export default function PartnersSlider() {
  return (
    <Carousel opts={{ loop: true, align: "start" }} className="w-full px-12">
      <CarouselContent className="-ml-6">
        {partners.map(partner => {
          const logo = (
            <img
              src={partner.src}
              alt={partner.alt}
              loading="lazy"
              className="max-w-full max-h-full object-contain"
            />
          );

          return (
            <CarouselItem
              key={partner.src}
              className="pl-6 md:basis-1/2 lg:basis-1/4"
            >
              {partner.href ? (
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={tileClass}
                >
                  {logo}
                </a>
              ) : (
                <div className={tileClass}>{logo}</div>
              )}
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" />
    </Carousel>
  );
}
