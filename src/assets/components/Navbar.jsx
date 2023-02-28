import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Peter M.Koine</div>
      <nav className="menu">
        <ul className="ul_navbar">
          <li className="li_navbar">
            <a href="#">Home</a>
          </li>
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
      </nav>
    </header>
  );
}

export default Navbar;
