import React from "react";
import lalibela from "../assets/home-page-images/lalibela.jpg";
import chebera from "../assets/home-page-images/chebera.jpg";
import halala from "../assets/home-page-images/halala.jpg";

export const ImgCard = ({ img, title }) => {
  return (
    <div>
      <div className="rounded-3xl">
        <img
          className="w-[500px] h-[200px] lg:h-[400px] object-cover rounded-3xl"
          src={img}
          alt={title}
        />
      </div>
      <div className="py-6 capitalize">
        <h4 className="font-semibold text-2xl text-[#202025]">{title}</h4>
      </div>
    </div>
  );
};

const currentYear = new Date().getFullYear();
const data = [
  {
    img: lalibela,
    title: "Trip",
    text: "A first guide to Lalibela",
    date: `oct 4, ${currentYear}`,
  },
  {
    img: chebera,
    title: "Trip",
    text: "Chebera Churchura National Park",
    date: `feb 20, ${currentYear}`,
  },
  {
    img: halala,
    title: "Trip",
    text: "Halala Kella the perfect place to take a breather",
    date: `dec 21, ${currentYear}`,
  },
];

export const Card = ({ item }) => {
  return (
    <div className="bg-[#f2f4fb] cursor-pointer hover:shadow-lg duration-500 rounded-2xl p-4">
      <div className="flex space-x-6 capitalize">
        <img
          className=" w-[100px] h-[80px] lg:h-[100px] lg:w-[140px] rounded-lg object-cover"
          src={item.img}
          alt={item.title}
        />
        <div className="">
          <h1 className="uppercase font-semibold text-[13px]">{item.title}</h1>
          <h1 className="font-bold text-[12px] md:text-[18px] lg:text-[20px]">
            {item.text}
          </h1>
          <h1 className="text-[#6d6d6d] text-[12px]">{item.date}</h1>
        </div>
      </div>
    </div>
  );
};

// Updated Card_row Component
export const Card_row = () => {
  return (
    <div className="flex flex-col lg:col-span-2 gap-y-[34px]">
      {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};
