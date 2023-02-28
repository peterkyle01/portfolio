import "../styles/background.css"

function Background() {
  return (
    <section className="sect_two" id="background">
      <h1 className="sect_header">Background</h1>
      <div className="div_wrapper">
        <div className="text_box_two">
          <h1>Education</h1>
          <p>
            This is my education background from highschool to present.
          </p>
          <button>View Education</button>
        </div>
        <div className="image_view"></div>
      </div>
      <div className="div_wrapper sec_div_style">
        <div className="image_view"></div>
        <div className="text_box_two">
          <h1>Experience</h1>
          <p>
            What was my roles/responsibilities in my work experience.
          </p>
          <button>View Experience</button>
        </div>
      </div>
      <div className="div_wrapper">
        <div className="text_box_two">
          <h1>Skills/Activities</h1>
          <p>
            Skills that i developed and activities that i participated proactively.
          </p>
          <button>View Skills/Activities</button>
        </div>
        <div className="image_view"></div>
      </div>
    </section>
  );
}

export default Background