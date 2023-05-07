import { Wrapper } from "components/navigation";
import { BeginJourney } from "components/progams";
import { PageHeader } from "components/utils";
import React from "react";

const BarberProgram = () => {
  return (
    <Wrapper
      topNavType="light"
      className={"bg-gradient-to-b from-berk-dark-from to-berk-dark-to"}
    >
      <div className="mt-[13px] px-5 max-w-largest mx-auto">
        <PageHeader
          background="dark"
          black_text={"Barber"}
          gold_text={"Program"}
        />
        <p className="mt-[35px] mb-[39px] text-base leading-6 text-berk-white text-center xl:text-[18px] max-w-[1116px] mx-auto">
          The professional course in barbering requires the satisfactory
          completion of 1250 hours of training. This will entitle you to take
          the Pennsylvania State Board of Barber Examination for the
          Pennsylvania Barber License.
        </p>
        <div className="h-[1px] bg-berk-white mx-auto w-[253px] xl:w-[618px] xl:mb-[66px] mb-[31px]" />
        <BeginJourney program={"BARBER"} />
      </div>
    </Wrapper>
  );
};

export default BarberProgram;
