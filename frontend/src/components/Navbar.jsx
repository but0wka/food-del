import React from 'react';

export const nav = [
  { name: 'Features', href: '/' },
  { name: 'About us', href: '/' },
  { name: 'Pricing', href: '/' },
  { name: 'Feedback', href: '/' },
];

const Nav = () => {
  return (
    <nav>
      <ul className='flex gap-x-10'>
        {nav.map((item, index) => {
          // destructure item
          const { href, name } = item;
          return (
            <li key={index}>
              <a className='hover:text-accent transition' href={href}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
