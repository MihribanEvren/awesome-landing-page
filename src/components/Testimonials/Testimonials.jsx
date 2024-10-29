import TestimonialSlider from './TestimonialSlider ';
import testimonialData from '../../data/Testimonials';
import { useState } from 'react';

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonialData.length) % testimonialData.length
    );
  };
  return (
    <div className="gap-20 p-20">
      <div className="flex items-center justify-between gap-12">
        <h2 className="text-[56px] font-extrabold leading-tight text-slate-900">
          Because they love us
        </h2>
      </div>
      <div>
        <TestimonialSlider
          testimonials={testimonialData}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </div>
  );
}

export default Testimonials;
