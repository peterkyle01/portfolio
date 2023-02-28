import "../styles/footer.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import {MdEmail} from "react-icons/md"

function Footer() {
  return (
    <footer className="footer">
      <div className="icons">
        <a href="https://github.com/peterkyle01" target="_blank">
          <FaGithubSquare size={"2rem"} color="#4876eb" />
        </a>
        <a
          href="https://www.linkedin.com/in/peter-mwangi-08a312265/"
          target="_blank">
          <FaLinkedin size={"2rem"} color="#4876eb" />
        </a>
        <a href="mailto:kylepeterkoine4@gmail.com">
          <MdEmail size={"2.2rem"} color="#4876eb" />
        </a>
      </div>
      <div className="copyright">
        <p>Peter K.Mwangi 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
