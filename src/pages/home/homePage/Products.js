import React from 'react';
import { BsBag, BsSuitHeart } from 'react-icons/bs';

const Products = () => {
    const homePageProducts = [
        {
            name: 'Product 1',
            image: 'https://placeimg.com/400/225/arch',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis molestias repudiandae nostrum cupiditate error impedit obcaecati explicabo libero fuga ipsa!'
        },
        {
            name: 'Product 1',
            image: 'https://placeimg.com/400/225/arch',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis molestias repudiandae nostrum cupiditate error impedit obcaecati explicabo libero fuga ipsa!'
        },
        {
            name: 'Product 1',
            image: 'https://placeimg.com/400/225/arch',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis molestias repudiandae nostrum cupiditate error impedit obcaecati explicabo libero fuga ipsa!'
        },
        {
            name: 'Product 1',
            image: 'https://placeimg.com/400/225/arch',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis molestias repudiandae nostrum cupiditate error impedit obcaecati explicabo libero fuga ipsa!'
        },
        {
            name: 'Product 1',
            image: 'https://placeimg.com/400/225/arch',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis molestias repudiandae nostrum cupiditate error impedit obcaecati explicabo libero fuga ipsa!'
        },
        {
            name: 'Product 1',
            image: 'https://placeimg.com/400/225/arch',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis molestias repudiandae nostrum cupiditate error impedit obcaecati explicabo libero fuga ipsa!'
        },
        {
            name: 'Product 1',
            image: 'https://placeimg.com/400/225/arch',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis molestias repudiandae nostrum cupiditate error impedit obcaecati explicabo libero fuga ipsa!'
        },
    ];

    return (
        <div className='mx-2 my-20 md:m-12 lg:m-28'>
            <div className='text-center'>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold font capitalize'>We offer you different taste</h3>
                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eius accusamus, incidunt corrupti libero nihil animi.</p>
            </div>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-16 items-center justify-center'>
                {
                    homePageProducts?.map(homePageProduct =>
                        <div className="card w-full md:w-auto lg:w-auto bg-base-100 shadow-xl">
                            <button
                                type="button"
                                class="absolute right-4 top-4 rounded-full bg-error p-2 text-white"
                            >
                                <span class="sr-only">Wishlist</span>
                                <BsSuitHeart />
                            </button>
                            {
                                (homePageProduct?.image) ?
                                    <img src={homePageProduct?.image} alt={`${homePageProduct?.name} image`} /> : <p>No product image to display</p>
                            }
                            <div className="mx-2 px-2 my-4 py-4">
                                <h2 className="card-title mb-4">
                                    {homePageProduct?.name}
                                    <div className="badge badge-warning text-white">NEW</div>
                                </h2>

                                <p>{homePageProduct?.description}</p>

                                <div className="card-actions justify-end mt-4">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>

                            <button
                                class="btn btn-error text-white"
                            >
                                <span class="text-sm font-medium"> Add to Cart </span>

                                <BsBag className='ml-4' />
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Products;