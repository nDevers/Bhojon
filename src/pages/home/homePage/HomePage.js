import React from 'react';
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import Features from './Features';
import Hero from './Hero';

const HomePage = () => {
    const [loading, setLoading] = useState(true);

    const onLoadEffect = () => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    useEffect(onLoadEffect, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div>
            <Hero />
            <Features />
        </div>
    );
};

export default HomePage;