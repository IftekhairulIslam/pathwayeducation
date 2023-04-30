import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../components/pages/MainLayout";
import Home from "../components/pages/home/Home";
import About from "./../components/pages/about/About";
import Contact from "./../components/pages/contact/Contact";
import Admission from "./../components/pages/admission/Admission";
import Australia from "../components/pages/admission/Australia";
import London from "../components/pages/admission/London";
import USA from "../components/pages/admission/USA";
import Coaching from "./../components/pages/coaching/Coaching";
import IELTS from "./../components/pages/coaching/IELTS";
import PTE from "./../components/pages/coaching/PTE";
import English from "./../components/pages/coaching/English";
import Japanese from "./../components/pages/coaching/Japanese";
import Migration from "./../components/pages/migration/Migration";
import Visas from "./../components/pages/migration/Visas";
import Travels from "./../components/pages/travels/Travels";
import OtherServices from "./../components/pages/other-services/OtherServices";
import Canada from "./../components/pages/admission/Canada";

const HandleRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>

          <Route path="admission" element={<Admission />}></Route>
          <Route path="admission-australia" element={<Australia />}></Route>
          <Route path="admission-london" element={<London />}></Route>
          <Route path="admission-canada" element={<Canada />}></Route>
          <Route path="admission-usa" element={<USA />}></Route>

          <Route path="migration" element={<Migration />}></Route>
          <Route path="visas" element={<Visas />}></Route>

          <Route path="coaching" element={<Coaching />}></Route>
          <Route path="coaching-ielts" element={<IELTS />}></Route>
          <Route path="coaching-pte" element={<PTE />}></Route>
          <Route path="coaching-english" element={<English />}></Route>
          <Route path="coaching-japanese" element={<Japanese />}></Route>

          <Route path="travels" element={<Travels />}></Route>
          <Route path="other-services" element={<OtherServices />}></Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default HandleRoutes;
