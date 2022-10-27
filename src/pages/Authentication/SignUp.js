import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { BiShowAlt } from "react-icons/bi";
import { HiUser } from "react-icons/hi";
import { MdEdit, MdOutlineAlternateEmail } from "react-icons/md";
import SocialMediaLoginButton from "../../components/SocialMediaLoginButton";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import auth from "../../hooks/firebase.init";
import LoadingSpinner from "../../components/LoadingSpinner";

const SignUp = () => {
  let password, confirmPassword;
  const [
    createUserWithEmailAndPassword,
    user,
    createUserWithEmailAndPasswordLoading,
    createUserWithEmailAndPasswordError,
  ] = useCreateUserWithEmailAndPassword(auth);


  // set website title
  useWebsiteTitle("Bhojon | Signup");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = (data, errors) => {
    console.log(data, errors);
    createUserWithEmailAndPassword(watch('email'), watch('password'))
  };

  if (createUserWithEmailAndPasswordLoading) {
    <LoadingSpinner />
  }

  if (user) {
    toast.success(`Welcome ${watch('firstName')}`);
  }

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Sign up to continue
          </h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form action=""
          className="mx-auto mt-8 mb-0 max-w-md space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label htmlFor="email" className="sr-only">
              First Name
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter first name"
                {...register("firstName", {
                  required: '* First name is required',
                  minLength: { value: 3, message: '* Minimum 3 character' },
                  maxLength: { value: 20, message: '* Maximum 20 character' },
                })}
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <MdEdit className="text-gray-400" />
              </span>
            </div>

            <p role='alert' className='text-error text-sm mt-2'>
              {errors.firstName?.message}
            </p>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Last Name
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter last name"
                {...register("lastName", {
                  required: '* Last name is required',
                  minLength: { value: 3, message: '* Minimum 3 character' },
                  maxLength: { value: 20, message: '* Maximum 20 character' },
                })}
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <MdEdit className="text-gray-400" />
              </span>
            </div>

            <p role='alert' className='text-error text-sm mt-2'>
              {errors.lastName?.message}
            </p>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              User Name
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter username"
                {...register("userName", {
                  required: '* Username is required',
                  minLength: { value: 5, message: '* Minimum 5 character' },
                  maxLength: { value: 10, message: '* Maximum 10 character' },
                })}
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <HiUser className="text-gray-400" />
              </span>
            </div>

            <p role='alert' className='text-error text-sm mt-2'>
              {errors.userName?.message}
            </p>
          </div>

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
                  required: '* Email is required',
                  minLength: { value: 5, message: '* Minimum 5 character' },
                  maxLength: { value: 25, message: '* Maximum 25 character' },
                })}
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <MdOutlineAlternateEmail className="text-gray-400" />
              </span>
            </div>

            <p role='alert' className='text-error text-sm mt-2'>
              {errors.email?.message}
            </p>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
                {...register("password", {
                  required: '* Password is required',
                  minLength: { value: 10, message: '* Minimum 10 character' },
                  maxLength: { value: 20, message: '* Maximum 20 character' },
                })}
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <BiShowAlt className="text-gray-400" />
              </span>
            </div>

            <p role='alert' className='text-error text-sm mt-2'>
              {errors.password?.message}
            </p>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Confirm password"
                {...register("confirmPassword", {
                  required: '* Confirm Password is required',
                  minLength: { value: 10, message: '* Minimum 10 character' },
                  maxLength: { value: 20, message: '* Maximum 20 character' },
                })}
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <BiShowAlt className="text-gray-400" />
              </span>
            </div>

            <p role='alert' className='text-error text-sm mt-2'>
              {errors.confirmPassword?.message}
            </p>
          </div>

          <div className="flex items-center justify-between py-6">
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-500">
                Already have an account?
                <Link to="/authentication/login" className="underline ml-2">
                  Login
                </Link>
              </p>

              <p className="text-sm text-gray-500">
                Forgot password?
                <Link to="/authentication/reset-password" className="underline ml-2">
                  Reset password
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Signup
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

export default SignUp;
