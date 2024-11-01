import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../SharedElements/Button';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { text: 'Products', outline: false },
    { text: 'Solutions', outline: false },
    { text: 'Pricing', outline: false },
    { text: 'Resources', outline: false },
    { text: 'Log In', outline: false },
    { text: 'Sign Up', outline: true },
  ];

  return (
    <nav className="relative px-4 md:px-20 bg-amber-50">
      <div className="flex items-center justify-between h-24">
        <div className="mr-8 cursor-pointer">
          <h1 className="font-bold text-amber-900 text-heading-5">Collers</h1>
        </div>

        <div className="items-center justify-center hidden gap-4 md:flex">
          {menuItems.map((item, index) => (
            <Button key={index} outline={item.outline} text={item.text} />
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-amber-900 focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 shadow-md md:hidden top-24 bg-amber-50">
          <div className="flex flex-col items-center pb-6 space-y-1">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                outline={item.outline}
                text={item.text}
                className="w-[90%]"
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
