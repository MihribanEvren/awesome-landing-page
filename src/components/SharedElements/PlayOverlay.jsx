import { FaPlay } from 'react-icons/fa';

const PlayOverlay = ({ size = 96 }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex items-center justify-center transition-all bg-black rounded-full cursor-pointer w-28 h-28 md:h-32 md:w-32 bg-opacity-60 hover:bg-opacity-70">
        <FaPlay size={size} color="white" className="p-2" strokeWidth={2} />
      </div>
    </div>
  );
};

export default PlayOverlay;
