import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BiShowAlt } from "react-icons/bi";
import { MdEdit, MdOutlineAlternateEmail } from "react-icons/md";
import SocialMediaLoginButton from "../../components/SocialMediaLoginButton";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

const SignUp = () => {
  // set website title
  useWebsiteTitle("Bhojon | Signup");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section class="relative flex flex-wrap lg:h-screen lg:items-center">
      <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div class="mx-auto max-w-lg text-center">
          <h1 class="text-2xl font-bold sm:text-3xl">Sign up to continue</h1>

          <p class="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
          <div>
            <label for="email" class="sr-only">
              Name
            </label>

            <div class="relative">
              <input
                type="text"
                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter name"
              />

              <span class="absolute inset-y-0 right-4 inline-flex items-center">
                <MdEdit className="text-gray-400" />
              </span>
            </div>
          </div>

          <div>
            <label for="email" class="sr-only">
              Email
            </label>

            <div class="relative">
              <input
                type="email"
                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <span class="absolute inset-y-0 right-4 inline-flex items-center">
                <MdOutlineAlternateEmail className="text-gray-400" />
              </span>
            </div>
          </div>

          <div>
            <label for="password" class="sr-only">
              Password
            </label>
            <div class="relative">
              <input
                type="password"
                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span class="absolute inset-y-0 right-4 inline-flex items-center">
                <BiShowAlt className="text-gray-400" />
              </span>
            </div>
          </div>

          <div>
            <label for="password" class="sr-only">
              Confirm Password
            </label>
            <div class="relative">
              <input
                type="password"
                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Confirm password"
              />

              <span class="absolute inset-y-0 right-4 inline-flex items-center">
                <BiShowAlt className="text-gray-400" />
              </span>
            </div>
          </div>

          <div class="flex items-center justify-between py-10">
            <div className="flex flex-col gap-2">
              <p class="text-sm text-gray-500">
                Already have an account?
                <Link to="/authentication/login" class="underline">
                  Login
                </Link>
              </p>

              <p class="text-sm text-gray-500">
                Forgot password?
                <Link to="/authentication/reset-password" class="underline">
                  Reset password
                </Link>
              </p>
            </div>

            <button
              type="submit"
              class="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Signup
            </button>
          </div>

          <SocialMediaLoginButton />
        </form>
      </div>

      <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 hidden md:block lg:block">
        <img
          alt="Welcome"
          src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default SignUp;
