import "./ServicesInfo.css";
import dice from "../../../assets/dicetag.png";
import { useEffect, useState } from "react";
import ServicesInfoPage from "../ServicesInfoPage/ServicesInfoPage";

const ServicesInfo = () => {
  const [servicesInfos, setServicesInfo] = useState([]);
  useEffect(() => {
    fetch("servicesInfo.json")
      .then((res) => res.json())
      .then((data) => setServicesInfo(data));
  }, []);
  return (
    <div className="bg-[#DCFFFE]">
      <div className="servicesInfoAllDiv">
        <img className="dice1" src={dice} alt="" />
        <div className="ml-[10%] mr-[10%] mx-auto">
          <div className="pb-72">
            <div className="grid grid-cols-4 servicesInfo">
              {servicesInfos.map((servicesInfo, index) => (
                <ServicesInfoPage
                  key={servicesInfo.id}
                  servicesInfo={servicesInfo}
                  index={index}
                ></ServicesInfoPage>
              ))}
            </div>
          </div>
        </div>
        <img className="dice2" src={dice} alt="" />
      </div>
    </div>
  );
};

export default ServicesInfo;
