import React from 'react';
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useWebsiteTitle from '../../../hooks/useWebsiteTitle';
import Banner from './Banner';
import Features from './Features';
import Hero from './Hero';
import Products from './Products';

const HomePage = () => {
    const [loading, setLoading] = useState(true);

    // set website title
    useWebsiteTitle('Home')

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
            <Banner />
            <Products />
        </div>
    );
};

export default HomePage;