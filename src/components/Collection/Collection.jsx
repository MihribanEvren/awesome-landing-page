import image from '../../assets/images/Picture.png';
import image2 from '../../assets/images/Picture2.png';
import image3 from '../../assets/images/Picture1.png';
import StackedImages from '../SharedElements/StackedImages';
import CarouselSection from './CarouselSection';

function Collection() {
  return (
    <div className="w-full pt-20 ">
      <div className="flex flex-col items-center justify-center gap-2 md:items-start sm:gap-8">
        <h4 className="text-4xl md:text-4xl lg:text-[56px] text-slate-900 font-bold md:font-extrabold">
          Grow your collection
        </h4>
        <p className="text-base leading-relaxed text-slate-900 md:text-lg">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>

      <div className="py-8 md:mb-0 sm:mb-20 sm:py-10 md:py-20">
        <div className="flex flex-col justify-start md:justify-around md:flex-row">
          <CarouselSection />

          <div className="relative p-8 md:p-0 h-[350px] md:h-[400px] lg:h-[500px]">
            <StackedImages image1={image} image2={image2} image3={image3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
