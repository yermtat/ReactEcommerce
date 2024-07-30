import React from "react";
import { products } from "./Data";

export default function Catalog() {
  return (
    <div>
      <div className="h-3/4 flex justify-center items-center relative p-20 mb-20">
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
