import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"; // useViewportScroll

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ProductsList from "./components/ProductsList";
import Modal from "./components/Modal";

import { ships } from "./data.json";

const App = () => {
  let ref = useRef(null);
  let { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollY, [0, 500], ["0%", "50%"]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.theme === "dark" ? "dark" : "light"
  );
  const [productModal, setProductModal] = useState(null) as any;

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const nextProduct = () => {
    if (!productModal) return;

    const index = ships.findIndex(
      (ship: any) => ship.name == productModal.name
    );

    if (index === ships.length - 1) {
      setProductModal({ ...ships[0] });
    } else {
      setProductModal({ ...ships[index + 1] });
    }
  };
  const previousProduct = () => {
    if (!productModal) return;

    const index = ships.findIndex((ship) => ship.name === productModal.name);

    if (index === 0) {
      setProductModal({ ...ships[ships.length - 1] });
    } else {
      setProductModal({ ...ships[index - 1] });
    }
  };

  return (
    // <!-- This example requires Tailwind CSS v3.0+ -->
    <div className="isolate bg-white dark:bg-slate-700" ref={ref}>
      {/* bg */}
      <motion.div
        style={{ y, opacity }}
        className=" absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fill-opacity=".5"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                stop-color={theme === "dark" ? "#f87171" : "#bae6fd"}
              ></stop>
              <stop
                offset="1"
                stop-color={theme === "dark" ? "#fee2e2" : "#0ea5e9"}
              ></stop>
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* nav ui */}
      <Nav
        toggleTheme={toggleTheme}
        theme={theme}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* hero section */}
      <Hero setProductModal={setProductModal} />

      <ProductsList setProductModal={setProductModal} products={ships} />

      {/* footer */}
      {productModal != null && (
        <Modal
          productModal={productModal}
          setProductModal={setProductModal}
          nextProduct={nextProduct}
          previousProduct={previousProduct}
          theme={theme}
        />
      )}
    </div>
  );
};

export default App as any;
