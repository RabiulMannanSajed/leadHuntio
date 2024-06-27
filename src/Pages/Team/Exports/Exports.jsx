import "./Exports.css";
import export1 from "../../../assets/exportImg1.jpeg";
import export2 from "../../../assets/exortImg2.jpeg";
import export3 from "../../../assets/exportImg3.jpeg";
import exportimg from "../../../assets/exportimg.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Exports = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={export1} />
        </div>
        <div>
          <img src={export2} />
        </div>
        <div>
          <img src={export3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Exports;
