import { forwardRef, useCallback, useImperativeHandle } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import TestimonialCard from './TestimonialCard';

const TestimonialSlider = forwardRef(({ testimonials }, ref) => {
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
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useImperativeHandle(ref, () => ({
    scrollNext,
    scrollPrev,
  }));

  return (
    <div className="pt-4 md:pt-12 ">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex flex-row gap-6 py-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-none">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

TestimonialSlider.displayName = 'TestimonialSlider';
export default TestimonialSlider;
