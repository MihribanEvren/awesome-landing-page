const RectangleLayout = ({ children }) => {
  return (
    <div className="relative bg-customLightYellow">
      <div
        className="absolute top-0 right-0 w-full h-[806px] transform bg-layoutRectangleColor"
        style={{
          clipPath: 'polygon(100% 16%, 0 100%, 100% 100%)',
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default RectangleLayout;

const Hero = () => {
  return (
    <div className="container flex items-center justify-between h-[583px]">
      <div className="flex flex-col items-center justify-center">
        <h1>Collectible Sneakers</h1>
        <p>
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </p>
        <div className="flex items-center justify-center">
          <Button></Button>
          <Button outline={false}></Button>
        </div>
      </div>
      <div>
        <div className="relative">
          <div className="absolute transform bg-heroRectangleColor -translate-y-3/4 top-1/2  w-[367px] h-[372px] rounded-[50px] rotate-5" />
          <div className="relative z-10 transform -translate-y-28">
            <img src={Shoe} alt="Shoe image" />
          </div>
        </div>
      </div>
    </div>
  );
};
