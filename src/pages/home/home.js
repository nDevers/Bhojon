import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from './Hero';
import Features from './Features';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features />
        </div>
    );
};

export default Home;