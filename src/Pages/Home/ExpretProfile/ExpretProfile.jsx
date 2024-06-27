import React from "react";

const ExpretProfile = ({ expertImg, index }) => {
  const { img } = expertImg;
  return (
    <div>
      {index % 2 ? (
        <div className="mt-9 productHover">
          <img
            className="h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"
            src={img}
            alt=""
          />
        </div>
      ) : (
        <div className="productHover">
          <img
            className=" rounded flex h-full items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"
            src={img}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default ExpretProfile;
