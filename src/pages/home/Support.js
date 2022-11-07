import React from "react";
import { BiCookie } from "react-icons/bi";
import { AiOutlineAccountBook, AiOutlineSearch } from "react-icons/ai";
import { FaChrome, FaMobileAlt } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import { SiSpringsecurity } from "react-icons/si";
import {
  MdOutlineSocialDistance,
  MdSettingsInputComponent,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Support = () => {
  const supportCategories = [
    {
      name: "Browser Support",
      icon: <FaChrome />,
      link: "/browser-support",
    },
    {
      name: "Downtime",
      icon: <FiDownloadCloud />,
      link: "/downtime",
    },
    {
      name: "Mobile Support",
      icon: <FaMobileAlt />,
      link: "/mobile-support",
    },
    {
      name: "Settings",
      icon: <MdSettingsInputComponent />,
      link: "/settings",
    },
    {
      name: "Accounts",
      icon: <AiOutlineAccountBook />,
      link: "/accounts",
    },
    {
      name: "Social",
      icon: <MdOutlineSocialDistance />,
      link: "/social",
    },
    {
      name: "Security",
      icon: <SiSpringsecurity />,
      link: "/security",
    },
    {
      name: "Cookies",
      icon: <BiCookie />,
      link: "/cookies",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center my-20">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-2xl font-bold text-gray-900 md:text-3xl capitalize">
            How can we <span className="text-primary">help</span> you?
          </h2>

          <p class="hidden text-gray-500 sm:mt-4 sm:block">
            If you're having trouble accessing your account, there's a chance
            we're currently experiencing a temporary problem. You can check for
            outages and downtime on the{" "}
            <Link
              to="/"
              className="text-gray-900 underline hover:text-primary hover:font-medium cursor-pointer"
            >
              Status Dashboard
            </Link>
            .
          </p>
        </div>

        <div class="mx-auto mt-8 max-w-xl">
          <form action="#" class="sm:flex sm:gap-4">
            <div class="sm:flex-1">
              <label for="se" class="sr-only">
                Search
              </label>

              <input
                type="text"
                placeholder="Describe your issue"
                class="w-full rounded-md border-gray-200 bg-white focus:bg-secondary p-3 text-gray-700 shadow-md transition focus:border-white focus:outline-none focus:ring focus:ring-gray-700"
              />
            </div>

            <button
              type="submit"
              class="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-1 text-white transition focus:outline-none focus:ring focus:ring-primary sm:mt-0 sm:w-auto"
            >
              <AiOutlineSearch className="text-2xl font-medium" />
            </button>
          </form>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-6 place-content-center mt-10">
        {supportCategories?.map((supportCategory) => (
          <Link
            key={supportCategory?.name}
            to={supportCategory?.link}
            className="flex flex-col gap-5 items-center justify-center p-3 border-2 rounded-lg w-48 h-48 hover:text-primary hover:border-primary hover:shadow-md"
          >
            <span className="text-6xl">{supportCategory?.icon}</span>

            <p className={`text-[#]`}>{supportCategory?.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Support;
