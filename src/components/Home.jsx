import {lazy, Suspense} from 'react'
import "../styles/home.css";
import Spinner from './Spinner';
const Background = lazy(() => import("./Background"));


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
              aria-label="Linkedin"
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
      <Suspense fallback={<Spinner/>}>
        <Background />
      </Suspense>
    </main>
  );
}

export default Home;
