import LogoImg from './logo.svg';
import HeroImg from './hero.svg';
import Burger from './Burger.svg';

export const header = {
  logo: LogoImg,
  btnText: 'Sign up',
};

export const nav = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/' },
  { name: 'Contact us', href: '/' },
];

export const hero = {
  img: HeroImg,
};

export const exploreMenu = {
  title: 'Explore our menu!',
  subtitle:
    'Choose from our diverse menu. We aim to satisfy your cravings and elevate your dining experience with every meal.',
  categories: [
    {
      image:
        'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg',
      name: 'Burgers',
    },
    {
      image:
        'https://www.foodiesfeed.com/wp-content/uploads/2023/12/pizza-salami-close-up.jpg',
      name: 'Pizza',
    },
    {
      image:
        'https://www.foodiesfeed.com/wp-content/uploads/2023/08/sushi-roll-macro.jpg',
      name: 'Sushi',
    },
    {
      image:
        'https://images.themodernproper.com/billowy-turkey/production/posts/HotDogToppings_7.jpg?w=960&h=720&q=82&fm=jpg&fit=crop&dm=1691006985&s=3f7e26d48868aa00c580f198376386c1',
      name: 'Hot Dogs',
    },
    {
      image:
        'https://www.skinnytaste.com/wp-content/uploads/2023/09/Chicken-Nuggets-10.jpg',
      name: 'Nuggets',
    },
    {
      image:
        'https://www.recipetineats.com/tachyon/2022/09/Fries-with-rosemary-salt_1.jpg',
      name: 'Fries & Snacks',
    },
    {
      image:
        'https://www.foodiesfeed.com/wp-content/uploads/2023/10/bowl-of-ice-cream-with-chocolate.jpg',
      name: 'Desserts',
    },
    {
      image:
        'https://www.foodiesfeed.com/wp-content/uploads/2023/10/glass-of-ice-tea.jpg',
      name: 'Drinks',
    },
  ],
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/' },
    { name: 'Careers', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Features', href: '/' },
    { name: 'Blog', href: '/' },
  ],
  legal: [
    { name: 'Terms of use', href: '/' },
    { name: 'Terms of conditions', href: '/' },
    { name: 'Privacy policy', href: '/' },
    { name: 'Cookie policy', href: '/' },
  ],
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Over 25000 people have subscribed',
  },
  form: {
    placeholder: 'Enter your email',
    btnText: 'Subscribe',
    smallText: 'We don’t sell your email and spam',
  },
};
