import React from "react";
import { Link } from "react-router-dom";
import { BiShowAlt } from "react-icons/bi";
import SocialMediaLoginButton from "../../components/SocialMediaLoginButton";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

const ResetPassword = () => {
  // set website title
  useWebsiteTitle("Bhojon | Reset Password");

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Reset Your Password Here
          </h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
          <div>
            <label for="password" className="sr-only">
              New Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter new password"
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <BiShowAlt className="text-gray-400" />
              </span>
            </div>
          </div>

          <div>
            <label for="password" className="sr-only">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Confirm new password"
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <BiShowAlt className="text-gray-400" />
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between py-10">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500">
                Remember your password?
                <Link to="/authentication/login" className="underline">
                  Login
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Reset Password
            </button>
          </div>

          <SocialMediaLoginButton />
        </form>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 hidden md:block lg:block">
        <img
          alt="Welcome"
          src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default ResetPassword;
