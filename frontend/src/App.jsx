import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import ExploreMenu from './components/ExploreMenu';

function App() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <ExploreMenu />
    </div>
  );
}

export default App;
