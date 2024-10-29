import { Play } from 'lucide-react';

const PlayOverlay = ({ size = 96 }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex items-center justify-center w-32 h-32 transition-all bg-black rounded-full cursor-pointer bg-opacity-60 hover:bg-opacity-70">
        <Play size={size} color="white" className="p-2" strokeWidth={2} />
      </div>
    </div>
  );
};

export default PlayOverlay;
