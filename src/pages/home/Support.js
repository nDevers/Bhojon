import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <section class="bg-gray-50">
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
              <label for="email" class="sr-only">
                Email
              </label>

              <input
                type="email"
                placeholder="Describe your issue"
                class="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-gray-700"
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
    </section>
  );
};

export default Support;
