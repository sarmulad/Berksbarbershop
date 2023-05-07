export const routes = {
  home: "/",
  about: "/about",
  service_menu: "/service-menu",
  admission_requirements: "/admission-requirements",
  book_appointment: "/book-appointment",
  contact_us: "/contact-us",
  programs: {
    barber: "/programs/barber",
    crossover: "/programs/crossover",
    barber_teacher: "/programs/barber-teacher",
  },
};

export const contact = {
  phone: "4845095103",
  location:
    "https://www.google.com/maps/place/432+Schuylkill+Ave,+Reading,+PA+19601,+USA/@40.3419376,-75.9385332,17z/data=!3m1!4b1!4m6!3m5!1s0x89c6772c46865a01:0x7d562d56eea5d788!8m2!3d40.3419376!4d-75.9385332!16s%2Fg%2F11c1_fqtms",
};

export const programs = [
  { name: "BARBER PROGRAMS", link: routes.programs.barber },
  { name: "CROSSOVER PROGRAMS", link: routes.programs.crossover },
  { name: "BARBER TEACHER PROGRAMS", link: routes.programs.barber_teacher },
];

const dummy =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor";

export const serviceMenuList = [
  { title: "Haircut $10", description: dummy },
  { title: "Hair Wash $5", description: dummy },
  { title: "Beard Trim & Outline $5", description: dummy },
  { title: "Hot Towel Shave $6", description: dummy },
  { title: "Clipper Shave $4", description: dummy },
];
