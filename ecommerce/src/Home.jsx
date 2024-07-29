import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLoaderData } from "react-router-dom";
// import { getProducts } from "./Data";
import { products } from "./Data";
import bgPicture from "./assets/bg.jpg";

// export async function dataLoader() {
//   return await getProducts();
// }

export default function Home() {
  // const { products } = useLoaderData();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <div className="w-full relative">
        <img src={bgPicture} className=" absolute -z-20" />

        <div>
          <div class="h-screen flex justify-center items-center dark:bg-gray-900 absoulute z-1">
            <div class="grid gap-8">
              <div id="back-div" class="  rounded-[70px] m-4">
                <div class="border-[70px] border-transparent rounded-[70px] bg-gray-400 shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2 bg-opacity-50">
                  <h1 className="text-orange-300 text-bold text-5xl text-center  ">
                    Transform Your Space
                  </h1>
                  <p className="text-orange-200 text-bold text-2xl text-center">
                    Elegant Furniture for Every Home
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-container relative">
        <div className="m-10">
          <Slider {...sliderSettings}>
            {products.map((x) => (
              <div
                key={x.name}
                className="rounded-xl bg-green-100 m-20 shadow-xl"
              >
                <div className="flex justify-evenly">
                  <img
                    src={x.imagePath}
                    className="w-1/3 m-2 flex justify-center rounded-full shadow-md"
                  />
                  <label className="m-20 text-center bold text-3xl font-serif">
                    <p>{x.name}</p>
                    <p>${x.price}</p>
                  </label>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
