import {lazy,Suspense} from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";

const Home = lazy(()=> import("./components/Home"))
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

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
