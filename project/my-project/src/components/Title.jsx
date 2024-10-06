import React from "react";

export const Title = ({ text, topic, className }) => {
  return (
    <div className="tracking-wider leading-[1.1]">
      <h1 className="uppercase font-semibold text-[13px]" aria-label={text}>
        {text}
      </h1>
      <h1
        className={`lg:text-[50px] text-[20px] mb-2 lg:mb-0 capitalize font-bold ${className}`}
        aria-label={topic}
      >
        {topic}
      </h1>
    </div>
  );
};
