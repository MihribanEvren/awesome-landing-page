import ImageContainer from './ImageContainer';

const StackedImages = ({ image1, image2, image3, className = '' }) => {
  return (
    <div className={`relative pr-16 md:px-0 w-full ${className}`}>
      <div className="relative w-full h-full">
        <div className="relative md:w-[85%] lg:w-[80%]">
          <ImageContainer>
            <img
              src={image2}
              alt="Collection piece 2"
              className="object-cover w-full min-w-96 rounded-b-xl"
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
          className="absolute top-[40%] left-[82%] w-[35%] md:w-[28%] lg:w-[30%]
              md:left-[75%] md:top-[42%]
              lg:left-[70%] lg:top-[40%]"
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
