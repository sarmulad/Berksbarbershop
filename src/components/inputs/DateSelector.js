import React from "react";
import clsx from "classnames";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DateSelector = ({
  placeholder,
  hasError,
  value,
  onChange,
  ref_,
  ...rest
}) => {
  return (
    <DatePicker
      selected={value}
      className={clsx(
        { "border-berk-red": hasError },
        "py-5 px-[21px] w-full bg-white rounded-[10px] placeholder:opacity-80 text-berk-trans text-base border-transparent border outline-none"
      )}
      ref={ref_}
      onChange={(date) => onChange(date)}
      placeholderText={placeholder}
      {...rest}
    />
  );
};

export default DateSelector;
