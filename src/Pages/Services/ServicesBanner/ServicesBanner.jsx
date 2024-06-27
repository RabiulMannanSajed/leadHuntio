import "./ServicesBanner.css";
import servicesBanner from "../../../assets/businessman-explaining-the-strategy 1.png";
const ServicesBanner = () => {
  return (
    <div className="bg-[#213939] pt-[160px] pb-[180px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex">
          <div className="flex-1">
            <h1 className="title-Text">Handled by Experts in the Field</h1>
            <p className="text-details">
              10 pre-qualified leads per week for 100$
            </p>
            <p className="text-details pb-[40px] ">
              <span className="text-[#00F9CC]">Service</span>
            </p>
            <button className="btn-rounded-color mr-5">BOOK A DEMO</button>
            <button className="btn-rounded">BOOK A DEMO</button>
          </div>
          <div className="flex-1">
            <img src={servicesBanner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
