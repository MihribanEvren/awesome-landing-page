const ImageContainer = ({ children }) => {
  return (
    <div className="max-w-2xl p-1.5 mx-auto overflow-hidden bg-white shadow-lg rounded-2xl shadow-gray-400/50">
      <div className="flex items-center pt-2 pl-2 bg-[#FFFFFF]">
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      </div>

      <div className="relative">{children}</div>
    </div>
  );
};

export default ImageContainer;
