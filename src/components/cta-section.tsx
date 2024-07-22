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
                  <div className="py-3 pl-4 lg:pl-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="m-auto h-6 w-6 fill-gray-500 dark:fill-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="relative mx-auto h-6 w-6 text-white dark:text-gray-900 md:hidden"
                      >
                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
                      </svg>
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
