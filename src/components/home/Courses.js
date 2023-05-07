import React from "react";
import clsx from "classnames";
import texts from "assets/styles/texts";

const Courses = () => {
  return (
    <div className="bg-berk-y1">
      <div className="pt-[57px] px-[34px] max-w-largest mx-auto" id="courses">
        <h4
          className={clsx(
            texts.berk_h4_bold,
            "text-white text-center mb-6 xl:text-[32px] xl:leading-10"
          )}
        >
          Our <span className="text-berk-brown">Courses</span>
        </h4>
        <div>
          <div className="flex flex-col space-y-[15px]">
            <h5
              className={clsx(
                texts.berk_h5_bold,
                "text-berk-brown xl:text-[24px] xl:leading-[30px]"
              )}
            >
              Barber:
            </h5>
            <p className="text-berk-white leading-6 mb-8 xl:mb-[58px]">
              The barber course of study is designed to prepare students for the
              state licensing examination and for entry-level employment in the
              barber industry. The knowledge and skills obtained will prepare
              you for work in a full service Barber Shop or Chain Barber Shop as
              a Master Barber, shop manager or shop owner.
            </p>
          </div>
          <h5
            className={clsx(
              texts.berk_h5_bold,
              "text-berk-brown mb-[23px] mt-8 xl:text-[24px] xl:leading-[30px] xl:mb-[42px]"
            )}
          >
            Barber Course
          </h5>
          <div className="flex flex-col space-y-[15px] xl:space-y-[36px]">
            <h5
              className={clsx(
                texts.berk_h5_bold,
                "text-berk-brown xl:text-[24px] xl:leading-[30px]"
              )}
            >
              EVALUATION PERIODS
            </h5>
            <p className="text-berk-white leading-6">
              Students are evaluated for Satisfactory Academic Progress based on
              the scheduled clock hours as follows:
            </p>
          </div>
          <div className="py-[87px] xl:pt-[78px] xl:pb-[244px] flex items-center justify-center">
            <div className="bg-berk-ash rounded-[20px] w-[207px] xl:w-[992px] xl:justify-between xl:h-[207px] xl:space-y-0 xl:flex-row pt-[79px] pb-[81px] xl:py-[30px] xl:px-[55px] flex flex-col space-y-[67px]">
              <div className="flex flex-col items-center justify-center xl:w-[232px]">
                <h4
                  className={clsx(
                    texts.berk_h4_bold,
                    "text-white text-center mb-12"
                  )}
                >
                  Barber
                </h4>
                <h4
                  className={clsx(
                    texts.berk_h4_regular,
                    "text-white text-center mb-[67px] xl:mb-0"
                  )}
                >
                  1250 hrs.
                </h4>
                <div className="xl:hidden bg-gradient-to-r from-berk-dark-from to-berk-dark-to h-[1px] w-[112px] mx-auto" />
              </div>
              <div className="flex flex-col items-center justify-center relative xl:w-[344px]">
                <div className="hidden xl:block absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-berk-dark-from to-berk-dark-to" />
                <div className="hidden xl:block absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-berk-dark-from to-berk-dark-to" />
                <h4
                  className={clsx(
                    texts.berk_h4_bold,
                    "text-white text-center mb-12"
                  )}
                >
                  Crossover
                </h4>
                <h4
                  className={clsx(
                    texts.berk_h4_regular,
                    "text-white text-center mb-[67px] xl:mb-0"
                  )}
                >
                  695 hrs.
                </h4>
                <div className="xl:hidden bg-gradient-to-r from-berk-dark-from to-berk-dark-to h-[1px] w-[112px] mx-auto" />
              </div>
              <div className="flex flex-col items-center justify-center xl:w-[232px]">
                <h4
                  className={clsx(
                    texts.berk_h4_bold,
                    "text-white text-center mb-12"
                  )}
                >
                  Barber Teacher
                </h4>
                <h4
                  className={clsx(
                    texts.berk_h4_regular,
                    "text-white text-center"
                  )}
                >
                  1250 hrs.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
