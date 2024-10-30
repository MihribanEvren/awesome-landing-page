import map from '../../assets/shapes/map.svg';
import ImageContainer from '../SharedElements/ImageContainer';
import image from '../../assets/images/ImageInWorldMap.png';

function WorldMap() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative " style={{ width: '1049px', height: '633px' }}>
        <div className="absolute w-[1049px] h-[633px]">
          <img
            src={map}
            alt=""
            className="object-contain opacity-50"
            aria-hidden="true"
          />
        </div>

        <div className="absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="flex flex-col items-center justify-center">
            <p className="font-extrabold leading-tight text-8xl">11,658,467</p>
            <p className="text-[56px] font-extrabold leading-tight">
              Shoes Collected
            </p>
          </div>
        </div>
        <div className="absolute ">
          <ImageContainer showButtons={false}>
            <img
              src={image}
              alt="Image in World Map"
              className="relative object-cover w-64 h-auto rounded-xl"
            />
          </ImageContainer>
          <div className="absolute p-3 bg-gray-300 rounded-b-md">
            <p className="max-w-64">
              Emma Simpson collected one pair of Cool Shoes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldMap;
