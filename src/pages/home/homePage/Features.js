import React from "react";

function Features() {
  return (
    <div
      id="features"
      className="bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 h-screen blur-none"
    >
      <h1 className="text-white text-center text-4xl font-bold pt-20">
        BHOJON has some unique features which you don't find in this universe !!
      </h1>

      <div className="flex items-center">
        {/*Login*/}
        <div className="w-7/12">
          <div className="border mt-10 rounded-lg w-fit m-auto bg-white bg-opacity-20">
            <div className="m-auto w-96 p-4">
              <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                Sign in to your account
              </h2>
              <form action="" className="mt-10 space-y-8 dark:text-white">
                <div>
                  <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input
                      id=""
                      type="email"
                      placeholder="Your email or user name"
                      className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input
                      id=""
                      type="Your password"
                      placeholder="Your answer"
                      className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                    />
                  </div>
                  <button type="reset" className="-mr-3 w-max p-3">
                    <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                      Forgot password ?
                    </span>
                  </button>
                </div>

                <div>
                  <button className="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                    <span className="text-base font-semibold text-white dark:text-gray-900">
                      Login
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Side Text */}
        <div className="m-auto">
          <h1 className="mb-5 text-white">Stay Connected</h1>
          <button className="w-full py-3 px-6 rounded-md bg-sky-600 focus:bg-sky-700 active:bg-sky-500">
            <span className="text-white">Contact Us</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Features;
