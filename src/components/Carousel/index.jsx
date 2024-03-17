import React, { useRef } from "react";
import { Carousel } from "antd";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";

const contentStyle = {
  height: "700px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function CarouselComponent({ data }) {
  let adc = useRef();

  const previous = () => {
    console.log(adc);
    adc.current.prev();
  };
  const next = () => {
    adc.current.next();
  };
  return (
    <div className="mt-8">
      <div className="relative">
        <AiFillLeftCircle
          className="absolute top-[45%] left-3 z-10 text-6xl text-gray-200"
          onClick={previous}
        />
        <Carousel ref={adc} autoplay>
          <div style={contentStyle}>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <AiFillRightCircle
          style={{ color: "white" }}
          className="absolute  right-3 z-10  text-6xl text-gray-200 top-[45%]"
          onClick={next}
        />
      </div>
    </div>
  );
}

export default CarouselComponent;
