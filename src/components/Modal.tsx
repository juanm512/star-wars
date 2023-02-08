import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Feature from "./Feature";

import {
  MdOutlineShutterSpeed,
  MdOutlinePrecisionManufacturing,
  MdArrowBack,
  MdArrowForward,
} from "react-icons/md"; //hyperdrive_rating
import { RiTeamLine } from "react-icons/ri"; //crew
import { GiWeight } from "react-icons/gi"; //cargo_capacity
import { AiOutlineExpandAlt } from "react-icons/ai"; //length
import { IoSpeedometerOutline } from "react-icons/io5"; //MGLT

function Modal({
  productModal,
  setProductModal,
  nextProduct,
  previousProduct,
  theme,
}: any) {
  const [openModalAnimation, setOpenModalAnimation] = useState(true);
  const themeBinary = theme === "light" ? 1 : -1;

  return (
    <div className="relative z-10" role="dialog" aria-modal="true">
      {/* <!--
      Background backdrop, show/hide based on modal state.
  
      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
      <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

      <AnimatePresence exitBeforeEnter>
        {openModalAnimation && (
          <div className="fixed inset-0 z-10 overflow-y-auto overflow-hidden">
            <motion.div
              key={productModal.name}
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative flex flex-col md:flex-row gap-4 w-full min-h-screen px-2 lg:px-32 py-8 md:max-w-2xl lg:max-w-7xl mx-auto"
            >
              <div className="basis-4/12 dark:order-2 dark:-ml-64">
                <div className="h-full aspect-square bg-gradient-to-l dark:bg-gradient-to-r from-sky-200 to-blue-300 dark:from-red-400 dark:to-red-700 shadow-sm rounded-3xl relative">
                  <button
                    className="absolute top-4 right-4 text-white p-2 hidden dark:block z-50 "
                    onClick={() => {
                      setOpenModalAnimation(false);
                      setTimeout(() => {
                        setProductModal(null);
                      }, 400);
                    }}
                  >
                    X
                  </button>
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <img
                      src="media/SWlogo.png"
                      alt="logo"
                      loading="lazy"
                      className="w-4/5 bg-blend-darken -rotate-90 dark:rotate-90 -translate-x-[40%] dark:translate-x-[40%]"
                    />
                  </div>
                  <motion.div
                    initial={{
                      x: `${themeBinary * -80}%`,
                      y: "-50%",
                      opacity: 0,
                    }}
                    animate={{
                      x: `${themeBinary * 20}%`,
                      y: "-50%",
                      opacity: 1,
                    }}
                    exit={{ x: `${themeBinary * -80}%`, y: "-50%", opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute z-50 drop-shadow-xl right-2 top-1/2 translate-x-[20%] dark:-translate-x-[20%] -translate-y-[50%] flex flex-col justify-center items-center"
                  >
                    <img
                      src={`/media/ships/${productModal.img}.png`}
                      alt="ship"
                      className="w-4/5 aspect-square object-contain bg-blend-darken"
                    />
                  </motion.div>
                </div>
              </div>
              <div className="basis-8/12 flex py-16">
                <div className="overflow-hidden flex flex-col w-full bg-gradient-to-l dark:bg-gradient-to-r from-white to-slate-200 dark:from-slate-900 dark:to-slate-700 shadow-2xl rounded-3xl relative pr-4 pl-64 dark:pl-4 dark:pr-64 dark:z-10">
                  <button
                    className="absolute z-50 top-4 right-4 text-black p-2 dark:hidden"
                    onClick={() => {
                      setTimeout(() => {
                        setProductModal(null);
                      }, 200);
                    }}
                  >
                    X
                  </button>
                  <motion.div
                    initial={{ y: "-50%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "50%", opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="h-full flex flex-col justify-evenly gap-4 py-8 px-4"
                  >
                    <h1 className="text-5xl font-extrabold text-black dark:text-white">
                      {productModal.name}
                    </h1>
                    <motion.p
                      initial={{ y: "-50%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "50%", opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.35 }}
                      className="text-gray-500 dark:text-gray-300 text-2xl tracking-widest font-light"
                    >
                      {getPriceParsed(productModal.cost_in_credits) ===
                      "unknown" ? (
                        "Unknown"
                      ) : (
                        <>
                          {getPriceParsed(productModal.cost_in_credits).slice(
                            0,
                            -1
                          )}{" "}
                          <span className="text-gray-500 dark:text-gray-300 text-base">
                            {getPriceParsed(productModal.cost_in_credits).slice(
                              -1
                            )}
                          </span>
                        </>
                      )}
                    </motion.p>
                    <motion.div
                      initial={{ y: "-50%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "50%", opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="flex flex-col gap-2"
                    >
                      <span className="text-gray-500 dark:text-gray-300 text-base inline-block">
                        <MdOutlinePrecisionManufacturing className="text-2xl text-black dark:text-white inline-block" />
                        {productModal.manufacturer}
                      </span>
                    </motion.div>
                    <motion.div
                      initial={{ y: "-50%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "50%", opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="flex flex-col gap-2"
                    >
                      {/* <h2 className="text-xs font-ligth text-gray-300 dark:text-white border-b">
                    Features
                  </h2> */}
                      <div className="flex flex-row flex-wrap gap-2">
                        <Feature
                          featureName="Crew"
                          featureValue={productModal.crew}
                        >
                          <RiTeamLine className="text-xl mr-1 text-black dark:text-white inline-block" />
                        </Feature>
                        <Feature
                          featureName="hyperdrive"
                          featureValue={productModal.hyperdrive_rating}
                        >
                          <MdOutlineShutterSpeed className="text-xl mr-1 text-black dark:text-white inline-block" />
                        </Feature>
                        <Feature
                          featureName="MGLT"
                          featureValue={
                            productModal.MGLT === "unknown"
                              ? "n/a"
                              : productModal.MGLT
                          }
                        >
                          <IoSpeedometerOutline className="text-xl mr-1 text-black dark:text-white inline-block" />
                        </Feature>
                        <Feature
                          featureName="Length"
                          featureValue={productModal.length + "m"}
                        >
                          <AiOutlineExpandAlt className="text-xl mr-1 text-black dark:text-white inline-block" />
                        </Feature>
                        <Feature
                          featureName={
                            productModal.cargo_capacity.length < 4
                              ? "Cargo"
                              : "Cargo Capacity"
                          }
                          featureValue={productModal.cargo_capacity}
                        >
                          <GiWeight className="text-xl mr-1 text-black dark:text-white inline-block" />
                        </Feature>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <button
              onClick={previousProduct}
              className="absolute top-1/2 left-4 -translate-y-[50%] aspect-square px-4 rounded-full text-black bg-sky-200/100 dark:bg-slate-700 dark:text-slate-200 shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <MdArrowBack />
            </button>
            <button
              onClick={nextProduct}
              className="absolute top-1/2 right-4 -translate-y-[50%] aspect-square px-4 rounded-full text-black bg-sky-200/100 dark:bg-slate-700 dark:text-slate-200 shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <MdArrowForward />
            </button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Path: src\components\Modal.jsx

export default Modal;

const getPriceParsed = (price: string) => {
  if (price === "unknown") {
    return "unknown";
  }
  //   parse the number into a max length of 4 digits, and add the letter corresponding to the number of zeros
  const parsedPrice = parseInt(price);

  if (parsedPrice < 1000) {
    return "₹" + parsedPrice;
  } else if (parsedPrice < 1000000) {
    return "₹" + (parsedPrice / 1000).toFixed(2) + "K";
  } else if (parsedPrice < 1000000000) {
    return "₹" + (parsedPrice / 1000000).toFixed(2) + "M";
  } else if (parsedPrice < 1000000000000) {
    return "₹" + (parsedPrice / 1000000000).toFixed(2) + "B";
  } else {
    return "₹" + (parsedPrice / 1000000000000).toFixed(2) + "T";
  }
};
