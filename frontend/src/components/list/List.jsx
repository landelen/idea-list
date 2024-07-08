import "./List.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

export function List({ selectedIdeas, onSelectCompleted }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(selectedIdeas.length, 3),
    slidesToScroll: 3,
  };

  useEffect(() => {
    localStorage.setItem("selectedIdeas", JSON.stringify(selectedIdeas));
  }, [selectedIdeas]);

  const handleClick = (challenge) => {
    onSelectCompleted(challenge);
  };

  return (
    <div className="mb-16">
      <h1 className="my-10 text-white font-bold text-3xl uppercase">
        Ideas in my list
      </h1>
      <Slider {...settings} className="mb-10">
        {selectedIdeas.map((idea, index) => (
          <div
            key={index}
            className="min-w-60 max-w-64 h-60 p-8 bg-customgray rounded-lg cursor-pointer shadow-md shadow-white transform transition-transform duration-300 hover:scale-90"
            onClick={() => handleClick(idea)}
          >
            <p className="font-bold uppercase mb-16 text-customgreen">
              {idea.type}
            </p>
            <p className="text-white text-sm">{idea.activity}</p>
          </div>
        ))}
      </Slider>
      <hr className="bg-white h-1" />
    </div>
  );
}
