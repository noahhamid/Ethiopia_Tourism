import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { Title } from "../components/Title";
import lalibela from "../assets/home-page-images/lalibela.jpg";
import chebera from "../assets/home-page-images/chebera.jpg";
import halala from "../assets/home-page-images/halala.jpg";
import Footer from "../components/Footer";

import { ImgCard } from "../components/Card";

const About = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-8/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">
          <nav className="flex px-4 justify-between items-center">
            <div>
              <img
                src="https://image.flaticon.com/icons/svg/497/497348.svg"
                alt=""
                className="w-8"
              />
            </div>
          </nav>
          <header className="container px-4 lg:flex mt-20 items-center h-full lg:mt-0">
            <div className="w-full">
              <h1 className="text-4xl capitalize lg:text-5xl font-bold">
                about us
              </h1>
              <div className="w-20 h-2 bg-blue-700 my-4" />
              <p className="text-xl mb-10">
                We specialize in providing unforgettable experiences in
                Ethiopia, from breathtaking landscapes to rich cultural
                heritage.
              </p>

              <Button to="../" text="back to home" />
            </div>
          </header>
        </div>
      </div>
      <img
        src="https://cdn01.buxtonco.com/news/2661/istock-665028882__large.jpg"
        alt="Leafs"
        className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
      />
      {/* card */}
      <div className="bg-gray-100 py-16 px-10 lg:px-[56px] space-y-7">
        <Title text= 'the Heart of Ethiopia' topic="Discover Our Journey" />
        <div className=" flex flex-wrap gap-8  md:flex-nowrap ">
          <ImgCard img={lalibela} title="lalibela" />
          <ImgCard img={chebera} title="chebera churchura" />
          <ImgCard img={halala} title="halala kela" />
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default About;
