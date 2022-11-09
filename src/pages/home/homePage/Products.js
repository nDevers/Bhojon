import React from "react";
import { BsBag, BsFillArrowRightCircleFill, BsSuitHeart } from "react-icons/bs";

const Products = () => {
  const homePageProducts = [
    {
      name: "Product 1",
      image: "https://placeimg.com/400/225/arch",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis molestias repudiandae nostrum cupiditate error impedit obcaecati explicabo libero fuga ipsa!",
      tags: [{ name: "Fashion" }, { name: "Products" }],
    },
    {
      name: "Product 1",
      image: "https://placeimg.com/400/225/arch",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis molestias repudiandae nostrum cupiditate error impedit obcaecati explicabo libero fuga ipsa!",
      tags: [{ name: "Fashion" }, { name: "Products" }],
    },
    {
      name: "Product 1",
      image: "https://placeimg.com/400/225/arch",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis molestias repudiandae nostrum cupiditate error impedit obcaecati explicabo libero fuga ipsa!",
      tags: [{ name: "Fashion" }, { name: "Products" }],
    },
    {
      name: "Product 1",
      image: "https://placeimg.com/400/225/arch",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis molestias repudiandae nostrum cupiditate error impedit obcaecati explicabo libero fuga ipsa!",
      tags: [{ name: "Fashion" }, { name: "Products" }],
    },
    {
      name: "Product 1",
      image: "https://placeimg.com/400/225/arch",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis molestias repudiandae nostrum cupiditate error impedit obcaecati explicabo libero fuga ipsa!",
      tags: [{ name: "Fashion" }, { name: "Products" }],
    },
    {
      name: "Product 1",
      image: "https://placeimg.com/400/225/arch",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis molestias repudiandae nostrum cupiditate error impedit obcaecati explicabo libero fuga ipsa!",
      tags: [{ name: "Fashion" }, { name: "Products" }],
    },
  ];

  return (
    <div className="mx-2 my-20 md:m-12 lg:m-28">
      <div className="text-center p-3 m-3">
        <h3 className="text-2xl md:text-2xl lg:text-3xl font-semibold font capitalize">
          We offer you <span className="text-primary">different taste</span>
        </h3>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eius
          accusamus, incidunt corrupti libero nihil animi.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-10 place-items-center">
        {homePageProducts?.map((homePageProduct) => (
          <div
            key={homePageProduct?.name}
            className="col-4 shadow-xl flex flex-col items-center p-4 m-4 rounded-lg relative"
          >
            <button
              type="button"
              className="absolute right-8 top-8 rounded-full bg-primary p-2 text-white"
            >
              <span className="sr-only">Wishlist</span>
              <BsSuitHeart />
            </button>

            <div className="w-full">
              <img
                className="rounded-3xl w-full"
                src={homePageProduct?.image}
                alt=""
              />
            </div>

            <div>
              <h2 className="card-title mt-8 mb-6">
                {homePageProduct?.name}
                <div className="badge badge-warning text-white">NEW</div>
              </h2>

              <p>{homePageProduct?.description}</p>

              <div className="card-actions justify-end my-6">
                {homePageProduct?.tags.map((tag) => (
                  <p key={tag?.name} className="badge badge-outline">
                    {tag?.name}
                  </p>
                ))}
              </div>

              <button className="btn btn-primary hover:bg-primary w-full text-white mb-2">
                <span className="text-sm font-medium"> Add to Cart </span>

                <BsBag className="ml-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
