import Button from '../SharedElements/Button';
import Video from '../../assets/images/Video.png';
import { AiOutlineCheck } from 'react-icons/ai';
import ImageContainer from '../SharedElements/ImageContainer';
import PlayOverlay from '../SharedElements/PlayOverlay';

function WhyJoinUs() {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-between gap-6 md:gap-20 px-4 md:px-20 py-12 md:py-20 shadow-xl bg-[#FFFFFF] rounded-[30px]">
      <div className="flex flex-col items-start justify-center gap-6 ">
        <h3 className=" text-[32px] md:text-[56px] w-full text-center md:text-start font-bold md:font-extrabold leading-tight text-slate-900">
          Why join us
        </h3>
        <ul className="flex flex-col items-start justify-center gap-2 text-base md:text-xl text-slate-900 leading-[180%] px-2 md:p-0">
          <div className="flex items-start gap-2">
            <AiOutlineCheck size={18} className="mt-1.5 text-green-700" />
            <li>Est et in pharetra magna adipiscing ornare aliquam.</li>
          </div>
          <div className="flex items-start gap-2">
            <AiOutlineCheck size={18} className="mt-1.5 text-green-700" />
            <li>Tellus arcu sed consequat ac velit ut eu blandit.</li>
          </div>
          <div className="flex items-start gap-2">
            <AiOutlineCheck size={18} className="mt-1.5 text-green-700" />
            <li>Ullamcorper ornare in et egestas dolor orci.</li>
          </div>
        </ul>
        <div className="flex items-center justify-center w-full md:justify-start">
          <Button size="lg" />
        </div>
      </div>
      <div>
        <ImageContainer width="max-w-full" height="h-auto">
          <img
            src={Video}
            alt="Video thumbnail"
            className="w-full rounded-b-xl"
          />
          <PlayOverlay size={64} />
        </ImageContainer>
      </div>
    </div>
  );
}

export default WhyJoinUs;
