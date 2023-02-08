// A single character that represents credits: ¤ or ₹ ? ₹
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

export default function ProductsList({ setProductModal, products }: any) {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 pb-32">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-500">
          Our repository of starships
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product: any, i: number) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (i / 4) * 0.1 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              key={product.name}
              className="group relative"
            >
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gradient-to-b from-sky-200 to-white dark:from-red-400 dark:to-slate-700 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={"/media/ships/" + product.img + ".png"}
                  alt={product.name}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 dark:text-gray-300">
                    <button
                      onClick={() => {
                        setProductModal({ ...product });
                      }}
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </button>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">
                    Model: {product.model}
                  </p> */}
                  <p className="mt-1 text-xs text-gray-400">
                    Manufacturer: {product.manufacturer}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                  {getPriceParsed(product.cost_in_credits)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Path: src\components\StarshipDetails.tsx

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
