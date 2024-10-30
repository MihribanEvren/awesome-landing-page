import Button from '../SharedElements/Button';
import Sneaker from '../../assets/images/PexelsPhoto.png';

const Hero = () => {
  return (
    <div className="">
      <div className="py-20 ">
        <div className="flex items-center justify-between">
          <div className="py-20 mr-20">
            <div className="flex flex-col max-w-2xl gap-y-8">
              <h1 className="font-extrabold text-slate-900 text-7xl">
                Collectible Sneakers
              </h1>
              <p className="text-lg text-slate-900">
                Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
                suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
                ultrices amet.
              </p>
              <div className="flex items-center justify-start gap-x-4">
                <Button size="l"></Button>
                <Button text="Watch Demo" outline={false}></Button>
              </div>
            </div>
          </div>
          <div className="h-full">
            <img src={Sneaker} alt="Sneaker image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
