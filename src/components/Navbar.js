import React from 'react';
import { BsSearch, BsCart3 } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi';
import { SiFoodpanda } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbar = [
    {
      name: 'Home',
      link: '/home'
    },
    {
      name: 'Reservation',
      link: '/reservation'
    },
    {
      name: 'Menu',
      link: '/menu'
    },
    {
      name: 'About Us',
      link: '/about-Us'
    },
    {
      name: 'Contact Us',
      link: '/contact-us'
    },
    {
      name: 'Login',
      link: '/authentication/login'
    },
    {
      name: <BsSearch />,
      link: '/search'
    },
    {
      name: <BsCart3 />,
      link: '/cart'
    }
  ];

  const navbarMenu = navbar.map(navbarItems => <li key={navbarItems.link}><Link to={navbarItems.link}>{navbarItems.name}</Link></li>);

  return (
    <div className="navbar bg-base-100 border-b font-mono">
      <div className="navbar-start">
        <div className='flex gap-x-4 items-center justify-center text-2xl text-center text-black font-semibold uppercase'>
          <SiFoodpanda />
          <h1><span className='text-red-500'>B</span>hojon</h1>
        </div>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal p-0 lg:flex hidden">
          {
            navbarMenu
          }
        </ul>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <HiMenuAlt3 className='text-2xl' />
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {
              navbarMenu
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;