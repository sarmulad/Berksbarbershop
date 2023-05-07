import texts from "assets/styles/texts";
import { TopNav, Wrapper } from "components/navigation";
import { PageHeader } from "components/utils";
import React from "react";
import clsx from "classnames";
import barbers2 from "assets/images/barbers2.png";
import { serviceMenuList } from "utils/constants";

const ServiceMenu = () => {
  return (
    <Wrapper showTopNav={false} className={"bg-berk-white"}>
      <div className="relative min-h-[calc(100vh_-_149.41px)] animate__animated animate__fadeIn xl:min-h-[calc(100vh_-_97.41px)]">
        <img
          src={barbers2}
          alt="barbers"
          className="absolute object-cover left-0 top-0 h-full w-full pointer-events-none select-none"
        />
        <div className="relative">
          <TopNav type="dark" />
          <PageHeader black_text={"Service"} gold_text={"menu"} />
          <div className="max-w-largest mx-auto">
            <ul className="mt-[49px] flex flex-col space-y-[50px] px-5 mb-11">
              {serviceMenuList.map((item, index) => (
                <div className="flex flex-col space-y-[5px]" key={index}>
                  <h4 className={clsx(texts.berk_h5_bold, "text-black")}>
                    {item.title}
                  </h4>
                  <p className="text-black">{item.description}</p>
                </div>
              ))}
            </ul>
            <p className="max-w-[317px] px-5 text-berk-blue leading-6 pb-[78px]">
              *ALL WORK DONE BY STUDENT AND SUPERVISED BY BARBER INSTRUCTOR
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ServiceMenu;
