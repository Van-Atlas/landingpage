import React from "react";
import Image from "next/image";
import Link from "next/link";

const VanLifeExperienceSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <div className="space-y-6 md:flex md:items-center lg:gap-6 lg:space-y-0">
          <div className="md:w-5/12 lg:w-6/12">
            <Image
              src="/community.jpg"
              alt="Van life community experience"
              width={1779}
              height={1592}
              className="md:-ml-8"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
              Erlebe die Freiheit des Van-Lebens mit einer leidenschaftlichen
              Community
            </h2>
            <p className="mt-8 text-gray-600 dark:text-gray-300">
              Bei Van Atlas geht es um mehr als nur Fahrzeuge. Es geht um
              Menschen, die ihre Leidenschaft für Freiheit und Abenteuer teilen.
              Unsere Community besteht aus erfahrenen Van-Lifern und
              Neueinsteigern, die sich gegenseitig inspirieren und unterstützen.
            </p>
            <p className="mb-12 mt-4 text-gray-600 dark:text-gray-300">
              Egal, ob du Tipps für deinen ersten Van-Ausbau suchst, die besten
              Routen entdecken möchtest oder einfach Gleichgesinnte treffen
              willst – bei Van Atlas findest du alles, was du für dein perfektes
              Van-Life-Erlebnis brauchst.
            </p>
            <Link
              href="/community"
              className="relative flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight"
            >
              <span className="relative text-base font-semibold text-white dark:text-gray-900">
                Community entdecken
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VanLifeExperienceSection;
