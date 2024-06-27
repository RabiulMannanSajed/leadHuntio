import { useEffect, useState } from "react";
import "./Review.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Review = () => {
  //  take the value then show there img after clik then show the details
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const [imgContent, setImgContent] = useState(2);
  const imgData = (data) => {
    setImgContent(data);
  };
  const [count, setCount] = useState(2);
  const goToNext = () => {
    if (count < reviews.length) {
      setCount(count + 1);
      setImgContent(count + 1);
    }
  };
  console.log("this is after next", count);
  const goToPrev = () => {
    if (count > 1) {
      setCount(count - 1);
      setImgContent(count - 1);
    }
  };

  const findData = reviews.find((review) => review.id === imgContent);

  return (
    <div className="bg-[#FFFDFD] pt-20 pb-28">
      {/*  this is for the color */}
      <div className="max-w-screen-xl mx-auto">
        {/*this is for the space    */}
        <div className="flex">
          {/* this is for img and text this 1 review  */}
          <div className="flex-1 review">
            {findData === undefined ? (
              <>
                <h1>
                  <progress className="progress w-56"></progress>
                </h1>
              </>
            ) : (
              <>
                {/* here data is img and the info  */}
                <div className="flex">
                  <div className="imgDataBg">
                    {/* here is the another img of qutaion */}

                    <img className="imgOfTheDiv" src={findData.img} alt="" />
                  </div>
                  <div className="reviewPartText">
                    <h1 className="subtext-details leading-5 mb-5">
                      <span className="text-[#6B6B6B]">{findData.review}</span>
                    </h1>
                    <p className="reviewClientName">{findData.name}</p>
                    <p className="subtext-details">
                      <span className="text-[#6B6B6B]">
                        {findData.position}
                      </span>
                    </p>
                  </div>
                </div>
              </>
            )}
            <button className="reviewBtn mr-7" onClick={() => goToPrev()}>
              <FaArrowLeftLong className="arrow" />
            </button>
            <button className="reviewBtn" onClick={() => goToNext()}>
              <FaArrowRightLong className="arrow" />
            </button>
          </div>

          {/*  this is for client img   */}
          <div className="flex-1">
            <div className="grid grid-cols-3">
              {reviews.map((review) => (
                <div key={review.id}>
                  <img
                    className={`imgCss img-${review.id}`}
                    src={review.img}
                    alt=""
                    onClick={() => imgData(review.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
