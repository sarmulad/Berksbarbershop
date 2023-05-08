import React from "react";
import clsx from "classnames";
import barbers from "assets/images/barbers.png";
import { TopNav } from "components/navigation";
import texts from "assets/styles/texts";
import { Link } from "react-router-dom";
import { routes } from "utils/constants";

const Hero = () => {
  return (
    <div className="h-screen bg-berk-white relative">
      <img
        src={barbers}
        alt="barbers"
        className="animate__animated animate__fadeIn absolute xl:hidden object-cover left-0 top-0 h-full w-full pointer-events-none select-none"
      />
      <div className="hidden xl:flex absolute left-0 top-0 h-full w-full pointer-events-none select-none bg-berk-white">
        <img
          src={barbers}
          alt="barbers"
          className="h-full flex-1 object-cover animate__animated animate__fadeIn"
        />
        <img
          src={barbers}
          alt="barbers"
          className="h-full flex-1 object-cover animate__animated animate__fadeIn"
        />
        <img
          src={barbers}
          alt="barbers"
          className="h-full flex-1 object-cover animate__animated animate__fadeIn"
        />
      </div>
      <div className="relative">
        <TopNav type="dark" />
        <div className="flex flex-col mt-[32vh] xl:mt-[14vh] items-center justify-center">
          <h2
            className={clsx(
              texts.berk_h2_bold,
              "animate__animated animate__fadeIn uppercase text-center xl:text-[96px] xl:leading-[116px] text-berk-black xl:w-[711px]"
            )}
          >
            UNLOCK YOUR POTENTIAL
          </h2>
          <p className="mt-[10px] w-[80%] text-berk-black md:max-w-[500px] text-center md:text-[18px] leading-[30px]">
            Get Hands-On Training and Professional Experience While Providing
            Barbing Services to the Community
          </p>
          <div className="h-[7vh] max-h-[80px]" />
          <Link
            to={routes.book_appointment}
            className={clsx(
              texts.berk_h5_regular,
              "bg-berk-brown animate__animated animate__fadeIn py-[14px] px-4 text-berk-white rounded-[20px] xl:px-[41px] xl:py-[22px]"
            )}
          >
            SCHEDULE TOUR
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
