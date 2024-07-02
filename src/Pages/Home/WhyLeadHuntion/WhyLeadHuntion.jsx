import "./WhyLeadHuntion.css";
import CTag from "../../../assets/Ctag.png";
const WhyLeadHuntion = () => {
  return (
    <div className="bg-[#213939]">
      <img src={CTag} alt="" />
      <section className="why-leadhuntio text-center">
        <div className="why-leadhuntio-div">
          <h1 className="title-Text">
            <span className="text-[#EF4D48]">How</span> do we
            <span className="text-[#EF4D48]">do</span> it?
          </h1>
          <p className="text-details">
            Linked Hacker is the world's #1 B2B lead generation and B2B email
            <br />
            service. No one beats our stats.
          </p>

          <div className="why-cart-all">
            <div className="why-cart">
              <img src="https://i.ibb.co/ZxpWwYY/Email.png" alt="" />
              <h1 className="why-title">10+ Million Emails Sent</h1>
              <p className="why-discription">
                We have sent over 1 million cold emails, with world-beating
                stats: Average open rate: 65% Average click-through rate: 10%
                Average reply rate: 10%
              </p>
            </div>
            <div className="why-cart">
              <img src="https://i.ibb.co/fvzp469/Increase.png" alt="" />
              <h1 className="why-title">10+ Million Emails Sent</h1>
              <p className="why-discription">
                We have sent over 1 million cold emails, with world-beating
                stats: Average open rate: 65% Average click-through rate: 10%
                Average reply rate: 10%
              </p>
            </div>
            <div className="why-cart">
              <img src="https://i.ibb.co/ZxpWwYY/Email.png" alt="" />
              <h1 className="why-title">10+ Million Emails Sent</h1>
              <p className="why-discription">
                We have sent over 1 million cold emails, with world-beating
                stats: Average open rate: 65% Average click-through rate: 10%
                Average reply rate: 10%
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
      <img className="CTag" src={CTag} alt="" />
    </div>
  );
};

export default WhyLeadHuntion;
