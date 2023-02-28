import "../styles/home.css"
import Background from "./Background";

function Home() {
  return (
    <main className="home_wrapper">
      <section className="sect_one">
        <div className="text_box">
          <p className="p_one">Hello,my name is Peter <br/> K.Mwangi </p>
          <p className="p_two">Lorem ipsum dolor sit amet.</p>
          <div className="btn_wrapper">
            <button className="resume_btn">Resume</button>
            <button className="linkedIn_btn">LinkedIn</button>
          </div>
        </div>
        <div className="profile_pic_wrapper">
          <div className="profile_pic"></div>
        </div>
      </section>
      <Background/>
    </main>
  );
}

export default Home