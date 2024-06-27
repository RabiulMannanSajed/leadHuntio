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
      <div className="max-w-screen-xl mx-auto">
        <h1 className="title-Text">Our Exports are like no other</h1>
        <p className="text-details ">
          Linked Hacker is the world's #1 B2B lead generation and B2B email
          service. No one beats our stats.
        </p>

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
  );
};

export default Expert;
