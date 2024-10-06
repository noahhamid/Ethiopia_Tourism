import hero_img from "../assets/home-page-images/hero_img.png";
import landscape from "../assets/home-page-images/landscape.jpg";
import lalibela from "../assets/home-page-images/lalibela.jpg";
import chebera from "../assets/home-page-images/chebera.jpg";
import halala from "../assets/home-page-images/halala.jpg";
import hallala_video from "../assets/home-page-images/hallala.mp4";
import travling_photo from "../assets/home-page-images/travling.avif";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { ImgCard, Card_row } from "../components/Card";
import { Title } from "../components/Title";
import { Info } from "../components/Info";
import { useState } from "react";

const Home = () => {
  const [descIndex, setDescIndex] = useState(0);

  const currentYear = new Date().getFullYear();

  const descriptions = [
    "Make a trip request, connect with a local expert, and sit back while our experts craft a custom itinerary based on expertise, exclusivity, and ease. It’s a trip you couldn’t plan yourself.",
    "Who knows better than a local? Elsewhere teams up with a global network of award-winning travel guides. Each and every trip crafted with Elsewhere is unique to you and your travel style.",
  ];

  const handleButtonClick = (index) => {
    setDescIndex(index);
  };

  return (
    <section>
      {/* Hero */}
      <div
        className="relative overflow-hidden h-[80vh]"
        aria-label="hero-section"
      >
        <img
          className="h-full w-full object-cover"
          src={hero_img}
          alt="A scenic view of Ethiopia, encouraging exploration"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#ffffff] font-semibold">
          <h1
            className="uppercase text-[13px] lg:text-[20px]"
            aria-label="team of experts label"
          >
            a team of professional travel experts
          </h1>
          <h1
            className="capitalize text-[30px] lg:text-[70px]"
            aria-label="explore ethiopia"
          >
            explore ethiopia
          </h1>
        </div>
      </div>

      {/* Locations */}
      <div className="my-16 mx-8" aria-label="locations-section">
        <div className="flex flex-wrap justify-between">
          <Title text="plan your trip" topic="where to next?" />
          <Button text="Learn more" />
        </div>
        {/* Cards */}
        <div className="flex flex-wrap gap-8   md:flex-nowrap mt-10">
          <ImgCard img={lalibela} title="lalibela" />
          <ImgCard img={chebera} title="chebera churchura" />
          <ImgCard img={halala} title="halala kela" />
        </div>
      </div>

      {/* Video */}
      <div className="relative w-full h-screen" aria-label="video-section">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          aria-label="Halala Kela video"
        >
          <source src={hallala_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <h1
          className="absolute inset-0 flex items-center justify-center text-[30px] md:text-[50px] uppercase font-semibold tracking-tighter text-white"
          aria-label="best in travel"
        >
          best in travel {currentYear}
        </h1>
      </div>

      {/* Info Section */}
      <div
        className="py-20 flex flex-wrap lg:flex-nowrap capitalize bg-[#ecefff]"
        aria-label="itinerary-section"
      >
        <img
          className="lg:w-2/5 h-full rounded-r-3xl pr-3"
          src={landscape}
          alt="Beautiful Ethiopian landscape"
        />
        <div className="p-4 lg:px-[100px]">
          <Title
            text="anywhere with us"
            topic="Your dream itinerary, crafted with you"
            className=" text-[#5967ff]"
          />
          <h1 className="lg:text-xl mt-5">
            Elsewhere by Ethiopian Tourism connects you with an award-winning
            local expert to craft your personalized, unforgettable trip.
          </h1>
          <div>
            <Info
              buttonTexts={["how does it work?", "who are our local experts?"]}
              desc={descriptions[descIndex]}
              onButtonClick={handleButtonClick}
              activeIndex={descIndex}
            />
          </div>
        </div>
      </div>

      {/* Travel Stories Section */}
      <div className="my-16 mx-4 lg:mx-8" aria-label="travel-stories-section">
        <Title
          text="Travel stories and news"
          topic="Explore our latest stories"
        />
        <div className="mt-10 grid lg:grid-cols-5 gap-4">
          <div className="lg:col-span-3">
            <img
              className="rounded-xl lg:rounded-3xl"
              src={travling_photo}
              alt="Traveler enjoying Ethiopian scenery"
            />
          </div>
          <Card_row />
        </div>
      </div>

      {/* Footer */}
      <Footer aria-label="footer-section" />
    </section>
  );
};

export default Home;
