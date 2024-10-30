import Button from '../SharedElements/Button';
import Video from '../../assets/images/Video.png';
import { Check } from 'lucide-react';
import ImageContainer from '../SharedElements/ImageContainer';
import PlayOverlay from '../SharedElements/PlayOverlay';

function WhyJoinUs() {
  return (
    <div className="py-40">
      <div className="flex items-center justify-between gap-20 p-20 shadow-xl bg-[#FFFFFF] rounded-[30px]">
        <div className="flex flex-col items-start justify-center gap-6 ">
          <h3 className="text-[56px] font-extrabold leading-tight text-slate-900">
            Why join us
          </h3>
          <ul className="flex flex-col items-start justify-center gap-2 text-xl text-slate-900 leading-[180%]">
            <div className="flex items-center gap-2">
              <Check size={18} className="text-green-700" />
              <li>Est et in pharetra magna adipiscing ornare aliquam.</li>
            </div>
            <div className="flex items-center gap-2">
              <Check size={18} className="text-green-700" />
              <li>Tellus arcu sed consequat ac velit ut eu blandit.</li>
            </div>
            <div className="flex items-center gap-2">
              <Check size={18} className="text-green-700" />
              <li>Ullamcorper ornare in et egestas dolor orci.</li>
            </div>
          </ul>
          <Button />
        </div>
        <div>
          <ImageContainer width="max-w-full" height="h-auto">
            <img
              src={Video}
              alt="Video thumbnail"
              className="w-full rounded-b-xl"
            />
            <PlayOverlay size={96} />
          </ImageContainer>
        </div>
      </div>
    </div>
  );
}

export default WhyJoinUs;
