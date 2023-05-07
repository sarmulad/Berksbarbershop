import { Wrapper } from "components/navigation";
import { BeginJourney } from "components/progams";
import { PageHeader } from "components/utils";
import React from "react";

const BarberTeacherProgram = () => {
  return (
    <Wrapper
      topNavType="light"
      className={"bg-gradient-to-b from-berk-dark-from to-berk-dark-to"}
    >
      <div className="mt-[13px] px-5 max-w-largest mx-auto">
        <PageHeader
          background="dark"
          black_text={"Barber Teacher"}
          gold_text={"Program"}
        />
        <p className="mt-[35px] mb-[39px] text-base leading-6 text-berk-white text-center xl:text-[18px] max-w-[1116px] mx-auto">
          Requirements: In order for any person to enroll in the instructor
          program the individual must be qualified to receive a certificate of
          registration as a barber instructor, and must be 21 years of age or
          older. Individual must be of good moral and temperate habits, must be
          able to read, write and speak English, must have a high school
          education or equivalent, and must have successfully completed not less
          than 1500 clock hours at a barbering school approved by the State
          Barber Board of Examiners.
        </p>
        <div className="h-[1px] bg-berk-white mx-auto w-[253px] xl:w-[618px] xl:mb-[66px] mb-[31px]" />

        <BeginJourney program={"BARBERTEACHER"} />
      </div>
    </Wrapper>
  );
};

export default BarberTeacherProgram;
