import React from "react";
import PasswordStrengthBar from 'react-password-strength-bar';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BiShowAlt } from "react-icons/bi";
import SocialMediaLoginButton from "../../components/SocialMediaLoginButton";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

const ResetPassword = () => {
  let passwordMatchedText, passwordNotMatchedText;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  // set website title
  useWebsiteTitle("Bhojon | Reset Password");

  // check if password and confirm password are same
  const matchPasswordAndConfirmPassword = () => {
    if (watch("password") === '' || watch("confirmPassword") === '') {
      passwordMatchedText = '';
    }
    else if (watch("password") === watch("confirmPassword")) {
      passwordMatchedText = 'Password matched';
    }
    else {
      passwordNotMatchedText = 'Password do not match';
    }
  }

  // reset password
  const onSubmit = async (data, errors) => {

  }

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

        <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                onChange={matchPasswordAndConfirmPassword()}
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
                {...register("password", {
                  required: "* Password is required",
                  pattern: {
                    value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
                    message: "Invalid password",
                  },
                })}
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <BiShowAlt className="text-gray-400 text-lg" />
              </span>
            </div>

            {/* password strength bar */}
            {watch("password") && <PasswordStrengthBar password={watch("password")} className='mx-4 mt-4' />}

            {
              passwordNotMatchedText &&
              <p role="alert" className="text-error text-sm mt-2 mx-4">
                {passwordNotMatchedText}
              </p>
            }

            {
              (passwordMatchedText && !errors.password?.message) &&
              <p role="alert" className="text-success text-sm mt-2 mx-4">
                {passwordMatchedText}
              </p>
            }

            {
              (errors.password?.message && !passwordNotMatchedText) && <p role="alert" className="text-error text-sm mt-2 mx-4">
                {errors.password?.message}
              </p>
            }
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Confirm Password
            </label>
            <div className="relative">
              <input
                onChange={matchPasswordAndConfirmPassword()}
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Confirm password"
                {...register("confirmPassword", {
                  required: "* Confirm Password is required",
                  pattern: {
                    value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
                    message: "Invalid confirm password",
                  },
                })}
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <BiShowAlt className="text-gray-400 text-lg" />
              </span>
            </div>

            {/* password strength bar */}
            {watch("confirmPassword") && <PasswordStrengthBar password={watch("confirmPassword")} className='mx-4 mt-4' />}

            {
              passwordNotMatchedText &&
              <p role="alert" className="text-error text-sm mt-2 mx-4">
                {passwordNotMatchedText}
              </p>
            }

            {
              (passwordMatchedText && !errors.password?.message) &&
              <p role="alert" className="text-success text-sm mt-2 mx-4">
                {passwordMatchedText}
              </p>
            }

            {
              (errors.confirmPassword?.message && !passwordNotMatchedText) && <p role="alert" className="text-error text-sm mt-2 mx-4">
                {errors.confirmPassword?.message}
              </p>
            }
          </div>

          <div className="flex flex-col gap-3 mx-4 py-4">
            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>Remember your password?</p>

              <Link to="/authentication/login" className="underline">
                Login
              </Link>
            </div>
          </div>

          <div className="flex justify-end mr-4">
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
