import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import Features from "./Features";
import LoadingSpinner from "../../components/LoadingSpinner";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const onLoadEffect = () => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  useEffect(onLoadEffect, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default Home;
