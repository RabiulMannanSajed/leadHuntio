import "./FAQTimeline.css";
import arrow from "../../../assets/Arrow.png";
const FAQTimeline = () => {
  return (
    <div className="bg-[#DCFFFE] ">
      <h1 className="innerTitle-Text text-center pt-[6%]">
        <span className="text-black">FA</span>
        <span className="text-[#EF4D48]">Q</span>
      </h1>
      <p className="subtext-details text-center pb-[3%]">
        <span className="text-[#6A6A6A]">
          Linked Hacker is the world's #1 B2B lead generation and B2B Email{" "}
          <br />
          service. No one beats our stats.
        </span>
      </p>
      <div className="p-[4%]">
        <div className="point-item">
          <p className="point-title">
            {" "}
            <samp className="innerTextDetails text-[#08837E]">
              Project Requirement
            </samp>
          </p>
          <div className="point-details text-details ">
            <span className="text-[#6A6A6A]">
              Migrating from a different platform? Updating the existing Shopify
              Site? Or creating a brand new site from scratch? Depending on
              this, we will be gathering the requirements from you. This will
              give us a clear idea as to what would be the best and most
              cost-effective approach for you to take
            </span>
          </div>
        </div>
        <div className="point-itemRight">
          <p className="point-titleRight">
            <samp className="innerTextDetails text-[#EF4D48]">
              Project Requirement
            </samp>
          </p>
          <div className="point-detailsRight text-details ">
            <span className="text-[#6A6A6A]">
              Migrating from a different platform? Updating the existing Shopify
              Site? Or creating a brand new site from scratch? Depending on
              this, we will be gathering the requirements from you. This will
              give us a clear idea as to what would be the best and most
              cost-effective approach for you to take
            </span>
          </div>
        </div>
        <div className="point-item">
          <p className="point-title">
            {" "}
            <samp className="innerTextDetails text-[#08837E]">
              Project Requirement
            </samp>
          </p>
          <div className="point-details text-details ">
            <span className="text-[#6A6A6A]">
              Migrating from a different platform? Updating the existing Shopify
              Site? Or creating a brand new site from scratch? Depending on
              this, we will be gathering the requirements from you. This will
              give us a clear idea as to what would be the best and most
              cost-effective approach for you to take
            </span>
          </div>
        </div>
        <div className="point-itemRight">
          <p className="point-titleRight">
            {" "}
            <samp className="innerTextDetails text-[#EF4D48]">
              Project Requirement
            </samp>
          </p>
          <div className="point-detailsRight text-details ">
            <span className="text-[#6A6A6A]">
              Migrating from a different platform? Updating the existing Shopify
              Site? Or creating a brand new site from scratch? Depending on
              this, we will be gathering the requirements from you. This will
              give us a clear idea as to what would be the best and most
              cost-effective approach for you to take
            </span>
          </div>
        </div>
        <img className="arrow" src={arrow} alt="" />
      </div>
    </div>
  );
};

export default FAQTimeline;
