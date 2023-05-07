import React from "react";
import clsx from "classnames";
import berkBuildingOutside from "assets/images/berk-building-outside.png";
import texts from "assets/styles/texts";

const Welcome = () => {
  return (
    <div className="bg-berk-white">
      <div className="pt-[112px]  px-5 pb-[67px] xl:pt-[116px] xl:px-[161px] xl:pb-[136px] max-w-largest mx-auto">
        <div className="flex flex-col xl:flex-row-reverse">
          <div className="px-7 flex-shrink-0 mx-auto xl:mx-0 xl:ml-[126px] xl:mt-[210px]">
            <img
              className="object-cover pointer-events-none select-none w-[294px] h-[294px] xl:w-[384px] xl:h-[384px]"
              src={berkBuildingOutside}
              alt="Outside Berks School"
            />
          </div>
          <div>
            <div className="mt-[49px] xl:mt-0">
              <h4 className={clsx(texts.berk_h4_bold, "text-berk-brown")}>
                WELCOME
              </h4>
              <p className="mt-[10px] text-berk-black">
                Dear Berks Barber School Student,
                <br />
                On behalf of the staff and administration at Berks Barber
                School, we welcome you. We would like you to know that whatever
                your goal, you will find Berks Barber School to be a great
                choice in this industry. Berks Barber School maintains a
                commitment to excellence in its program. So in choosing Berks
                Barber School, you have, indeed, chosen one of the best. We will
                continue to provide you with educational opportunities and
                services that merit such prestige. We challenge you to take
                advantage of all the valuable programs available to you and wish
                you success as you work toward your degree.
                <br />
                <br />
                Sincerely,
                <br />
                Samuel Delacruz
              </p>
            </div>
            <div className="mt-[79px]">
              <h4 className={clsx(texts.berk_h4_bold, "text-berk-brown")}>
                Mission Statement
              </h4>
              <p className="mt-[10px] text-berk-black">
                Our mission statement is to maintain a commitment to excellence
                in our programs. To provide quality instruction to all students.
                To provide a safe, supportive and energetic environment for our
                students that facilitates the knowledge, skills and confidence
                necessary to attain success in their field. To assist our
                graduates in securing employment in their field which will allow
                them to be responsible, contributing factors to society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
