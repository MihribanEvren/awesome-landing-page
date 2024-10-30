const ImageContainer = ({ children, className = '', showButtons = true }) => {
  return (
    <div
      className={`mx-auto overflow-hidden rounded-2xl ${
        showButtons
          ? 'shadow-lg shadow-gray-400/50 bg-white p-1.5'
          : 'bg-white p-1.5'
      } ${className}`}
    >
      {showButtons && (
        <div className="flex items-center pt-2 pl-2 bg-white">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>
      )}
      <div className="relative">{children}</div>
    </div>
  );
};

export default ImageContainer;
