import { useState } from "react";
import { SliderData } from "../data";

const Work = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  function rightArrowHandle() {
    setCurrentSlider((prev) => (prev < SliderData.length-1 ? prev + 1 : 0));
  }
  function leftArrowHandle() {
    setCurrentSlider((prev) => (prev > 0 ? prev - 1 : SliderData.length-1));
  }
  
  return (
    <div
      className="relative flex items-center justify-center bg-black"
      id="work"
    >
      <div
        className="slider h-[350px] flex absolute left-0 "
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {SliderData.map((i) => (
          <div
            key={i.id}
            className="container flex items-center justify-center w-screen "
          >
            <div className="work-item w-[700px] h-[100%] bg-blue-300 rounded-lg flex items-center justify-center">
              <div className="flex-[4]  work-left flex items-center justify-center">
                <div className="left-container w-[90%] h-[70%] flex flex-col justify-between">
                  <div className="img-container w-[40px] h-[40px] rounded-full bg-cyan-400 flex items-center justify-center ">
                    <img src={i.icon} alt="" className="w-[25px]" />
                  </div>
                  <h2 className="text-[25px]">{i.title}</h2>
                  <p className="text-[13px]">{i.desc}</p>
                  <span className="text-[12px] font-bold  cursor-pointer">
                    Project
                  </span>
                </div>
              </div>
              <div className="flex-[8] h-full work-right flex items-center justify-center overflow-hidden ">
                <img
                  className="w-[400px] rotate-[-10deg] "
                  src={i.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="left-arrow h-[50px] absolute left-[100px] rotate-[180deg] cursor-pointer"
        alt=""
        onClick={leftArrowHandle}
      />
      <img
        src="assets/arrow.png"
        className="right-arrow h-[50px] absolute right-[100px] cursor-pointer"
        alt=""
        onClick={rightArrowHandle}
      />
    </div>
  );
};

export default Work;
