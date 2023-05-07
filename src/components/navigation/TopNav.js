import React, { useEffect, useState } from "react";
import clsx from "classnames";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { ReactComponent as Hamburger } from "assets/icons/hamburger.svg";
import { ReactComponent as Exit } from "assets/icons/exit.svg";
import { routes, programs } from "utils/constants";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as Dropdown } from "assets/icons/dropdown.svg";
import { ReactComponent as HamburgerWhite } from "assets/icons/hamburger-light.svg";
import { ReactComponent as LogoWhite } from "assets/icons/logo-white.svg";
import DesktopTopNav from "./DesktopTopNav";
import { ReactComponent as LargeLogo } from "assets/icons/logo-large.svg";
import { ReactComponent as LargeLogoWhite } from "assets/icons/logo-white-large.svg";

const links = [
  { name: "Home", link: routes.home },
  { name: "About", link: routes.about },
  { name: "Tuition", link: `${routes.home}#tuition`, isHash: true },
  { name: "Gallery", link: `${routes.home}#gallery`, isHash: true },
  { name: "Courses", link: `${routes.home}#courses`, isHash: true },
  { name: "Programs", isPrograms: true },
  { name: "Book an Appointment", link: routes.book_appointment },
  { name: "Service Menu", link: routes.service_menu },
  { name: "Contact us", link: routes.contact_us },
  { name: "Admission Requirements", link: routes.admission_requirements },
];

const desktopLinks = [
  { name: "About", link: routes.about },
  { name: "Tuition", link: `${routes.home}#tuition`, isHash: true },
  { name: "Gallery", link: `${routes.home}#gallery`, isHash: true },
  { name: "Courses", link: `${routes.home}#courses`, isHash: true },
  { name: "Service Menu", link: routes.service_menu },
  { name: "Contact us", link: routes.contact_us },
  { name: "Admission Requirements", link: routes.admission_requirements },
];

const ProgramsButton = ({ visible }) => {
  const [programsVisible, setProgramsVisible] = useState(false);

  useEffect(() => {
    if (programsVisible && !visible) {
      setProgramsVisible(false);
    }
  }, [visible, programsVisible]);

  return (
    <div>
      <button
        className="flex items-center space-x-2"
        onClick={(e) => {
          e.stopPropagation();
          setProgramsVisible(!programsVisible);
        }}
      >
        <span className="text-base leading-6 text-berk-white">Programs</span>
        <Dropdown />
      </button>
      <ul
        className={clsx(
          "max-h-[220px] pt-[10px] flex flex-col space-y-[6px] transition-all duration-150",
          {
            "!max-h-0 overflow-hidden !pt-0": !programsVisible,
          }
        )}
      >
        {programs.map((program, index) => (
          <Link
            className="bg-berk-brown h-[66px] rounded-[20px] w-[238px] flex items-center justify-center text-white leading-6 text-base"
            to={program.link}
            key={index}
          >
            {program.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

const MobileNavigation = ({ visible, onClose }) => {
  return (
    <div
      className={clsx(
        "bg-gradient-to-r transition-all right-[-200px] duration-150 opacity-0 pointer-events-none max-h-[calc(100vh_-_70px)] overflow-y-auto fixed z-[10]  top-[35px] from-berk-dark-from to-berk-dark-to rounded-[20px] py-[47px] pl-10 pr-[32.07px]",
        { "opacity-100 pointer-events-auto !right-[20.67px]": visible }
      )}
    >
      <Exit
        className="absolute top-[50px] right-[31.72px] cursor-pointer"
        onClick={onClose}
      />
      <ul className="flex flex-col space-y-[34px]">
        {links.map((link, index) => (
          <li key={index} onClick={onClose}>
            {link.isPrograms ? (
              <ProgramsButton visible={visible} />
            ) : link.isHash ? (
              <HashLink
                to={link.link}
                className="text-berk-white leading-6 text-base"
              >
                {link.name}
              </HashLink>
            ) : (
              <Link
                className="text-berk-white leading-6 text-base"
                to={link.link}
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TopNav = ({ type }) => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const desktopLinksLeft = desktopLinks.slice(0, 4);
  const desktopLinksRight = desktopLinks.slice(4);
  return (
    <div>
      <div className="hidden xl:block">
        <DesktopTopNav />
        <div className="pt-[14px] flex justify-center items-center">
          <ul className="space-x-[50px] flex items-center w-[501px] justify-end">
            {desktopLinksLeft.map((link, index) => (
              <li key={index}>
                {link.isHash ? (
                  <HashLink
                    to={link.link}
                    className={clsx("text-berk-black leading-6 text-[18px]", {
                      "!text-berk-white": type === "light",
                    })}
                  >
                    {link.name}
                  </HashLink>
                ) : (
                  <Link
                    className={clsx("text-berk-black leading-6 text-[18px]", {
                      "!text-berk-white": type === "light",
                    })}
                    to={link.link}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link to={routes.home} className="flex-shrink-0 mx-[102px]">
            {type === "light" ? (
              <LargeLogoWhite />
            ) : (
              <LargeLogo title="Berks" />
            )}
          </Link>
          <ul className="space-x-[50px] flex items-center w-[501px] justify-start">
            {desktopLinksRight.map((link, index) => (
              <li key={index}>
                {link.isHash ? (
                  <HashLink
                    to={link.link}
                    className={clsx("text-berk-black leading-6 text-[18px]", {
                      "!text-berk-white": type === "light",
                    })}
                  >
                    {link.name}
                  </HashLink>
                ) : (
                  <Link
                    className={clsx("text-berk-black leading-6 text-[18px]", {
                      "!text-berk-white": type === "light",
                    })}
                    to={link.link}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="xl:hidden pt-[35px] flex items-center justify-between pr-[20.67px]">
        <Link to={routes.home}>
          {type === "dark" ? (
            <Logo title="Berks" className="cursor-pointer" />
          ) : (
            <LogoWhite title="Berks" className="cursor-pointer" />
          )}
        </Link>
        {type === "dark" ? (
          <Hamburger
            title="Navigation"
            className="cursor-pointer mt-[-1px]"
            onClick={() => setMobileNavVisible(true)}
          />
        ) : (
          <HamburgerWhite
            title="Navigation"
            className="cursor-pointer mt-[-1px]"
            onClick={() => setMobileNavVisible(true)}
          />
        )}
        <MobileNavigation
          visible={mobileNavVisible}
          onClose={() => setMobileNavVisible(false)}
        />
      </div>
    </div>
  );
};

export default TopNav;
