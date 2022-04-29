import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import React from "react";

const Scenes = dynamic(() => import("../components/Scenes"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <script src="https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js" />
      </Head>
      <div className="relative bg-white overflow-hidden">
        <div className="mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#" className="text-2xl">
                      O.I.
                    </a>
                  </div>
                </div>
              </nav>
            </div>

            <main className="">
              <Scenes />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
