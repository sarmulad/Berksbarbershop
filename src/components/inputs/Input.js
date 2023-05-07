import React from "react";
import clsx from "classnames";

const Input = ({
  onChange,
  ref_,
  value,
  hasError,
  placeholder,
  className,
  isTextArea,
  ...rest
}) => {
  if (isTextArea) {
    return (
      <textarea
        className={clsx(
          "py-5 px-[21px] h-[191px] bg-white rounded-[10px] placeholder:opacity-80 text-berk-trans text-base border-transparent border outline-none",
          { "!border-berk-red": hasError },
          className
        )}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref_}
        value={value}
        {...rest}
      />
    );
  }

  return (
    <input
      className={clsx(
        "py-5 px-[21px] bg-white rounded-[10px] placeholder:opacity-80 text-berk-trans text-base border-transparent border outline-none",
        { "!border-berk-red": hasError },
        className
      )}
      onChange={onChange}
      placeholder={placeholder}
      ref={ref_}
      value={value}
      {...rest}
    />
  );
};

export default Input;
