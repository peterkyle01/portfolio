import "./App.css";
import Navbar from "./assets/components/Navbar";
import { Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Contacts from "./assets/components/Contacts";
import Footer from "./assets/components/Footer";
import Education from "./assets/components/Education";
import Experience from "./assets/components/Experience";
import Skills from "./assets/components/Skills";


function App() {
  return (
    <>
      <Navbar />
      <SlideRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
      </SlideRoutes>
      <Footer />
    </>
  );
}

export default App;
