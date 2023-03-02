import "../styles/background.css"
import { Link } from "react-router-dom";

function Background() {
  return (
    <section className="sect_two" id="background">
      <h1 className="sect_header">Background</h1>
      <div className="div_wrapper">
        <div className="text_box_two">
          <h1>Education</h1>
          <p>This is my education background from highschool to present.</p>
          <Link to="/education">
            <button>View Education</button>
          </Link>
        </div>
        <div className="image_view" id="education"></div>
      </div>
      <div className="div_wrapper sec_div_style">
        <div className="image_view" id="experience"></div>
        <div className="text_box_two">
          <h1>Experience</h1>
          <p>What was my roles/responsibilities in my work experience.</p>
          <Link to="/experience">
            <button>View Experience</button>
          </Link>
        </div>
      </div>
      <div className="div_wrapper">
        <div className="text_box_two">
          <h1>Skills</h1>
          <p>
            Skills that i developed and activities that i participated
            proactively.
          </p>
          <Link to="/skills">
            <button>View Skills</button>
          </Link>
        </div>
        <div className="image_view" id="skills"></div>
      </div>
    </section>
  );
}

export default Background