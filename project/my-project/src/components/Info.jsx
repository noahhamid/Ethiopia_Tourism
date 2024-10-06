import React from "react";
import Button from "./Button";

export const Info = ({ buttonTexts, desc, onButtonClick, activeIndex }) => {
  return (
    <div className="mt-10">
      <div className="flex">
        {buttonTexts.map((text, index) => (
          <button
            key={index}
            className={`capitalize mr-4 p-2 rounded text-[12px] lg:text-[15px] ${
              activeIndex === index
                ? "bg-[#eae6e6] text-black"
                : " text-[#a8a6a6]"
            }`}
            onClick={() => onButtonClick(index)}
          >
            {text}
          </button>
        ))}
      </div>
      <h1 className="my-6 text-[13px] lg:text-[16px]">{desc}</h1>
      <Button text="learn more" />
    </div>
  );
};
