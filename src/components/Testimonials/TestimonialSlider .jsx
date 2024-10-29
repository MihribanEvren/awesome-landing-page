import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../SharedElements/Button';
import TestimonialCard from './TestimonialCard';

const TestimonialSlider = ({ testimonials, onNext, onPrev }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    },
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    if (onPrev) onPrev();
  }, [emblaApi, onPrev]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
    if (onNext) onNext();
  }, [emblaApi, onNext]);

  return (
    <div className="relative py-20">
      <div className="p-6 overflow-hidden" ref={emblaRef}>
        <div className="flex flex-row gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-none">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 flex items-center justify-center hidden gap-6 -top-14 lg:inline-flex">
        <Button
          onClick={scrollPrev}
          text=""
          size="md"
          iconLeft={<ChevronLeft />}
        />
        <Button
          onClick={scrollNext}
          size="md"
          text=""
          iconRight={<ChevronRight />}
        />
      </div>
    </div>
  );
};
export default TestimonialSlider;
