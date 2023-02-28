import './App.css'
import Navbar from './assets/components/Navbar'
import { Route, Routes } from "react-router-dom";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Background from "./assets/components/Background";
import Contacts from "./assets/components/Contacts";
import Footer from './assets/components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/background" element={<Background />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App
