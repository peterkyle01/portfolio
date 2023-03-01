import "../styles/home.css";
import "../styles/shared.css";
import "../styles/contacts.css";
import { FaSearchLocation, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import {FiPhoneCall} from "react-icons/fi"

function Contacts() {
  return (
    <div className="div_shared">
      <div className="div_wrapper ">
        <div className="text_box_two text_box_contacts_one">
          <h1>Send Me A Message</h1>
          <label className="name_label">
            Name
            <input type="text" autoFocus className="name_input" />
          </label>
          <label className="email_label">
            Email
            <input type="email" className="email_input" />
          </label>
          <label className="textarea_label">
            Message
            <textarea type="text" className="textarea_input" />
          </label>
          <div>
            <MdSend id="icon_send" color="#4876eb" size={30} />
            <a href="tel:+25458685974">
              <FiPhoneCall id="icon_call" color="#4876eb" size={25} />
            </a>
          </div>
        </div>
        <div className="text_box_two text_box_contacts_two">
          <h1>Contact Information</h1>
          <span>
            <a href="https://goo.gl/maps/yLSg6CQzAzoa2RbU8" target={"_blank"}>
              <FaSearchLocation color="white" size={20} />
            </a>
            <p>KCA University,Nairobi,Kenya</p>
          </span>
          <span>
            <a href="tel:+25458685974">
              <FaPhoneAlt color="white" size={20} />
            </a>
            <p>+254 58685974</p>
          </span>
          <span>
            <a href="mailto:kylepeterkoine4@gmail.com">
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
