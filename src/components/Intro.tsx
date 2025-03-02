import React, { useEffect, useRef } from "react";
import { init } from "ityped";
const Intro = () => {
  const text = useRef();
  useEffect(() => {
    if(text.current){
        text.current.innerHTML = "";
        init(text.current, {
            showCursor: false, // 🔹 Enable cursor for smooth effect
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            strings: ["Developer", "Designer"],
    
            
          });
    }
  
  }, []);
  return (
    <div className="flex bg-black" id="intro">
      <div className="flex-[0.5]  left">
        <div className="w-[700px] h-[700px] bg-red-950 rounded-full flex items-center justify-center custom">
          <img
            src="../../public/assets/Zoker.png"
            className="h-[90%] "
            alt=""
          />
        </div>
      </div>
      <div className="flex-[0.5]  right-intro relative bg-white text-black">
        <div className="w-full h-full wrapper pl-[50px] flex flex-col justify-center">
          <h2 className="text-[60px] mt-[10px] mb-[10px]">Hello I'm </h2>
          <h1 className="text-[35px]">Abhishek Chauhan</h1>
          <h3 className="text-[30px]">
            Front End{" "}
            <span ref={text} className="text-[30px] text-[red]">
            
            </span>
          </h3>
        </div>
        <a href="#portfolio " className="absolute bottom-5 left-[50%]">
          <img src="../../public/assets/down.png" alt="" className="w-9" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
