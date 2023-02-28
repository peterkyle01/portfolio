import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <HashLink smooth to="/#home" end>
          Peter K.Mwangi
        </HashLink>
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
    </header>
  );
}

export default Navbar;
