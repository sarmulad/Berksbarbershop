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

const hair = "Professional haircut service provided by our skilled barbers";
const wash =
  "Relaxing hair wash service that leaves your hair feeling refreshed and revitalized.";
const beard =
  "Expert beard trimming and outlining service that helps you maintain a clean and polished look.";
const towelShave =
  "Traditional hot towel shave service that provides a close, smooth shave and a soothing experience.";
const clipperShave =
  "Quick and efficient clipper shave service for those who prefer a no-fuss grooming option.";

export const serviceMenuList = [
  { title: "Haircut $10", description: hair },
  { title: "Hair Wash $5", description: wash },
  { title: "Beard Trim & Outline $5", description: beard },
  { title: "Hot Towel Shave $6", description: towelShave },
  { title: "Clipper Shave $4", description: clipperShave },
];
