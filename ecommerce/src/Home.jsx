import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <p className="text-5xl text-purple-400">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>

      <div className="slider-container w-1/2">
        <Slider {...sliderSettings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}
