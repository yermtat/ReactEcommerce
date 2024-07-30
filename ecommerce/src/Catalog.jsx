import React, { useRef, useEffect, useState } from "react";
import { products, categories, colors } from "./Data";

export default function Catalog() {
  const category = useRef("all");
  const [showpPoducts, setShowProducts] = useState(products);

  return (
    <div>
      <div className="h-3/4 flex justify-center relative p-20 mb-20">
        <div className="px-4 border-r">
          <div>
            <h1 className="font-bold text-xl m-5">Categories</h1>
            <ul>
              <div class="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="all"
                  class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  All
                </label>
              </div>
              {categories.map((x) => (
                <div class="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value={x}
                    class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {x}
                  </label>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-xl m-5">Colors</h1>
            <ul>
              {colors.map((x) => (
                <div class="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {x}
                  </label>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <ul className="flex flex-wrap">
          {products.map((x) => (
            <li className="mx-10">
              <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div href="#">
                  <img class="p-8 rounded-t-lg" src={x.imagePath} />
                </div>
                <div class="px-5 pb-5">
                  <div>
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {x.name}
                    </h5>
                    <h3 class="text-md font-medium tracking-tight text-gray-900 dark:text-white">
                      {x.summary}
                    </h3>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">
                      ${x.price}
                    </span>
                    <button
                      href="#"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
