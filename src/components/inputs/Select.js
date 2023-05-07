import React from "react";
import ReactSelect from "react-select";

const classNames = (hasError) => ({
  control: (state) =>
    `border-transparent py-0 px-0 !font-sans h-[66px] !shadow-none  ${
      hasError ? "!border-berk-red !border" : "!border-none"
    } bg-white !rounded-[10px] placeholder:opacity-80 !text-berk-trans text-base border-transparent border outline-none`,
  valueContainer: (state) => `!px-[21px] !text-berk-trans`,
  input: () => `!text-berk-trans`,
  container: () => `!rounded-[10px]`,
  placeholder: () => `!text-berk-trans/[.8]`,
  option: ({ isFocused, isSelected }) =>
    `${isFocused ? "!bg-berk-red/[.7] !text-white" : ""} ${
      isSelected ? "!bg-berk-red !text-white" : ""
    }`,
});

const Select = ({ options, hasError, onChange, placeholder }) => {
  return (
    <ReactSelect
      options={options}
      placeholder={placeholder}
      classNames={classNames(hasError)}
      className="berk-select"
      onChange={({ value }) => onChange(value)}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
    />
  );
};

export default Select;
