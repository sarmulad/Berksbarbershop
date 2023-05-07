import { Wrapper } from "components/navigation";
import React from "react";
import berkClass from "assets/images/class.png";
import clippersLarge from "assets/images/about/clippers-large.png";
import largeBerkClass from "assets/images/about/class-large.png";
import { PageHeader } from "components/utils";

const About = () => {
  return (
    <Wrapper>
      <div className="mt-[9px] pl-5 pr-[22px] animate__animated animate__fadeIn">
        <PageHeader black_text={"About"} gold_text={"us"} />
        <div className="flex flex-col xl:flex-row mx-auto xl:justify-center xl:space-x-[81px] max-w-largest xl:px-[162px] xl:pb-[162px] xl:mt-[14px]">
          <div className="flex flex-col xl:space-y-[50px] xl:max-w-[548px] xl:flex-1">
            <p className="mt-[27px] leading-6 mb-6 xl:mt-0">
              Berks Barber School is a barber school that will service
              individuals interested in obtaining a license to become a barber,
              also enhancing skills in cutting hair. The school will be located
              at 432 Schuylkill Avenue, Reading, PA 19601.
              <br />
              <br /> It is a convenient location in terms of having on-site
              parking and can serve students not only from Reading but from
              Berks County and beyond. Berks Barber School will give students of
              the community a chance to further their education in an intriguing
              field that they are passionate about and can excel in.
            </p>
            <div className="xl:hidden pl-[45px] pr-[43px] mb-[42.7px] flex items-center justify-center">
              <img
                src={berkClass}
                alt="Berks Class"
                height={221.3}
                width={260}
              />
            </div>
            <img
              className="hidden xl:block animate__animated animate__fadeInLeft w-[477px] h-[244px] object-cover"
              alt="Clippers"
              src={clippersLarge}
            />
          </div>
          <div className="flex flex-col xl:space-y-[50px] xl:max-w-[548px] xl:flex-1">
            <img
              src={largeBerkClass}
              alt="Large berks class"
              className="w-[477px] animate__animated animate__fadeInRight h-[406px] hidden xl:block object-cover"
            />
            <p className="mb-[47px] leading-6 text-black">
              Berks Barber School will offer superior barbering instruction to
              students who wish to learn how to cut hair with the best
              techniques. The school will offer essential training to ensure
              their students are qualified and are performing to their highest
              potential.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
