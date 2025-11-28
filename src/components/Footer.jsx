import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex  flex-col ml-20 mr-20 mb-15 mt-15 ">
      <div className="box-1 flex w-full justify-between items-center ">
        <div>
          <div className="flex justify-center items-center gap-6 flex-row">
            <Image
              src="./images/car.svg"
              height={50}
              width={50}
              alt="logo du site web"
            />
            <h1 className="font-bold text-xl">Car Rental</h1>
          </div>
        </div>
        <div className="local flex justify-center gap-2">
          <Image
            className=""
            src="./images/local-icon.svg"
            alt="icone pour appel"
            width={50}
            height={50}
          />
          <div className="flex flex-col">
            <p className="text-sm">Address</p>
            <p className="font-bold text-sm">Oxford Ave. Cary, NC 27511</p>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="email flex justify-center gap-2">
          <Image
            className=""
            src="./images/mail-icon.svg"
            alt="icone pour appel"
            width={50}
            height={50}
          />
          <div className="flex flex-col">
            <p className="text-sm">Email</p>
            <p className="font-bold text-sm">nwiger@yahoo.com</p>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="phone flex justify-center gap-2">
          <Image
            className=""
            src="./images/phone-icon.svg"
            alt="icone pour appel"
            width={50}
            height={50}
          />
          <div className="flex flex-col">
            <p className="text-sm">Phone</p>
            <p className="font-bold text-sm">+537 547-5401</p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="box-2 flex items-center justify-between mt-5">
        <div className="text-icon flex flex-col ">
          <p className="font-bold text-lg mb-5">
            Faucibus Faucibus <br />
            pelletesque dictum turpis, <br />
            id pelletsque turpis <br />
            massa a id iaculis lerem t...
          </p>
          <div className="flex gap-5">
            <Image
              className="cursor-pointer"
              src="./images/fb-icon.svg"
              alt="icone facebook"
              width={30}
              height={30}
            />
            <Image
              className="cursor-pointer"
              src="./images/insta-icon.svg"
              alt="icone instagram"
              width={30}
              height={30}
            />
            <Image
              className="cursor-pointer"
              src="./images/X-icon.svg"
              alt="icone twiter"
              width={30}
              height={30}
            />
            <Image
              className="cursor-pointer"
              src="./images/youtube-icon.svg"
              alt="icone youtube"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="text-ul">
          <h5 className="font-bold mb-3">Useful link</h5>
          <ul>
            <li>About us</li>
            <li>contact us</li>
            <li>Gallery</li>
            <li>Blog</li>
            <li>F.A.Q</li>
          </ul>
        </div>
        <div className="text-ul2">
          <h4 className="font-bold mb-3">Vehicules</h4>
          <ul>
            <li>Sedan</li>
            <li>Cabriolet</li>
            <li>Pickup</li>
            <li>Minivan</li>
            <li>SUV</li>
          </ul>
        </div>
        <div className="text-app flex flex-col justify-between">
          <h5 className="font-bold mb-5">Dowload App</h5>
          <Image
            className="mb-5 mt-5"
            src="./images/app-store.svg"
            alt="icone app"
            height={150}
            width={150}
          />
          <Image
            src="./images/play-google.svg"
            alt="icone app"
            height={150}
            width={150}
          />
        </div>
      </div>
      <div className="box-3 flex justify-center items-center ">
        <p className="text-xl font-extrabold  text-neutral2 mt-10">
          Copyright Car Rental 2024. Design by Wisedev
        </p>
      </div>
    </div>
  );
};

export default Footer;
