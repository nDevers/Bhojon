import React from 'react';
import { BsArrowsFullscreen, BsBell } from 'react-icons/bs';
import { CgMenuGridR, CgMenuGridO } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { GiRiceCooker } from 'react-icons/gi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { RiListUnordered } from 'react-icons/ri';
import { TbLanguage } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
  const navbarMiddle = [
    {
      name: 'Order List',
      link: '/dashboard/order-list',
      icon: <RiListUnordered />
    },
    {
      name: 'Kitchen Dashboard',
      link: '/dashboard/kitchen-dashboard',
      icon: <GiRiceCooker />
    },
    {
      name: 'Counter Dashboard',
      link: '/dashboard/counter-dashboard',
      icon: <CgMenuGridR />
    }
  ];

  const navbarRight = [
    {
      icon: <BsArrowsFullscreen />,
      link: ''
    },
    {
      icon: <BsBell />,
      link: '/dashboard/notification'
    },
    {
      icon: <FiSettings />,
      link: '/dashboard/settings'
    },
    {
      icon: <TbLanguage />,
      link: '/dashboard/select-language'
    }
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-2xl"><CgMenuGridO /></a>
      </div>

      <div className='navbar-middle'>
        <ul className="menu menu-horizontal lg:flex gap-x-2 hidden">
          {
            navbarMiddle.map(navbarItems => <li key={navbarItems.link} className='border rounded-md'>
              <Link to={navbarItems.link}>
                <span>{navbarItems?.icon}</span>
                {navbarItems.name}
              </Link>
            </li>)
          }
        </ul>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal lg:flex gap-x-2 hidden">
          {
            navbarRight.map(navbarItems => <li key={navbarItems.link} className='bg-gray-200 rounded-md'><Link to={navbarItems.link}>{navbarItems.icon}</Link></li>)
          }
        </ul>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <HiMenuAlt3 className='text-2xl' />
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box">
            {
              navbarRight.map(navbarItems => <li key={navbarItems.link}>
                <Link to={navbarItems.link}>{navbarItems.name}</Link>
              </li>)
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;