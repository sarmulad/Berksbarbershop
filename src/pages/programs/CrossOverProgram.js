import { Wrapper } from "components/navigation";
import { BeginJourney } from "components/progams";
import { PageHeader } from "components/utils";
import React from "react";

const CrossOverProgram = () => {
  return (
    <Wrapper
      topNavType="light"
      className={"bg-gradient-to-b from-berk-dark-from to-berk-dark-to"}
    >
      <div className="mt-[13px] px-5 max-w-largest mx-auto">
        <PageHeader
          background="dark"
          black_text={"Crossover"}
          gold_text={"Program"}
        />
        <p className="mt-[35px] mb-[39px] text-base leading-6 text-berk-white text-center xl:text-[18px] max-w-[1116px] mx-auto">
          The Crossover program is designed to prepare a licensed cosmetologist
          to start a career in Barbering. The objective is for the cosmetologist
          to acquire the history fundamentals, theory, and hands on training to
          become a licensed barber.
          <br /> At Berks Barber School we prepare cosmologists for the state
          barber examination and educate them with knowledge and skills needed
          to become a professional, licensed Barber.
        </p>
        <div className="h-[1px] bg-berk-white mx-auto w-[253px] xl:w-[618px] xl:mb-[66px] mb-[31px]" />
        <BeginJourney program={"CROSSOVER"} />
      </div>
    </Wrapper>
  );
};

export default CrossOverProgram;
