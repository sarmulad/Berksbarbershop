import React from "react";
import clsx from "classnames";
import berkBuilding from "assets/images/berk-building.jpg";
import texts from "assets/styles/texts";

const Welcome = () => {
  return (
    <div className="bg-berk-white">
      <div className="pt-[50px]  px-5 pb-[67px] xl:pt-[116px] xl:px-[161px] xl:pb-[136px] max-w-largest mx-auto">
        <div className="flex flex-col xl:flex-row-reverse">
          <div className=" flex-shrink-0 mx-auto xl:mx-0 xl:ml-[126px] xl:mt-[50px]">
            <img
              className="object-contain pointer-events-none select-none w-[100%] h-[294px] xl:w-[450px] xl:h-[450px]"
              src={berkBuilding}
              alt="inside Berks School"
            />
          </div>
          <div>
            <div className="mt-[49px] xl:mt-0">
              <h4 className={clsx(texts.berk_h4_bold, "text-berk-brown")}>
                Welcome to Berks Barber School
              </h4>
              <p className="mt-[10px] text-berk-black">
                where we are committed to providing the best education and
                training in the barbing industry. Our mission is to help you
                develop the knowledge, skills, and confidence necessary to
                succeed in this exciting and rewarding field. Whether you're a
                beginner or a seasoned professional, our programs offer quality
                instruction in a safe and supportive environment. Our goal is to
                assist you in achieving your aspirations and securing employment
                that allows you to make a positive impact on society. Join us at
                Berks Barber School and start your journey towards a successful
                career in the barbing industry.
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
