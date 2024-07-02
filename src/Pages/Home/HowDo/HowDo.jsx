import "./HowDo.css";
import dice from "../../../assets/dicetag.png";
const HowDo = () => {
  return (
    <div className="HowDoBg">
      <div className=" mx-auto ">
        <div className="how-do-it">
          <div className=" pt-[73px]">
            <h1 className="title-Text text-center  ">
              How do we <span className="text-[#EF4D48]">do</span> it?
            </h1>
            <img className="dice1" src={dice} alt="" />
          </div>
          <div className="cartAndHash flex">
            <div className="hash1">
              <img
                className=""
                src="https://i.ibb.co/3YM0sxP/image.png"
                alt=""
              />
            </div>

            <div className="all-cart">
              <div className="cart" id="cart1">
                <img src="https://i.ibb.co/B4rYc71/Number1-circle.png" alt="" />
                <p>
                  Our proprietary GDPR & CAN-Spam compliant software guesses the
                  email of pre-qualified prospects and uses AI to clean the data
                </p>
              </div>
              <div className="cart" id="cart1">
                <img src="https://i.ibb.co/yWQQd4v/Number2-circle.png" alt="" />
                <p>
                  Our proprietary GDPR & CAN-Spam compliant software guesses the
                  email of pre-qualified prospects and uses AI to clean the data
                </p>
              </div>
              <div className="cart" id="cart1">
                <img src="https://i.ibb.co/SsgMGZG/Number3-circle.png" alt="" />
                <p>
                  Our proprietary GDPR & CAN-Spam compliant software guesses the
                  email of pre-qualified prospects and uses AI to clean the data
                </p>
              </div>
            </div>
            <div className="hash2">
              <img
                className=""
                src="https://i.ibb.co/3YM0sxP/image.png"
                alt=""
              />
            </div>
          </div>
          <img className="dice2" src={dice} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowDo;
