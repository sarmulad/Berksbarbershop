import React from "react";
import clsx from "classnames";
import texts from "assets/styles/texts";

const PageHeader = ({ black_text, gold_text, background = "light" }) => {
  return (
    <h4
      className={clsx(
        texts.berk_h4_bold,
        " text-center mt-[9px]",
        { "text-berk-black": background === "light" },
        { "text-berk-white": background === "dark" }
      )}
    >
      {black_text} <span className="text-berk-brown">{gold_text}</span>
    </h4>
  );
};

export default PageHeader;
