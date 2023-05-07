import React, { useMemo } from "react";
import clsx from "classnames";

const TuitionInfo = ({ name, breakdown, isLastItem }) => {
  const totalCost = useMemo(() => {
    return breakdown.reduce((accumulator, currentValue) => {
      if (currentValue.cost) {
        return accumulator + currentValue.cost;
      } else {
        return accumulator;
      }
    }, 0);
  }, [breakdown]);

  return (
    <div className="w-[265px] relative">
      {!isLastItem && (
        <div className="hidden xl:block absolute -right-[49px] -top-[15.9px] w-[1px] bg-berk-ash h-[400px]" />
      )}
      <div className="bg-grey pt-[29.06px] px-[24.95px] pb-[12.19px] rounded-t-[14.86px]">
        <h3 className="font-bold text-[20.51px] leading-[25.64px] text-berk-black mb-[3.48px]">
          {name}
        </h3>
        <ul>
          {breakdown.map((item, index) => (
            <li
              key={index}
              className={clsx(
                "flex items-center justify-between py-[13.25px]",
                {
                  "border-b-[0.85px] border-b-berk-blue":
                    index !== breakdown.length - 1,
                }
              )}
            >
              <span className="text-berk-black text-[13.67px] leading-[18.8px]">
                {item.name}
              </span>
              <span className="text-berk-black text-[13.67px] leading-[18.8px]">
                {item.cost ? `${item.cost}` : item.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-[24.95px] pb-[23.2px] pt-[15.38px] bg-berk-gradient flex items-center justify-between rounded-b-[14.86px]">
        <span className="text-[13.67px] leading-[17.09px] text-berk-white">
          Total Tuition
        </span>
        <span className="text-[13.67px] leading-[17.09px] text-berk-white">
          ${totalCost}
        </span>
      </div>
    </div>
  );
};

export default TuitionInfo;
