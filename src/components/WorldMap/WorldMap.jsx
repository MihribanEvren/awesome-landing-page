import map from '../../assets/shapes/map.svg';
import ImageContainer from '../SharedElements/ImageContainer';
import image from '../../assets/images/ImageInWorldMap.png';

function WorldMap() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative flex flex-col items-center w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={map}
            alt=""
            className="object-contain w-full h-full opacity-50"
            aria-hidden="true"
          />
        </div>

        <div className="z-10 flex flex-col items-center max-w-xs text-center md:max-w-md">
          <ImageContainer showButtons={false}>
            <img
              src={image}
              alt="Image in World Map"
              className="relative object-contain w-48 h-auto md:w-64 rounded-xl"
            />
          </ImageContainer>
          <div className="p-2 mt-2 text-xs bg-gray-300 rounded-b-md md:p-3 md:text-sm">
            <p>Emma Simpson collected one pair of Cool Shoes.</p>
          </div>
        </div>

        <div className="z-10 mt-4 text-center text-white">
          <p className="text-3xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            11,658,467
          </p>
          <p className="text-lg font-extrabold md:text-2xl lg:text-4xl">
            Shoes Collected
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorldMap;
