import React from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { HiMenuAlt3, HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import auth from "../hooks/firebase.init";
import LoadingSpinner from "./LoadingSpinner";
import { FaFirstOrder } from "react-icons/fa";
import defaultUserImage from "../assets/images/defaultUser.png";
import { RiUser5Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiLogIn } from "react-icons/bi";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const navbarMiddle = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Reservation",
      link: "/reservation",
    },
    {
      name: "Menu",
      link: "/menu",
    },
    {
      name: "About Us",
      link: "/about-Us",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];

  const navbarRight = [
    {
      name: <BsSearch />,
      link: "/search",
    },
    {
      name: <BsCart3 />,
      link: "/cart",
    },
  ];

  const userMenu = [
    {
      name: 'Dashboard',
      icon: <MdOutlineDashboard />,
      link: '/dashboard'
    },
    {
      name: 'Summary',
      icon: <FaFirstOrder />,
      link: '/user/summary'
    },
    {
      name: 'Profile',
      icon: <CgProfile />,
      link: '/user/profile'
    },
    {
      name: 'Settings',
      icon: <IoMdSettings />,
      link: '/user/settings'
    },
  ];

  const logoutMenu = <li>
    <Link
      onClick={() =>
        Swal.fire({
          icon: "warning",
          title: "Are you sure want to sign out?",
          showCancelButton: true,
          confirmButtonText: "Yes",
          customClass: {
            actions: "my-actions",
            cancelButton: "order-2 right-gap",
            confirmButton: "order-1",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            signOut(auth);

            toast.success("See you soon!");
          }
        })
      }
      className='flex items-center'>
      <BiLogIn />
      Logout
    </Link>
  </li>

  const loginMenu = !user && <li>
    <Link to='/authentication/login' className="bg-error px-4 py-1 rounded-md text-white text-center">Login</Link>
  </li>

  const currentUserMenu = user && (
    <div className="dropdown dropdown-end">
      <label tabIndex={0}>
        <img
          alt="Default user"
          src={user?.photoURL ? user?.photoURL : defaultUserImage}
          className="h-7 w-7 rounded-full object-cover"
        />
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 font-medium p-2 shadow bg-base-100 rounded-box w-52"
      >
        {
          userMenu.map((userMenu) =>
            <li key={userMenu?.link}>
              <Link to={userMenu?.link}>
                {userMenu?.icon}
                {userMenu?.name}
              </Link>
            </li>
          )
        }
        {logoutMenu}
      </ul>
    </div>
  );

  loading && <LoadingSpinner />;

  error &&
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `${error}`,
    });

  return (
    <header aria-label="Site Header" class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          {/* navbar left */}
          <Link to='/'>
            <Logo />
          </Link>

          {/* navbar middle */}
          <nav>
            <ul class="hidden md:flex lg:flex items-center gap-6 text-md font-medium">
              {
                navbarMiddle.map((navbarItems) =>
                  <li key={navbarItems.link} className='hover:text-error active:text-gray-900 active:bg-rose-200 active:px-4 active:py-2 active:rounded-md focus:bg-rose-200 focus:px-4 focus:py-2 focus:rounded-md'>
                    <Link to={navbarItems.link}>{navbarItems.name}</Link>
                  </li>
                )
              }
            </ul>
          </nav>

          {/* navbar right */}
          <div class="flex items-center gap-4">
            <ul class="hidden md:hidden lg:flex items-center gap-6 text-sm font-medium">
              {
                navbarRight.map((navbarItems) => (
                  <li key={navbarItems.link}>
                    <Link to={navbarItems.link}>{navbarItems.name}</Link>
                  </li>
                ))
              }

              {loginMenu}

              {currentUserMenu}
            </ul>

            <div className="navbar-end md:hidden lg:hidden">
              <ul className="menu menu-horizontal font-medium lg:flex hidden">
                {
                  navbarMiddle.map((navbarItems) =>
                    <li key={navbarItems.link}>
                      <Link to={navbarItems.link}>{navbarItems.name}</Link>
                    </li>
                  )
                }

                {loginMenu}
              </ul>

              <div className="dropdown dropdown-end">
                <label tabIndex={0}>
                  <HiMenuAlt3 className="text-2xl" />
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 font-medium p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {
                    navbarMiddle.map((navbarItems) =>
                      <li key={navbarItems.link}>
                        <Link to={navbarItems.link}>{navbarItems.name}</Link>
                      </li>
                    )
                  }

                  {
                    navbarRight.map((navbarItems) => (
                      <li key={navbarItems.link}>
                        <Link to={navbarItems.link}>{navbarItems.name}</Link>
                      </li>
                    ))}

                  {loginMenu}

                  {currentUserMenu}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
};

export default Navbar;
