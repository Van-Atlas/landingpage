import React from "react";
import Image from "next/image";

const CTASection = () => {
  return (
    <div className="border-y border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-darker">
      <div className="relative mx-auto px-6 md:max-w-full md:px-12 lg:max-w-6xl xl:px-0">
        <div className="items-center justify-between md:flex">
          <div className="h-max py-16 md:w-6/12 xl:w-5/12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:w-max md:text-4xl xl:text-5xl">
                One step to start
                <br />
                your van life journey
              </h2>
              <p className="mb-8 mt-6 text-gray-600 dark:text-gray-300">
                Join the Van Atlas community today and unlock a world of
                resources, connections, and adventures. Whether youre a seasoned
                van lifer or just starting out, were here to support your
                journey.
              </p>
              <form action="" className="mt-12">
                <div className="relative flex items-center rounded-full border border-primary/20 bg-white p-1 px-2 shadow-md dark:border-white/10 dark:bg-dark md:p-2 lg:pr-3">
                  <div className="py-3 pl-4 lg:pl-5"></div>
                  <input
                    autoComplete="email"
                    aria-label="your email"
                    placeholder="Your email address"
                    className="w-full rounded-full bg-transparent p-4 placeholder-gray-600 dark:placeholder-white"
                    type="email"
                  />
                  <div className="md:pr-1.5 lg:pr-0">
                    <button
                      type="button"
                      title="Start your journey"
                      className="relative ml-auto h-12 w-16 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-auto sm:px-6"
                    >
                      <span className="relative hidden w-max font-semibold text-white dark:text-gray-900 md:block">
                        Get Started
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="relative md:w-[42%] lg:w-1/2 h-96">
            <Image
              src="/feature1.jpg"
              alt="Van life adventure"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
