import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import { BiShowAlt } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import SocialMediaLoginButton from "../../components/SocialMediaLoginButton";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import auth from "../../hooks/firebase.init";
import LoadingSpinner from "../../components/LoadingSpinner";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const [
    signInWithEmailAndPassword,
    user,
    signInWithEmailAndPasswordLoading,
    signInWithEmailAndPasswordError,
  ] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  // set website title
  useWebsiteTitle("Bhojon | Login");

  const onSubmit = (data, errors) => {
    console.log(data, errors);
    signInWithEmailAndPassword(watch('email'), watch('password'))
  };

  if (user) {
    toast.success(`Welcome ${watch('firstName')}`, {
      toastId: 'loginToastMessage'
    });

    navigate('/dashboard')
  }

  if (signInWithEmailAndPasswordLoading) {
    return <LoadingSpinner />
  }

  if (signInWithEmailAndPasswordError) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: `${signInWithEmailAndPasswordError}`,
    });
  }

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Sign up or log in to continue
          </h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4" onSubmit={handleSubmit(onSubmit)}>
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

          <div className="flex items-center justify-between py-6">
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-500">
                No account?
                <Link to="/authentication/signup" className="underline ml-2">
                  Sign up
                </Link>
              </p>

              <p className="text-sm text-gray-500">
                Forgot password?
                <Link to="/authentication/reset-password" className="underline">
                  Reset password
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
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
