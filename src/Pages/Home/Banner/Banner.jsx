import "./Banner.css";
import homeBanner from "../../../assets/homebanner.png";
import line from "../../../assets/Line.png";
import star1 from "../../../assets/Star 1.png";
import star2 from "../../../assets/Star 2.png";
const Banner = () => {
  return (
    <div className=" bg-[#213939] pt-[9%] ">
      <div className="  ">
        {" "}
        <img className="star2" src={star2} alt="" />
        <div className="flex justify-around">
          <div className="flex">
            <div>
              <img className="bannerLine" src={line} alt="" />
            </div>
            <div>
              {/* <img className="bannerLine" src={line} alt="" /> */}
              <h1 className="title-Text">
                <span className="text-[#EF4D48]">Pre-Qualified</span> Leads{" "}
                <br /> Delivered To Your Inbox
              </h1>
              <p className="text-details text-2xl mb-[10%] mt-5">
                10 pre-qualified leads per week for 100$
              </p>
              {/*  this is all avatar */}
              <div className="flex items-center">
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                  <div className="avatar">
                    <p className="hoverName">THis is the name</p>
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

              <div className="flex mt-8">
                <button className="btn-rounded-color mr-6">BOOK A DEMO</button>
                <button className="btn-rounded ">BOOK A DEMO</button>
              </div>
            </div>
          </div>
          {/*  this is for img */}
          <div className="">
            <img src={homeBanner} alt="" />
          </div>
        </div>
        <div className="banner-color-pattern1"></div>
        <img className="star1" src={star1} alt="" />
      </div>
    </div>
  );
};

export default Banner;
