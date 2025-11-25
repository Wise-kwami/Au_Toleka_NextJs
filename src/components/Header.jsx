import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex p-6 h-1/8 w-full items-center justify-between  ">
      <div className="flex justify-center items-center gap-6 flex-row">
        <Image
          src="./images/car.svg"
          height={50}
          width={50}
          alt="logo du site web"
        />
        <h1 className="font-bold text-4xl">Car Rental</h1>
      </div>

      <div className="nav">
        <ul className="flex gap-6 font-light">
          <Link href="/">
            <li className="hover:font-extrabold transition-all duration-100 ">
              Home
            </li>
          </Link>
          <Link href="/Carlist">
            <li className="hover:font-extrabold transition-all duration-100 ">
              Vehicules
            </li>
          </Link>

          <Link href="/Details">
            <li className="hover:font-extrabold transition-all duration-100 ">
              Details
            </li>
          </Link>
          <Link href="/About">
            <li
              className="hover:font-extrabold
                  transition-all duration-100 "
            >
              About Us
            </li>
          </Link>
          <Link href="/Contacts">
            <li
              className="hover:font-extrabold
                  transition-all duration-100 "
            >
              Contact Us
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex justify-center gap-2">
        <img className="" src="./images/phone.svg" alt="icone pour appel" />
        <div className="flex flex-col items-center">
          <p>Need help ?</p>
          <p className="font-bold">+996 247-1680</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
