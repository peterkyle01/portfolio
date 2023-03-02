import "../styles/home.css";
import Background from "./Background";

function Home() {
  return (
    <main className="home_wrapper" id="home">
      <section className="sect_one">
        <div className="text_box">
          <p className="p_one">
            Hello,my name is Peter <br /> K.Mwangi{" "}
          </p>
          <p className="p_two">Web Developer</p>
          <div className="btn_wrapper">
            <a
              href="https://www.linkedin.com/in/peter-mwangi-08a312265/"
              target="_blank">
              <button className="linkedIn_btn">LinkedIn</button>
            </a>
          </div>
        </div>
        <div className="profile_pic_wrapper">
          <div className="profile_pic"></div>
        </div>
      </section>
      <Background />
    </main>
  );
}

export default Home;
