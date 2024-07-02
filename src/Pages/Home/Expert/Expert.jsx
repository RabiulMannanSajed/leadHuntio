import { useEffect, useState } from "react";
import "./Expert.css";
import ExpretProfile from "../ExpretProfile/ExpretProfile";

const Expert = () => {
  const [expertImgs, setExpertImgs] = useState([]);
  useEffect(() => {
    fetch("expert.json")
      .then((res) => res.json())
      .then((data) => setExpertImgs(data));
  }, []);
  console.log("this is the img of the expert", expertImgs);
  return (
    <div className="expertBg">
      <div className="div-p-circle1"></div>
      <div className="mx-auto expert">
        <h1 className="title-Text text-center">
          Our <span className="text-[#EF4D48]">Exports</span> are like no other
        </h1>
        <p className="expert-details text-center mb-[8%]">
          Linked Hacker is the world's #1 B2B lead generation and B2B email{" "}
          <br />
          service. No one beats our stats.
        </p>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-5">
            {expertImgs.map((expertImg, index) => (
              <ExpretProfile
                key={expertImg.id}
                expertImg={expertImg}
                index={index}
              ></ExpretProfile>
            ))}
          </div>
        </div>
      </div>
      <div className="expert-circle2"></div>
    </div>
  );
};

export default Expert;
