import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
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
      link: '/login'
    }
  ];

  const navbarMenu = navbar.map(navbarItems => <li key={navbarItems.link}><Link to={navbarItems.link}>{navbarItems.name}</Link></li>);

  return (
    <div className="navbar bg-base-100 border-b">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Bhojon</a>
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
          <ul tabIndex={0} className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box">
            {
              navbarMenu
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;