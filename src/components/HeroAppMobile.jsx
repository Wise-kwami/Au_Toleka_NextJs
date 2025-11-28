import React from "react";
import Image from "next/image";

const HeroAppMobile = () => {
  return (
    <div className="flex flex-row justify-around">
      <div className="left w-1/2 flex flex-col items-center justify-center gap-7">
        <h1 className="font-bold text-3xl">
          Download <br /> mobile app
        </h1>
        <p className="text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          architecto quam voluptas exercitationem id mollitia itaque accusamus,
          dolorum repudiandae. Vel sint veritatis voluptatum quo velit, delectus
          non dicta sequi maxime.
        </p>
        <Image
          src="/images/app-store.svg"
          alt="mobile app"
          height={200}
          width={200}
        />
        <Image
          src="/images/play-google.svg"
          alt="mobile app"
          height={200}
          width={200}
        />
      </div>
      <div className="right flex w-1/2">
        <Image
          src="/images/phone-iphone.svg"
          alt="mobile app"
          height={200}
          width={200}
        />
        <Image
          src="/images/phone-iphone.svg"
          alt="mobile app"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default HeroAppMobile;
