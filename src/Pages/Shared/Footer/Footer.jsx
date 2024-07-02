import "./Footer.css";
import pipeline from "../../../assets/pipelineimg.png";
import footerLogo from "../../../assets/logoImg.png";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
const Footer = () => {
  return (
    <div className="footerBg  ">
      <div>
        <div className="footerPipeline mb-[15%]">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="footerInnerTitle-Text ">
                Fill Your Sales Pipeline With <br /> Pre-Qualified Leads
              </h1>
              <p className="text-details pt-[17px] pb-[17px]">
                Want to see the secrets to using B2B email to generate leads?{" "}
                <br />
                Schedule a demo with one of our team today.
              </p>
              <div className="flex items-center  pb-[32px]">
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar placeholder">
                    <div className="w-12 bg-[#008F89] text-neutral-content">
                      <span>2000+</span>
                    </div>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="subtext-details ">
                    Join over 2,000+ clients and book a demo today
                  </p>
                </div>
              </div>
              <button className="footerBtn"> BOOK A DEMO</button>
            </div>
            <div>
              <img className="w-96" src={pipeline} alt="" />
            </div>
          </div>
        </div>
        <div className="max-w-5xl">
          {/*  this is for footer navbar  */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <img src={footerLogo} alt="" />
            </div>
            <div className="flex-1">
              <ul className="flex text-white  justify-between">
                <li className="footerNavbar">Service</li>
                <li className="footerNavbar">work</li>
                <li className="footerNavbar"> About Us</li>
                <li className="footerNavbar">Contact Us</li>
              </ul>
            </div>
          </div>{" "}
        </div>
        <hr className="mt-5" />
        {/* this is for the footer item  */}
        <div className="flex text-white justify-between items-end">
          {/* footer nav section */}

          <div>
            <p className="mb-7">Digital experience reimagined.</p>
            {/*  this is all the imgds */}
            <div className="flex mb-20">
              <FaLinkedin className="linkDesign" />
              <FaFacebookSquare className="linkDesign" />
              <TiSocialInstagram className="linkDesign" />
              <FaGithubSquare className="linkDesign" />
            </div>
            <div className="footerText1">
              <p>© Copyright 2023</p>
              <p>Linked Hacker Ltd</p>
              <p>Company number: 11304471</p>
            </div>
          </div>
          {/*  this is for the another text  */}
          <div>
            <h1>Privacy Policy Terms of Service</h1>
            <h1>39-41 Fore Street, Newquay, Cornwall, UK, TR7 1HD</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
