import ImageContainer from './ImageContainer';

const StackedImages = ({ image1, image2, image3, className = '' }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full h-full">
        <div className="relative md:w-[85%] lg:w-[80%]">
          <ImageContainer>
            <img
              src={image2}
              alt="Collection piece 2"
              className="object-cover w-full h-auto rounded-b-xl"
            />
          </ImageContainer>
        </div>

        <div
          className="absolute top-[20%] left-[10%] w-full md:w-[85%] lg:w-[80%] 
                      md:left-[10%] md:top-[20%] 
                      lg:left-[10%] lg:top-[20%]"
        >
          <ImageContainer>
            <img
              src={image1}
              alt="Collection piece 1"
              className="object-cover w-full h-auto rounded-b-xl"
            />
          </ImageContainer>
        </div>

        <div
          className="absolute top-[45%] left-[88%] w-[35%] md:w-[40%] lg:w-[30%]
                      md:left-[70%] md:top-[38%]
                      lg:left-[75%] lg:top-[40%]"
        >
          <ImageContainer showButtons={false}>
            <img
              src={image3}
              alt="Collection piece 3"
              className="object-cover w-full h-auto rounded-xl"
            />
          </ImageContainer>
        </div>
      </div>
    </div>
  );
};

export default StackedImages;
