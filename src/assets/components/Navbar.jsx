import { Route, Routes } from "react-router";
import "../styles/navbar.css"
import "./About"
import "./Background"
import "./Contacts"

function Navbar() {
  return (
    <div className="navbar">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/background" element={<Background />} />
        <Route path="/contacts" element={<Contacts />} />
        <div className="logo">Peter M.Koine</div>
        <div className="menu">
          <ul className="ul_navbar">
            <li className="li_navbar">
              <a href="#">About</a>
            </li>
            <li className="li_navbar">
              <a href="#">Background</a>
            </li>
            <li className="li_navbar">
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>
      </Routes>
    </div>
  );
}

export default Navbar