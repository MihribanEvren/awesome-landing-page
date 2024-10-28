import Shoe from '../../assets/PexelsPhoto.png';
import Features from '../Features/Features';
import Button from '../SharedElements/Button';

const Hero = () => {
  return (
    <div className="relative min-h-[806px] bg-amber-50">
      {/* background pattern */}
      <div className="h-[806px] w-full bg-amber-100 absolute -z-9 right-0 [clip-path:polygon(100%_20%,0%_100%,100%_100%)]"></div>
      {/* hero section */}
      <div className="container py-20">
        <div className="flex items-center justify-center ">
          <div className="flex flex-col gap-12">
            <h1 className="font-extrabold leading-[79.2px] text-7xl text-slate-900">
              Collectible Sneakers
            </h1>
            <p className="text-lg leading-7">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </p>
            <div className="flex items-center justify-start">
              <Button size={'l'}></Button>
              <Button outline={false} text="Watch Demo"></Button>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute w-[367px] h-[372px] top-12 left-12  bg-amber-400 rounded-[50px]"></div>
              <div className="relative z-10 w-[486px] ">
                <img src={Shoe} alt="Shoe" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features section */}
      <div className="container relative my-20 z-11">
        <div className="flex items-center justify-center gap-24">
          <div className="flex flex-col items-start justify-center gap-4">
            <h2>icon</h2>
            <h3 className="text-xl font-medium text-slate-900 leading-[17.6px]">
              Nibh Viverra
            </h3>
            <p className="text-lg text-slate-900">
              Sit bibendum donec dolor fames neque vulputate non vit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div className="flex flex-col gap-[10px] items-start justify-center">
            <h2>icon</h2>
            <h3>Nibh Viverra</h3>
            <p>
              Sit bibendum donec dolor fames neque vulputate non vit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div className="flex flex-col gap-[10px] items-start justify-center">
            <h2>icon</h2>
            <h3>Nibh Viverra</h3>
            <p>
              Sit bibendum donec dolor fames neque vulputate non vit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
