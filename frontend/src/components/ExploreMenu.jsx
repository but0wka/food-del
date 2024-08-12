import React from 'react';

// import assets
import { exploreMenu } from '../assets/assets';

const ExploreMenu = () => {
  const { title, subtitle, categories } = exploreMenu;
  return (
    <div className='container mx-auto mb-20'>
      {/* title & subtitle */}
      <div className='flex flex-col items-center lg:flex-row mb-10 lg:mb-20'>
        <h2
          className='section-title'
          data-aos='fade-up'
          data-aos-offset='400'
          data-aos-delay='300'
        >
          {title}
        </h2>
        <p
          className='lead lg:max-w-[350px]'
          data-aos='fade-up'
          data-aos-offset='400'
          data-aos-delay='300'
        >
          {subtitle}
        </p>
      </div>
      {/* cards */}
      <div className='customScrollbar flex gap-4 overflow-auto'>
        {categories.map((category, index) => (
          <div
            key={index}
            className='flex flex-col items-center gap-2 border p-3 rounded-xl min-w-28 hover:border-accent hover:bg-orange-50 cursor-pointer group'
          >
            <img
              src={category.image}
              alt={category.name}
              className='w-20 h-20 object-cover rounded-full hover:scale-105 transition-all transform duration-200'
            />
            <h2 className='text-sm font-medium'>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
