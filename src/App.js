import React from 'react';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='relative'>
      <Navbar/>
      <Hero/>
      <Features/>
    </div>
  );
}

export default App;
