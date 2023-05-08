import React from "react";
import clsx from "classnames";
import texts from "assets/styles/texts";
import { contact, programs, routes } from "utils/constants";
import { ReactComponent as BookAppointment } from "assets/images/book-appointment.svg";
import { ReactComponent as Programs } from "assets/images/programs.svg";
import { Link } from "react-router-dom";
import { setProgramsVisible } from "utils/functions";

const DesktopTopNav = () => {
  return (
    <div className="h-[63.7px] bg-berk-red pl-[126px] flex items-center justify-between">
      <a href={`tel:${contact.phone}`}>
        <h4 className={clsx(texts.berk_h4_regular, "text-white")}>
          Call us Now: {contact.phone}
        </h4>
      </a>
      <div className="bg-white w-[522px] pl-[11px] flex">
        <div className="relative">
          <Programs
            className="flex-shrink-0 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setProgramsVisible(true);
            }}
          />
          <div className="absolute left-0 top-0 w-[238px] bg-berk-red flex flex-col space-y-[6px] pb-1 desktop-program-links">
            {programs.map((program, index) => (
              <Link
                to={program.link}
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setProgramsVisible(false);
                }}
                className="h-[66px] flex items-center justify-center bg-berk-brown text-white leading-5 text-center"
              >
                {program.name}
              </Link>
            ))}
          </div>
        </div>
        <Link to={routes.book_appointment}>
          <BookAppointment className="flex-shrink-0 -translate-x-[11px]" />
        </Link>
      </div>
    </div>
  );
};

export default DesktopTopNav;
