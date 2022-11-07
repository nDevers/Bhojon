import React, { useState } from "react";
import Swal from "sweetalert2";
import PasswordStrengthBar from "react-password-strength-bar";
import { Link, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import SocialMediaLoginButton from "../../components/SocialMediaLogin";
import LoadingSpinner from "../../components/LoadingSpinner";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import auth from "../../hooks/firebase.init";

const Login = () => {
  const [showPasswordIcon, setShowPasswordIcon] = useState(false);
  const [currentUser, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [
    signInWithEmailAndPassword,
    user,
    signInWithEmailAndPasswordLoading,
    signInWithEmailAndPasswordError,
  ] = useSignInWithEmailAndPassword(auth);

  // set website title
  useWebsiteTitle("Bhojon | Login");

  // prevent logged in user to visit login page
  currentUser && navigate("/");

  // change password visibility icon
  const inactiveIcon = (
    <BiHide
      className="text-gray-400 text-lg hover:text-rose-400"
      onClick={showPassword()}
    />
  );

  const activeIcon = (
    <BiShowAlt
      className="text-gray-400 text-lg hover:text-rose-400"
      onClick={showPassword()}
    />
  );

  // show password
  function showPassword() {
    var password = document.getElementById("passwordInput");
    // if (password.type === "password") {
    //   password.type = "text";
    // } else {
    //   password.type = "password";
    // }
  }

  // login
  const onSubmit = async (data, errors) => {
    // display login error
    signInWithEmailAndPasswordError &&
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${signInWithEmailAndPasswordError}`,
      });

    signInWithEmailAndPassword(watch("email"), watch("password"));
  };

  if (user) {
    // after successfull login redirect to dashboard page
    navigate("/dashboard");
  }

  // display loading spinner
  signInWithEmailAndPasswordLoading || (loading && <LoadingSpinner />);

  // display user data error
  error &&
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `${error}`,
    });

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            <span className="text-rose-400">Sign up or login</span> to continue
          </h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form
          action=""
          className="mx-auto mt-8 mb-0 max-w-md space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
                {...register("email", {
                  required: "* Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <MdOutlineAlternateEmail className="text-gray-400" />
              </span>
            </div>

            <p role="alert" className="text-error text-sm mt-2 mx-4">
              {errors.email?.message}
            </p>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              {showPasswordIcon ? (
                <input
                  id="passwordInput"
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "* Password is required",
                  })}
                />
              ) : (
                <input
                  id="passwordInput"
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "* Password is required",
                  })}
                />
              )}

              <span
                className="absolute inset-y-0 right-4 inline-flex items-center"
                onClick={() => setShowPasswordIcon(!showPasswordIcon)}
              >
                {showPasswordIcon ? activeIcon : inactiveIcon}
              </span>
            </div>

            {/* password strength bar */}
            {watch("password") && (
              <PasswordStrengthBar
                password={watch("password")}
                className="m-4"
              />
            )}

            <p role="alert" className="text-error text-sm mt-2 mx-4">
              {errors.password?.message}
            </p>
          </div>

          <div className="flex flex-col gap-3 mx-4 py-4">
            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>New to our site?</p>

              <Link
                to="/authentication/signup"
                className="underline hover:text-rose-400"
              >
                Sign up
              </Link>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>Forgot password?</p>

              <Link
                to="/authentication/reset-password"
                className="underline hover:text-rose-400"
              >
                Reset password
              </Link>
            </div>
          </div>

          <div className="flex justify-end mr-4">
            <button
              type="submit"
              className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Login
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

export default Login;
