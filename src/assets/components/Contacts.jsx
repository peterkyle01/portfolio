import "../styles/home.css";
import "../styles/shared.css";
import "../styles/contacts.css";
import { FaSearchLocation, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contacts() {
  return (
    <div className="div_shared">
      <div className="div_wrapper " >
        <div className="text_box_two text_box_contacts_one">
          <h1>Contacts</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
            expedita dolores sunt nesciunt suscipit corporis perferendis optio?
            Perspiciatis cupiditate ea molestiae. Assumenda blanditiis ducimus
            quo soluta, magni sint vero quia labore architecto quod adipisci!
            Incidunt, eos. Vel odit sit laudantium?
          </p>
        </div>
        <div className="text_box_two text_box_contacts_two">
          <h1>Contact Information</h1>
          <span >
            <a href="https://goo.gl/maps/yLSg6CQzAzoa2RbU8" target={"_blank"}>
              <FaSearchLocation color="white" size={20} />
            </a>
            <p>KCA University,Nairobi,Kenya</p>
          </span>
          <span>
            <a href="tel:+25458685974" >
              <FaPhoneAlt color="white" size={20} />
            </a>
            <p>+254 58685974</p>
          </span>
          <span>
            <a href="mailto:kylepeterkoine4@gmail.com" >
              <MdEmail color="white" size={20} />
            </a>
            <p>kylepeterkoine4@gmail.com</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
