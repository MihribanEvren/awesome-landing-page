import useEmblaCarousel from 'embla-carousel-react';
import NavigationButton from './NavigationButton';
import {
  FaSearch,
  FaShieldAlt,
  FaRocket,
  FaDesktop,
  FaCompactDisc,
  FaCog,
} from 'react-icons/fa';
import { useState } from 'react';

const CarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  });

  const navItems = [
    { icon: FaSearch, text: 'Bibendum tellus' },
    { icon: FaShieldAlt, text: 'Cras eget' },
    { icon: FaRocket, text: 'Dolor pharetra' },
    { icon: FaDesktop, text: 'Amet, fringilla' },
    { icon: FaCompactDisc, text: 'Amet nibh' },
    { icon: FaCog, text: 'Sed velit' },
  ];

  return (
    <section className="">
      <div className="md:hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {navItems.map((item, index) => (
              <NavigationButton
                key={index}
                icon={item.icon}
                text={item.text}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        {navItems.map((item, index) => (
          <NavigationButton
            key={index}
            icon={item.icon}
            text={item.text}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default CarouselSection;
