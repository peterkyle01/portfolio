import "../styles/home.css";
import "../styles/shared.css";

function About() {
  return (
    <div className="div_shared">
      <div className="div_wrapper ">
        <div className="text_box_two">
          <h1>About</h1>
          <p id="about_p_tag">
            Hi there! My name is Peter K.Mwangi  and I'm a Web Developer based
            in Nairobi. I have always been fascinated by how the internet works especially
            the web, which led me to pursue a career in Software Development 
            especially Web Development. I have one year of experience in Web Development 
            , working with clients from Nairobi mostly KCA University students and beyond school
            . Aside from my work, I
            love reading books, which keeps me inspired and
            motivated. I believe in the power of working smart,
            and I strive to apply it to both my personal and professional life.
            If you have any questions or would like to collaborate with me,
            please feel free to contact me. I'm excited to connect with you!
          </p>
        </div>
        <div className="image_view about" id="about_image_responsive"></div>
      </div>
    </div>
  );
}

export default About;
