import React from "react";
import bannerImage from "../../../assets/images/banner/bannerbackground2.png";

const Banner = () => {
  return (
    // <div>
    //     <div className="bg-dark text-white border-0">
    //         <img
    //             src={bannerImage}
    //             height="400"
    //             alt="Red Onion Foods banner image" />
    //     </div>
    // </div>
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://placeimg.com/800/200/arch" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle btn-primary text-white">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-primary text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://placeimg.com/800/200/arch" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle btn-primary text-white">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-primary text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://placeimg.com/800/200/arch" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle btn-primary text-white">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle btn-primary text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://placeimg.com/800/200/arch" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle btn-primary text-white">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-primary text-white">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
