import "./FAQBanner.css";

const FAQBanner = () => {
  return (
    <div className="FAQBgImg pt-[190px] pb-[149px] text-center">
      <h1 className="title-Text">
        Frequently Asked <br /> Qustion
      </h1>
      <p className="text-details pt-[17px] pb-[20px]">
        10 pre-qualified leads per week for 100$
      </p>
      <p className="text-details pb-[40px] ">
        <span className="text-[#00F9CC]">Team</span>
      </p>
      <button className="btn-rounded-color mr-5">BOOK A DEMO</button>
      <button className="btn-rounded">BOOK A DEMO</button>
    </div>
  );
};

export default FAQBanner;
