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
import { MdSettings } from "react-icons/md";
import { FaFirstOrder, FaUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import defaultUserImage from "../assets/images/defaultUser.png";
import { RiUser5Fill, RiUser6Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const navbar = [
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
    {
      name: <BsSearch />,
      link: "/search",
    },
    {
      name: <BsCart3 />,
      link: "/cart",
    },
  ];

  const navbarMenu = navbar.map((navbarItems) => (
    <li key={navbarItems.link}>
      <Link to={navbarItems.link}>{navbarItems.name}</Link>
    </li>
  ));

  const useSignOut = user && (
    <li className="dropdown">
      <label tabIndex={0} className="flex items-center">
        <span class="mr-1"> {user?.email ? user?.email.split('@')[0] : "defaultuser"} </span>

        <img
          alt="Default user"
          src={user?.photoURL ? user?.photoURL : defaultUserImage}
          className="h-7 w-7 rounded-full object-cover"
        />
      </label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <Link
          to="/user/user-summary"
          class="flex items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <FaFirstOrder />

          <span class="ml-3 text-sm font-medium"> Orders </span>
        </Link>

        <Link
          to="/user/profile"
          class="flex items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <RiUser5Fill />

          <span class="ml-3 text-sm font-medium"> Profile </span>
        </Link>

        <Link
          to="/user/settings"
          class="flex items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <IoMdSettings />

          <span class="ml-3 text-sm font-medium"> Settings </span>
        </Link>
        <li>
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
            class="flex items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <HiOutlineLogout />

            <span class="text-sm font-medium"> Logout </span>
          </Link>
        </li>
      </ul>
    </li>
  );

  const dashboardMenu =
    user?.emailVerified && <li>
      <Link to='/dashboard'>Dashboard</Link>
    </li>

  const loginMenu =
    !user && <li>
      <Link to='/authentication/login'>Login</Link>
    </li>

  loading && <LoadingSpinner />;

  error &&
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `${error}`,
    });

  return (
    <div className="navbar md:flex md:items-center md:justify-between lg:flex lg:items-center lg:justify-between bg-base-100">
      <div className="navbar-start md:navbar lg:navbar">
        <Link to="/" className="normal-case text-xl ml-3">
          <Logo />
        </Link>
      </div>

      <div className="navbar-end md:navbar lg:navbar">
        <ul className="menu menu-horizontal font-medium p-0 lg:flex hidden">
          {navbarMenu}

          {loginMenu}

          {dashboardMenu}

          {useSignOut}
        </ul>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <HiMenuAlt3 className="text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 font-medium p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarMenu}

            {loginMenu}

            {dashboardMenu}

            {useSignOut}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
