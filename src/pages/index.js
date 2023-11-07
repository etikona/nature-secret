import Hero from "@/components/Home/Hero";
import SingleCard from "@/components/Home/SingleCard";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider/Slider";
import React from "react";

const Home = () => {
  return (
    <div className="mx-10">
      <Navbar />
      <Slider />
      <SingleCard />
      <Hero />
    </div>
  );
};

export default Home;
