import Link from './Link';
import { MdLanguage } from 'react-icons/md';

function BottomBar() {
  return (
    <div className="py-12 border-t border-gray-800 md:py-0">
      <div className="flex flex-col items-center justify-between w-full md:py-6 gap-y-6 md:flex-row ">
        <p className="text-sm text-gray-300 ">
          Collers @ 2023. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center space-x-4 md:space-x-8">
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Contact</Link>
          <div className="flex items-center justify-center gap-x-2">
            <MdLanguage size={24} color="white" />
            <span className="text-gray-200 text-md">EN</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
