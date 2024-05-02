import React from "react";
import leaves from "../../assets/leaves.jpg";
import Image from "next/image";
import Link from "next/link";
import PlantPage from "@/pages/plant";
const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen my-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={leaves}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="leaves image"
          />
          <div className="text-slate-200">
            <h3 className="text-5xl font-thin font-serif text-left hero">
              Check Your Plant Health!
            </h3>
            <p className="py-6 text-justify">
              Regularly checking your plants health and addressing any concerns
              promptly will help you maintain thriving and vibrant greenery in
              your surroundings. Its a rewarding practice that not only benefits
              your plants but also enhances your living spaces.
            </p>
            <Link href="/plant" className="btn button">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
