import React from "react";
import pot1 from "../../assets/pot1.jpg";
import pot2 from "../../assets/pot2.jpg";
import pot3 from "../../assets/pot3.jpg";
import Image from "next/image";
const SingleCard = () => {
  return (
    <div className="my-20">
      <div className="single-card rounded-xl shadow-lg grid  grid-cols-1  lg:grid-cols-3 gap-4 justify-center ">
        <div className="flex justify-around gap-2 text-justify">
          <div>
            <Image className="w-24 h-20" src={pot1} alt="pot 1" />
          </div>
          <div className="text-white">
            <h4 className="text-lg font-semibold">Blossoming Together</h4>
            <p className="text-xs">
              Building Community Gardens for a Better World
            </p>
          </div>
        </div>
        <div className="flex justify-around gap-2">
          <div>
            <Image className="w-24 h-20" src={pot2} alt="pot 2" />
          </div>
          <div className="text-white">
            <h4 className="text-lg font-semibold">Planting Hope</h4>
            <p className="text-xs">How Trees Are Healing the Planet</p>
          </div>
        </div>
        <div className="flex justify-around gap-2">
          <div>
            <Image className="w-24 h-20" src={pot3} alt="pot 3" />
          </div>
          <div className="text-white">
            <h4 className="text-lg font-semibold">Gardening for Good</h4>
            <p className="text-xs">Growing Food, Growing Change</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
