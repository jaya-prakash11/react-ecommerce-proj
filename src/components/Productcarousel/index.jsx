import React, { useRef } from "react";
import { Carousel } from "antd";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";

const contentStyle = {
  height: "240px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

function ProductCarousel({ title = "Product Name", path = "", data = [] }) {
  let adc = useRef();

  const previous = () => {
    console.log(adc);
    adc.current.prev();
  };
  const next = () => {
    adc.current.next();
  };
  return (
    <div>
      <p className="font-Robo  text-4xl font-medium">{title}</p>
      <div className="relative mt-8">
        <AiFillLeftCircle
          className="absolute top-[45%] left-3 z-10 text-6xl text-gray-200  cursor-pointer"
          onClick={previous}
        />
        <Carousel ref={adc} autoplay={false}>
          <div>
            <div style={contentStyle} className="flex w-full  gap-5">
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
            </div>
          </div>
          <div>
            <div style={contentStyle} className="flex w-full  gap-5">
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
            </div>
          </div>
          <div>
            <div style={contentStyle} className="flex w-full  gap-5">
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
            </div>
          </div>
          <div>
            <div style={contentStyle} className="flex w-full  gap-5">
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
              <div className="flex h-60 w-2/12 bg-gray-600">1</div>
            </div>
          </div>
        </Carousel>
        <AiFillRightCircle
          style={{ color: "white" }}
          className="absolute  right-3 z-10  text-6xl text-gray-200 top-[45%] cursor-pointer"
          onClick={next}
        />
      </div>
    </div>
  );
}

export default ProductCarousel;
