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
          padding: 20px;
          width: 900px;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-bottom: 40px;
        }
        .alert-text {
          color: #08837E;
          text-align: center;
          font-family: Poppins;
          font-size: 45px;
          font-style: normal;
          font-weight: 600;
          line-height: 120.09%;
        }
        .custom-alert-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .custom-alert-content img {
          width: 505px;
          height: 323px;
          margin-bottom: 54px;
        }
        .alert-details {
          color: #3F3F3F;
          font-family: Poppins;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 183%; /* 42.09px */
          text-transform: capitalize;
          text-align: center;
          margin-top: 20px;
          

        }
        .swal2-close {
          background-color: #53B2AF;
          width: 52px;
          height: 52px;
          border-radius: 5%;
          color: white;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
          .swal2-close:hover{
           background-color: #EF4D48;
          width: 52px;
          height: 52px;
          border-radius: 5%;
          color: white;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          }
      </style>
      <div class="custom-alert-content">
        <img src="${findInfo.insideImg}" alt="Service Image"/>
        <p class='alert-text'>${findInfo.title}</p>
        <p class='alert-details'>${findInfo.servicesDetails}</p>
      </div>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      showCancelButton: false,
      customClass: {
        popup: "alertDesign",
        closeButton: "swal2-close",
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
