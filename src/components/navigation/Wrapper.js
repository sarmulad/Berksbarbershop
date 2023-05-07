import React, { useEffect } from "react";
import clsx from "classnames";
import TopNav from "./TopNav";
import Footer from "./Footer";

const Wrapper = ({
  children,
  showTopNav = true,
  topNavType = "dark",
  className,
}) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className={className}>
      {showTopNav && <TopNav type={topNavType} />}
      <div
        className={clsx({
          "min-h-[calc(100vh_-_250.41px)] xl:min-h-[calc(100vh_-_273.1px)]":
            showTopNav,
          "min-h-[calc(100vh_-_149.41px)] xl:min-h-[calc(100vh_-_97.41px)]":
            !showTopNav,
        })}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Wrapper;
