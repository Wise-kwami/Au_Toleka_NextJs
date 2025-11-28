"use client";
import React from "react";
import Image from "next/image";

const BannerLogoCar = () => {
  return (
    <div className="flex bg-neutral p-9 rounded-3xl w-full items-center justify-between">
      <Image src="./images/toyota_logo.svg" alt="" width={100} height={100} />
      <Image src="./images/ford_logo.svg" alt="" width={100} height={100} />
      <Image src="./images/mercedes_logo.svg" alt="" width={100} height={100} />
      <Image src="./images/jeep_logo.svg" alt="" width={100} height={100} />
      <Image src="./images/bmw_logo.svg" alt="" width={100} height={100} />
      <Image src="./images/huandei_logo.svg" alt="" width={100} height={100} />
    </div>
  );
};

export default BannerLogoCar;
