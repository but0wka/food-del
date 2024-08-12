import React, { useState, useEffect } from 'react';

// import icons
import { LuShoppingBasket, LuUser2 } from 'react-icons/lu';

// import assets
import { header } from '../assets/assets';

const Header = () => {
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);

  // header state
  const [isActive, setIsActive] = useState(false);

  // destructure header data
  const { logo, btnText } = header;

  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header className='bg-white border-b boder-gray-200 py-6 lg:py-4 w-full transition-all z-10'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <a href='/'>
          <img src={logo} alt='logo' />
        </a>

        {/* buttons */}
        <div className='flex items-center gap-x-2'>
          <button className='rounded-full btn btn-sm btn-outline p-2 w-12 h-12 flex items-center justify-center'>
            <LuShoppingBasket className='text-2xl' />
          </button>
          <button className='rounded-full btn btn-sm btn-outline p-2 w-12 h-12 flex items-center justify-center'>
            <LuUser2 className='text-2xl' />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
