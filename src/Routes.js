import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "utils/constants";
import {
  Home,
  About,
  ServiceMenu,
  AdmissionRequirements,
  ContactUs,
  BookAppointment,
  BarberProgram,
  BarberTeacherProgram,
  CrossOverProgram,
} from "pages";

const BerkRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.service_menu} element={<ServiceMenu />} />
        <Route path={routes.book_appointment} element={<BookAppointment />} />
        <Route path={routes.contact_us} element={<ContactUs />} />
        <Route path={routes.programs.barber} element={<BarberProgram />} />
        <Route
          path={routes.programs.barber_teacher}
          element={<BarberTeacherProgram />}
        />
        <Route
          path={routes.programs.crossover}
          element={<CrossOverProgram />}
        />
        <Route
          path={routes.admission_requirements}
          element={<AdmissionRequirements />}
        />
      </Routes>
    </Router>
  );
};

export default BerkRoutes;
