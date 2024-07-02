import "./Contact.css";
import contactImg from "../../../assets/Business partnership.png";
import contactCircle from "../../../assets/contactCircle.png";
import contactTag from "../../../assets/leadhCTag.png";
import contactLine from "../../../assets/contactline.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="bgContact">
      <div className="ml-[9%] mr-[9%] mx-auto">
        <div className="flex">
          <div className=" mr-20 flex-1">
            <img className="contactCircle1" src={contactCircle} alt="" />
            <img className="contactImg" src={contactImg} alt="" />
            <img className="contactTag" src={contactTag} alt="" />
            <img className="contactCircle2" src={contactCircle} alt="" />
          </div>
          <div className="flex-1">
            <h1 className="uppercase title-Text mb-8">
              <span className="text-[#EF4D48]">Contact</span> Us
            </h1>
            <form action="">
              <div className="inputField">
                <label htmlFor="">Full name</label>
                <input type="text" placeholder="Enter your Full Name " />
              </div>
              <div className="inputField">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter service name" />
              </div>
              <div className="inputField">
                <label htmlFor="">Message</label>
                <textarea
                  type="text"
                  placeholder="Type Your message here... "
                />
              </div>
              <button className="uppercase contactBtn">Submit</button>
            </form>

            <h1 className="getTitle">Get In Touch</h1>

            <div className="flex">
              <img src={contactLine} className="mr-1" alt="" />
              <div>
                <div className="flex mb-7 items-center">
                  <FaLocationDot className="text-3xl text-[#088984] mr-3" />
                  <h1 className="contactText">
                    71-75 Shelton Street, Covent Garden, London, United Kingdom,
                    WC2H 9JQ
                  </h1>
                </div>
                <div className="flex mb-7 items-center">
                  <MdEmail className="text-3xl text-[#088984] mr-3" />
                  <h1 className="contactText">contact@leadhuntio.com</h1>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="text-3xl text-[#088984] mr-3" />
                  <h1 className="contactText">+165045707551</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
