import { ships } from "../data.json";

import { useRef } from "react";

import { motion } from "framer-motion";

export default function Hero({ setProductModal }: any) {
  let ref = useRef(null);
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32">
          <div className="hidden overflow-hidden bg-transparent p-1 sm:mb-8 sm:flex sm:justify-center">
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              className="relative rounded-full border border-gray-700 py-1 px-3 text-sm leading-6 text-gray-400"
            >
              New ships comming next week.{" "}
              <a
                href="#"
                className="font-semibold text-sky-600 dark:text-red-700/80"
              >
                <span className="absolute inset-0" aria-hidden="true"></span>
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{
              transform: "perspective(300px) rotateX(26deg) translateY(100%)",
            }}
            animate={{
              transform: [
                "perspective(300px) rotateX(26deg) translateY(100%)",
                "perspective(300px) rotateX(26deg) translateY(0%)",
                "perspective(300px) rotateX(0deg) translateY(0%)",
              ],
            }}
            transition={{
              delay: 0.5,
              duration: 2,
              times: [0.5, 0.75, 1],
              ease: "easeOut",
            }}
            // onAnimationComplete={() => {
            //   console.log("animation complete");
            //   // set the style transform to none
            //   // so that the animation doesn't
            //   // interfere with the user's scroll
            //   ref.current.style.transform = "none";
            // }}
            className="text-center"
            ref={ref}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-6xl">
              Explore the Galaxy with Our Spacecrafts
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Welcome to the ultimate online store for spacecrafts. Browse our
              extensive collection of models designed to fit your space
              exploration needs and bring your intergalactic dreams to life.
              Shop now and embark on your journey beyond the stars.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => setProductModal({ ...ships[0] })}
                className="rounded-md bg-sky-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                View ships list
              </button>
              <a
                href="#"
                className="text-base font-semibold leading-7 text-gray-900"
              >
                Know more about us <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </div>
        {/* bg */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fill-opacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#9089FC"></stop>
                <stop offset="1" stop-color="#FF80B5"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </main>
  );
}
