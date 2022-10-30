import React, { useEffect, useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { GiDeliveryDrone } from 'react-icons/gi';

const Services = () => {
    const services = [
        {
            name: 'Fast Delivery',
            logo: <GiDeliveryDrone />,
            image: 'https://i.ibb.co/jDzx7MM/service-1.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellat laborum debitis ducimus vero quasi placeat error minima incidunt natus modi facilis, doloremque, accusamus nam explicabo recusandae qui distinctio praesentium?'
        },
        {
            name: 'Fast Delivery',
            logo: <GiDeliveryDrone />,
            image: 'https://i.ibb.co/jDzx7MM/service-1.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellat laborum debitis ducimus vero quasi placeat error minima incidunt natus modi facilis, doloremque, accusamus nam explicabo recusandae qui distinctio praesentium?'
        },
        {
            name: 'Fast Delivery',
            logo: <GiDeliveryDrone />,
            image: 'https://i.ibb.co/jDzx7MM/service-1.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellat laborum debitis ducimus vero quasi placeat error minima incidunt natus modi facilis, doloremque, accusamus nam explicabo recusandae qui distinctio praesentium?'
        },
    ];

    return (
        <div className='my-16 mx-2 md:mx-10 lg:mx-16'>
            <div className='p-3 m-3 col-5'>
                <h2 className='text-2xl md:text-2xl lg:text-3xl font-semibold font capitalize'>Why Choose Us</h2>
                <p className='mt-5 w-full md:w-2/3 lg:1/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate porro voluptatibus commodi error illum veritatis tenetur corporis modi labore?</p>
            </div>

            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-10 items-center justify-center'>
                {
                    services?.map(service =>
                        <div className='col-4 shadow-xl flex flex-col items-center p-4 m-4 rounded-lg'>
                            <div>
                                <img
                                    src={service?.image}
                                    alt="" />
                            </div>

                            <div>
                                <div className='flex items-center gap-4 mt-10 mb-6'>
                                    <button className='p-3 bg-error rounded-full text-white'>{service?.logo}</button>

                                    <h5 className='text-xl font-medium'>{service?.name}</h5>
                                </div>

                                <p>{service?.description.slice(0, 95)}</p>

                                <button className='flex items-center gap-4 mt-6 mb-2 cursor-pointer hover:text-error hover:underline'>
                                    <h6 className='font-medium'>See More</h6>
                                    <BsFillArrowRightCircleFill className='text-success' />
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;