import "./App.css";
import Aside from "./components/pages/common/Aside";
import Home from "./components/pages/home/Home";
import Header from "./components/pages/common/Header";
import Footer from "./components/pages/common/Footer";

function App() {
  return (
    <>
      <Aside />
      <div className="wrapper reveal-side-navigation">
        <div className="wrapper-inner">
          <Header />
          <Home />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
