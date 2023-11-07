import React from "react";
import leaves from "../../assets/leaves.jpg";
import Image from "next/image";
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
            <h1 className="text-5xl font-bold ">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
