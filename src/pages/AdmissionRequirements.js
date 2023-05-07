import { Wrapper } from "components/navigation";
import { PageHeader } from "components/utils";
import React from "react";

const AdmissionRequirements = () => {
  return (
    <Wrapper className="bg-berk-white">
      <div className="px-5 max-w-largest mx-auto">
        <PageHeader black_text={"Admissions"} gold_text={"Requirements"} />
        <div className="max-w-largest mx-auto pb-[76px] xl:pb-[167px]">
          <p className="mt-[53px] leading-6 text-berk-black ">
            Non US residents must submit either an alien registration card or a
            recognized Visa (I94), applicants must be beyond the compulsory
            school age, minimum of 16 years of age. A student qualifies if
            he/she provides one of the following:: - has a high school diploma
            (this can be from a foreign school if it is equivalent to a US High
            School diploma); - has the recognized equivalent of a high school
            diploma, such as a GED certificate, or other state sanctioned test
            or diploma-equivalency certificate; - provides a sealed or official
            transcript; - has completed homeschooling at the secondary level as
            defined by state law; or - has completed secondary school education
            in a home school setting which qualifies for an exemption from
            compulsory attendance requirements under state law, if state law
            does not require a home-schooled student to receive a credential for
            their education. Applicants must possess an understanding of the
            English language, which will be assessed during the entrance
            interview, they must sign a contract/ enrollment agreement with the
            school and obtain a class start date.
            <br />
            <br /> Berks Barber School will accept hours at other institutions
            provided that such are accepted by the State Board of Barbering.
            Tuition for transfer students is charged by the hour. Students are
            allowed to re-enter the program after they have withdrawn.
            <br />
            <br /> Registering Hours with the State Board of Barbering -
            Pennsylvania In order for Barber students to register hours with the
            State Licensing Board, they must submit the following documents:
            Proof of age-ID or driver&apos;s license and High School Diploma or
            GED.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default AdmissionRequirements;
