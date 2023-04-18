import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../components/pages/MainLayout";
import Home from "../components/pages/home/Home";
import About from "./../components/pages/about/About";
import Contact from "./../components/pages/contact/Contact";

const HandleRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default HandleRoutes;
