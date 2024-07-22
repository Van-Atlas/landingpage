import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 pt-32 pb-8 dark:border-gray-800">
      <div>
        <div className="m-auto space-y-8 px-4 text-gray-600 dark:text-gray-400 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="grid grid-cols-8 gap-6 md:gap-0">
            <div className="col-span-8 md:col-span-2 lg:col-span-3">
              <div className="flex h-full items-center justify-between gap-6 border-b border-white py-6 dark:border-gray-800 md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0">
                <div>
                  <Link
                    href="/"
                    aria-label="Van Atlas logo"
                    className="flex items-center"
                  >
                    {/* <Image
                      src="/logo.svg"
                      alt="Van Atlas"
                      width={150}
                      height={50}
                    /> */}
                  </Link>
                  <a
                    href="https://vanatlas.com"
                    className="mt-2 inline-block text-sm"
                  >
                    Your Journey, Our Community
                  </a>
                </div>

                <div className="flex gap-6">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="github"
                    className="hover:text-primary dark:hover:text-primaryLight"
                  >
                    <span className="sr-only">Github</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="twitter"
                    className="hover:text-primary dark:hover:text-primaryLight"
                  >
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                    className="hover:text-primary dark:hover:text-primaryLight"
                  >
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-8 md:col-span-6 lg:col-span-5">
              <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16">
                <div>
                  <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                    Company
                  </h2>
                  <ul className="mt-4 list-inside space-y-4">
                    <li>
                      <Link
                        href="/about"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/customers"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                      >
                        Customers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/partners"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                      >
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                    Resources
                  </h2>
                  <ul className="mt-4 list-inside space-y-4">
                    <li>
                      <Link
                        href="/blog"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                      >
                        Van Life Guides
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/community"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                      >
                        Community
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/events"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                      >
                        Events
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                    Support
                  </h2>
                  <ul className="mt-4 list-inside space-y-4">
                    <li>
                      <Link
                        href="/help"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                      >
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between text-sm md:pl-16">
                <span>© Van Atlas 2023 - Present</span>
                <span>All rights reserved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
