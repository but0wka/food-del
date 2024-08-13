import React from 'react';

// import assets
import { exploreMenu } from '../assets/assets';

const ExploreMenu = () => {
  const { title, subtitle, categories } = exploreMenu;

  return (
    <div className='container mx-auto py-8'>
      <h2 className='text-4xl lg:text-5xl font-bold mb-4'>{title}</h2>
      <p className='text-xl font-normal text-gray-600 mb-4 lg:mb-8'>
        {subtitle}
      </p>
      <div className='flex gap-x-4 overflow-auto custom_scrollbar'>
        {categories.map((category, index) => (
          <div key={index} className='flex items-center justify-center gap-8'>
            <div className='px-6 py-2 text-center rounded-full bg-accent/10 text-accent whitespace-nowrap'>
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
