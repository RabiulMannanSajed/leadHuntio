import Swal from "sweetalert2";
import "./ServicesInfoPage.css";
import { useEffect, useState } from "react";
const ServicesInfoPage = ({ servicesInfo, index }) => {
  const { id, img, insideImg, title, servicesDetails } = servicesInfo;
  const [servicesInfos, setServicesInfos] = useState([]);
  useEffect(() => {
    fetch("servicesInfo.json")
      .then((res) => res.json())
      .then((data) => setServicesInfos(data));
  }, []);

  const handleClick = (id) => {
    console.log(id, servicesDetails, insideImg);
    const findInfo = servicesInfos.find(
      (servicesInfo) => servicesInfo.id === id
    );
    //  this is the alert part
    Swal.fire({
      html: `
      <style>
        .alertDesign {
          border-radius: 13px;
          background: rgba(190, 237, 237, 0.92);
          padding: 20px;width: 900px;
height: 1000px;
        }
        .alert-text {
          color: #08837E;
text-align: center;
font-family: Poppins;
font-size: 27px;
font-style: normal;
font-weight: 600;
line-height: 120.09%
        }
        .custom-alert-content img {
          width: 605px;
          height: 423px;

        }
      </style>
      <div class=" custom-alert-content">
      <img src="${findInfo.insideImg}" alt="Service Image"/>
      <p class='alert-text'>${findInfo.title}</p>
        <p>${findInfo.servicesDetails}</p>
      </div>
    `,
      showCloseButton: true,
      showConfirmButton: false,
      showCancelButton: false,
      customClass: {
        popup: "alertDesign",
      },
    });
  };
  return (
    <div>
      {index % 2 ? (
        <div className="bg-[#D0E7F1] p-4">
          <img className="servicesImg" src={img} alt="" />
          <p className="servicesInfoTitle"> {title}</p>
          <p className="servicesInfoDetails">{servicesDetails.slice(0, 150)}</p>
          <button
            className="servicesInfoBtn servicesInfoBtnText"
            onClick={() => handleClick(id)}
          >
            See More
          </button>
        </div>
      ) : (
        <div className="bg-[#FFFFFF] p-4">
          <img className="servicesImg" src={img} alt="" />
          <p className="servicesInfoTitle"> {title}</p>{" "}
          <p className="servicesInfoDetails">{servicesDetails.slice(0, 150)}</p>
          <button
            className="servicesInfoBtn servicesInfoBtnText"
            onClick={() => handleClick(id, servicesDetails, insideImg)}
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default ServicesInfoPage;
