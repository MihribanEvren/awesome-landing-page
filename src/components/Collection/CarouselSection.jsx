import useEmblaCarousel from 'embla-carousel-react';
import NavigationButton from './NavigationButton';
import { Search, Shield, Rocket, Monitor, Disc, Settings } from 'lucide-react';

const CarouselSection = () => {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  });

  const navItems = [
    { icon: Search, text: 'Bibendum tellus' },
    { icon: Shield, text: 'Cras eget' },
    { icon: Rocket, text: 'Dolor pharetra' },
    { icon: Monitor, text: 'Amet, fringilla' },
    { icon: Disc, text: 'Amet nibh' },
    { icon: Settings, text: 'Sed velit' },
  ];

  return (
    <section className="">
      {/* Mobile Carousel */}
      <div className="md:hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {navItems.map((item, index) => (
              <NavigationButton key={index} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        {navItems.map((item, index) => (
          <NavigationButton key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </section>
  );
};

export default CarouselSection;
