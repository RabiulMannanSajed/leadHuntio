import "./Exports.css";
import export1 from "../../../assets/exportImg1.jpeg";
import export2 from "../../../assets/exortImg2.jpeg";
import export3 from "../../../assets/exportImg3.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
const Exports = () => {
  const images = [
    { src: { export1 }, alt: "Image 1" },
    { src: { export2 }, alt: "Image 2" },
    { src: { export3 }, alt: "Image 3" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="carousel">
      <div className="main-image">
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={index === currentIndex ? "active" : ""}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Exports;
