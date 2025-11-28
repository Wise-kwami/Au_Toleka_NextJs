import React from "react";
import Image from "next/image";

const HeroFooter = () => {
  return (
    <div className="flex relative mb-20 mt-20">
      <div className="flex  flex-col   p-20 bg-primary  rounded-2xl  ">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-white text-3xl mb-10">
            Facts in Numbers
          </h2>
          <p className="text-center font-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            accusantium consequuntur aut sint at distinctio et inventore nemo
            doloremque, voluptatem nostrum, beatae error temporibus? Itaque
            beatae exercitationem iste quod delectus.
          </p>
        </div>
        <div className="banner-icon z-6 flex justify-between mt-10">
          <div className="box-icon bg-white w-1/5 rounded-xl flex gap-7 p-5 cursor-pointer">
            <div className="bg-secondary flex flex-1 items-center justify-center rounded-lg p-1.5">
              <Image
                src="./images/car-icon.svg"
                alt="icone de voture"
                height={30}
                width={30}
              />
            </div>
            <div className="flex flex-2 flex-col gap-2">
              <h3 className="font-bold text-xl">540+</h3>
              <p className="">Cars </p>
            </div>
          </div>
          <div className="box-icon bg-white w-1/5 rounded-xl flex gap-7 p-5 cursor-pointer">
            <div className="bg-secondary flex flex-1 items-center justify-center rounded-lg p-1.5">
              <Image
                src="./images/fav-icon.svg"
                alt="icone de favoris"
                height={30}
                width={30}
              />
            </div>
            <div className="flex flex-2 flex-col gap-2">
              <h3 className="font-bold text-xl">20k+</h3>
              <p className="">Customers </p>
            </div>
          </div>
          <div className="box-icon bg-white w-1/5 rounded-xl flex gap-7 p-5 cursor-pointer">
            <div className="bg-secondary flex flex-1 items-center justify-center rounded-lg p-1.5">
              <Image
                src="./images/calendar-icon.svg"
                alt="icone de calendrier"
                height={30}
                width={30}
              />
            </div>
            <div className="flex flex-2 flex-col gap-2">
              <h3 className="font-bold text-xl">25+</h3>
              <p className="">Years</p>
            </div>
          </div>
          <div className="box-icon bg-white w-1/5 rounded-xl flex gap-7 p-5 cursor-pointer">
            <div className="bg-secondary flex flex-1 items-center justify-center rounded-lg p-1.5">
              <Image
                src="./images/speed-icon.svg"
                alt="icone de vitesse"
                height={30}
                width={30}
              />
            </div>
            <div className="flex flex-2 flex-col gap-2">
              <h3 className="font-bold text-xl">20m+</h3>
              <p className="">Miles</p>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="absolute flex opacity-35 justify-center items-center w-[65%] h-[90%] top-[15%] left-[15%] z-3"
        src="/images/car-right.svg"
        alt="icone de voiture à droite"
        height={200}
        width={200}
      />
      <Image
        className="absolute flex  w-[50%] h-[45%] top-[55%] left-[-8%]  z-2"
        src="./images/pneu-right.svg"
        alt="icone de pneu à droite"
        height={200}
        width={200}
      />
    </div>
  );
};

export default HeroFooter;
