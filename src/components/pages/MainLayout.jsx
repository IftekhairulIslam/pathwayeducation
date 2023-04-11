import Aside from "./common/Aside";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Aside />
      <div className="wrapper reveal-side-navigation">
        <div className="wrapper-inner">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
