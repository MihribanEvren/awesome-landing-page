import Button from '../SharedElements/Button';
import Sneaker from '../../assets/images/PexelsPhoto.png';
import { BsPlayCircle } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className="w-full ">
      <div className="absolute inset-0 z-0 flex items-center justify-center"></div>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="md:py-20 md:mr-20 ">
          <div className="flex flex-col max-w-2xl text-center gap-y-8 md:text-start">
            <h1 className="text-[56px] font-extrabold text-slate-900 md:text-7xl  leading-[1.1]">
              Collectible Sneakers
            </h1>
            <p className="text-lg text-slate-900">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-x-4">
              <Button size="l" />
              <Button
                text="Watch Demo"
                outline={false}
                iconLeft={<BsPlayCircle />}
              ></Button>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-full mt-12 md:mt-0">
            <img
              src={Sneaker}
              alt="Sneaker image"
              className="lg:top-[14%] lg:right-[14%] md:top-[16%] md:right-[12%]"
            />
            <div className="absolute lg:top-[14%] top-[24%] right-0  sm:right-12  md:hidden lg:block bg-amber-400 lg:right-[14%] -z-10 w-[361px] h-[314px] md:w-[367px] md:h-[372px] rounded-[15%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
