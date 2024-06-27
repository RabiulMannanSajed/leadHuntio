import "./Pricing.css";
import tag1 from "../../../assets/tag3.png";
import rTag from "../../../assets/Rtag.png";
const Pricing = () => {
  return (
    <div className="bg-[#105858]">
      <div className=" mx-auto ">
        <div className="pricing  ">
          <div className="flex">
            <img src={tag1} alt="" />
            <img className="rTag" src={rTag} alt="" />
          </div>
          <div className="div-p-circle1"></div>
          <div className="p-allCart flex flex-col lg:flex-row z-10">
            <div className="p-cart">
              <h1 className="p-title">Basic</h1>
              <p className="p-description">
                Get 10 pre-qualified leads delivered to your inbox every week
              </p>
              <hr />
              <div className="p-services">
                <p className="p-description">500 emails sent each week</p>
                <p className="p-description">GDPR & CAN-Spam compliant</p>
                <p className="p-description">100% Pre-Qualified Leads</p>
                <p className="p-description">Delivered to your email inbox</p>
                <p className="p-description">Paid weekly</p>
              </div>
              <h1 className="p-price">
                $349 <span className="p-description">/week</span>
              </h1>
              <div className="p-button">
                <button>BOOK A DEMO</button>
              </div>
            </div>
            <div className="p-cart">
              <h1 className="p-title">Standard</h1>
              <p className="p-description">
                Get 10 pre-qualified leads delivered to your inbox every week
              </p>
              <hr />
              <div className="p-services">
                <p className="p-description">500 emails sent each week</p>
                <p className="p-description">GDPR & CAN-Spam compliant</p>
                <p className="p-description">100% Pre-Qualified Leads</p>
                <p className="p-description">Delivered to your email inbox</p>
                <p className="p-description">Paid weekly</p>
              </div>
              <h1 className="p-price">
                $349 <span className="p-description">/week</span>
              </h1>
              <div className="p-button">
                <button>BOOK A DEMO</button>
              </div>
            </div>
            <div className="p-cart">
              <h1 className="p-title">Premium</h1>
              <p className="p-description">
                Get 10 pre-qualified leads delivered to your inbox every week
              </p>
              <hr />
              <div className="p-services">
                <p className="p-description">500 emails sent each week</p>
                <p className="p-description">GDPR & CAN-Spam compliant</p>
                <p className="p-description">100% Pre-Qualified Leads</p>
                <p className="p-description">Delivered to your email inbox</p>
                <p className="p-description">Paid weekly</p>
              </div>
              <h1 className="p-price">
                $349 <span className="p-description">/week</span>
              </h1>
              <div className="p-button">
                <button>BOOK A DEMO</button>
              </div>
            </div>
          </div>
          <div className="div-p-circle2"></div>
          <div className="flex">
            <img className="rTag2" src={rTag} alt="" />
            <img className="tag1" src={tag1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
