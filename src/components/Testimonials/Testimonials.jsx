import TestimonialSlider from './TestimonialSlider ';
import testimonialData from '../../data/Testimonials';
import { useRef } from 'react';
import Button from '../SharedElements/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Testimonials() {
  const sliderRef = useRef(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollPrev();
    }
  };

  return (
    <div className="bg-amber-50">
      <div className="flex flex-col items-center justify-between px-4 pt-12 md:flex-row md:mb-0 lg:px-20 md:pt-20">
        <h2 className="text-[32px] md:text-[56px] font-bold md:font-extrabold leading-tight text-slate-900 md:mb-0">
          Because they love us
        </h2>

        <div className="items-center hidden gap-6 md:flex">
          <Button
            onClick={handlePrev}
            text=""
            size="md"
            iconLeft={<ChevronLeft />}
          />
          <Button
            onClick={handleNext}
            size="md"
            text=""
            iconRight={<ChevronRight />}
          />
        </div>
      </div>

      <div>
        <TestimonialSlider ref={sliderRef} testimonials={testimonialData} />
      </div>
    </div>
  );
}
export default Testimonials;
