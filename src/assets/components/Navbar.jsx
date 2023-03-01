import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(true);

  return (
    <header className="navbar">
      <div className="logo">
        <HashLink smooth to="/#home">
          <span onClick={() => setMenu(true)}>Peter K.Mwangi</span>
        </HashLink>
        <div className="toggle_icon" onClick={() => setMenu(!menu)}>
          {menu ? <FaBars /> : <FaTimes />}
        </div>
      </div>
      <nav className="menu">
        <ul className="ul_navbar">
          <li className="li_navbar">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="li_navbar">
            <HashLink smooth to="/#background">
              Background
            </HashLink>
          </li>
          <li className="li_navbar">
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
      {menu ? (
        " "
      ) : (
        <nav className="menu_responsive">
          <ul className="ul_navbar_responsive">
            <li className="li_navbar_responsive" onClick={() => setMenu(true)}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="li_navbar_responsive" onClick={() => setMenu(true)}>
              <HashLink smooth to="/#background">
                Background
              </HashLink>
            </li>
            <li className="li_navbar_responsive" onClick={() => setMenu(true)}>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
