import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import ScrollTipWrapper from "../components/ScrollTipWrapper";

const Scenes = dynamic(() => import("../components/Scenes"), {
  ssr: false,
});

const IMAGES_TO_LOAD = [
  "/images/clouds.gif",
  "/images/40k.png",
  "/images/vc.gif",
  "images/camlogo.png",
  "images/graduation/grad1.jpg",
  "images/graduation/grad2.jpg",
  "images/graduation/grad3.jpg",
  "images/graduation/grad4.jpg",
  "images/graduation/grad5.jpg",
  "images/graduation/grad6.jpg",
];

const loadImage = (source: string) =>
  new Promise<void>((resolve, _) => {
    const image = new Image();
    console.time("Image Fully Downloaded in");
    image.src = source;
    image.onload = () => resolve();
  });

const Home: NextPage = () => {
  const [loadingImages, setLoadingImages] = useState(true);
  const [scrolltipState, setScrolltipState] = useState({
    hideText: false,
    hideContainer: false,
  });

  useEffect(() => {
    const loadImages = async () => {
      await Promise.all(IMAGES_TO_LOAD.map(loadImage));
      setLoadingImages(false);
    };

    loadImages();
  }, []);

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
              {loadingImages ? (
                <></>
              ) : (
                <>
                  <Scenes setScrolltipState={setScrolltipState} />
                  <ScrollTipWrapper
                    {...{ scrolltipState, padding: "0 80% 0 0" }}
                  />
                  <ScrollTipWrapper
                    {...{ scrolltipState, padding: "0 0 0 80%" }}
                  />
                </>
              )}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
