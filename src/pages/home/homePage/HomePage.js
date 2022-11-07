import React from "react";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";
import CookiePolicy from "./CookiePolicy";
import Banner from "./Banner";
import Features from "./Features";
import Hero from "./Hero";
import Products from "./Products";
import Services from "./Services";

const HomePage = () => {
  // set website title
  useWebsiteTitle("Home");

  return (
    <div>
      <Banner />
      <Products />
      <Services />
    </div>
  );
};

export default HomePage;
