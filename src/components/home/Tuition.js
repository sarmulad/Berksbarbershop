import React from "react";
import clsx from "classnames";
import texts from "assets/styles/texts";
import TuitionInfo from "./TuitionInfo";

const tuitionList = [
  {
    name: "Barber",
    list: [
      { name: "Tuition Cost", cost: 6000 },
      { name: "Clock Hours", value: "1250 hrs" },
      { name: "Full - Time", value: "42 weeks" },
      { name: "Enrollment Fee", cost: 100 },
      { name: "Books/Supplies", cost: 1540 },
    ],
  },
  {
    name: "Crossover",
    list: [
      { name: "Tuition Cost", cost: 3400 },
      { name: "Clock Hours", value: "695 hrs" },
      { name: "Full - Time", value: "23 weeks" },
      { name: "Enrollment Fee", cost: 100 },
      { name: "Books/Supplies", cost: 1500 },
    ],
  },
  {
    name: "Barber Teacher",
    list: [
      { name: "Tuition Cost", cost: 13400 },
      { name: "Clock Hours", value: "1250 hrs" },
      { name: "Full - Time", value: "42 weeks" },
      { name: "Enrollment Fee", cost: 100 },
      { name: "Books/Supplies", cost: 1500 },
    ],
  },
];

const Tuition = () => {
  return (
    <div className="bg-berk-black">
      <div
        className="max-w-largest mx-auto pt-[59px] pb-[72.87px] xl:pt-[102px] xl:pb-[162px] xl:px-[161px]"
        id="tuition"
      >
        <h4
          className={clsx(
            texts.berk_h4_bold,
            "text-berk-white text-center xl:text-[32px] xl:leading-10"
          )}
        >
          Our <span className="text-berk-brown">Tuition</span>
        </h4>
        <h5
          className={clsx(
            texts.berk_h5_regular,
            "text-berk-brown text-center mt-[57px] xl:mt-[79px] mb-[56px] xl:mb-[67px] xl:text-left xl:text-[24px] xl:leading-[30px]"
          )}
        >
          Tuition Cost
        </h5>
        <div className="flex flex-col space-y-20 items-center justify-center mb-[45.59px] xl:flex-row xl:space-y-0 xl:space-x-[96px] xl:mb-[49.79px] xl:justify-start">
          {tuitionList.map((tuition, index) => (
            <TuitionInfo
              key={index}
              name={tuition.name}
              breakdown={tuition.list}
              isLastItem={index === tuitionList.length - 1}
            />
          ))}
        </div>
        <p className="text-berk-blue text-[13px] leading-5 pl-5 pr-[38px] mb-[58px] xl:mb-[140px] xl:w-[443px] xl:pl-0 xl:pr-0 xl:text-base">
          *Acceptable forms of payments: Check OR Money Order Only.
          (Bi-weekly/Monthly payments)
        </p>
        <div className="flex flex-col space-y-[41.87px] xl:space-y-[33px] pl-[35px] pr-5 xl:pl-0 ">
          <h5
            className={clsx(
              texts.berk_h5_bold,
              "text-berk-brown text-center xl:text-left xl:text-[24px] xl:leading-[30px]"
            )}
          >
            Tuition Payments
          </h5>
          <p className="text-[15.31px] leading-[22.97px] text-white mb-[72.87px] xl:mb-[162px] xl:text-base">
            In the event the student is paying his or her tuition through
            Vocational Rehabilitation or Veterans Programs, all disbursements
            will be credited to the student&apos;s account for actual tuition or
            other charges. Students not paying tuition through the Vocational
            Rehabilitation or Veterans Programs Vocational Rehabilitation or
            Veterans Programs, will be billed monthly. The institution reserves
            the right to suspend any student from school whose account is
            delinquent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tuition;
