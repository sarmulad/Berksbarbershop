import React from "react";
import { ReactComponent as LogoWhite } from "assets/icons/logo-white.svg";
import { ReactComponent as Phone } from "assets/icons/phone.svg";
import { contact } from "utils/constants";

const Footer = () => {
  return (
    <div>
      <div className="hidden xl:flex h-[97.41px] bg-berk-grey items-center space-x-[212px] justify-center">
        <a
          href={`tel:${contact.phone}`}
          className="flex items-center space-x-[3.5px] justify-center w-[208px]"
        >
          <Phone />
          <span className="text-[13px] leading-6 text-white">
            Call us Now: {contact.phone}
          </span>
        </a>
        <LogoWhite />
        <a
          className="text-center text-white text-[13px] leading-6 w-[208px]"
          href={contact.location}
          rel="noreferrer"
        >
          432 Schuylkill Ave Reading PA 19601
        </a>
      </div>
      <div className="xl:hidden pt-[15px] pb-[23.59px] flex flex-col space-y-[6.83px] items-center justify-center bg-berk-grey">
        <div className="flex flex-col items-center justify-center">
          <LogoWhite />
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center space-x-[3.5px] justify-center"
          >
            <Phone />
            <span className="text-[13px] leading-6 text-white">
              Call us Now: {contact.phone}
            </span>
          </a>
        </div>
        <a
          className="text-center text-white text-[13px] leading-6"
          href={contact.location}
          rel="noreferrer"
        >
          432 Schuylkill Ave Reading PA 19601
        </a>
      </div>
    </div>
  );
};

export default Footer;
