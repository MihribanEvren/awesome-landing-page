import Button from '../SharedElements/Button';
import Sneaker from '../../assets/images/PexelsPhoto.png';

const Hero = () => {
  return (
    <div className="">
      <div className="py-20 ">
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
                <Button size="l"></Button>
                <Button text="Watch Demo" outline={false}></Button>
              </div>
            </div>
          </div>
          <div className="h-full mt-12 md:mt-0">
            <img src={Sneaker} alt="Sneaker image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
