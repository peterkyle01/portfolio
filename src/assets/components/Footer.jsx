import "../styles/footer.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import {MdEmail} from "react-icons/md"

function Footer() {
  return (
    <footer className="footer">
      <div className="icons">
        <FaGithubSquare size={"2rem"} />
        <FaLinkedin size={"2rem"} />
        <MdEmail size={"2.2rem"} />
      </div>
      <div className="copyright">
        <p>Peter K.Mwangi 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
