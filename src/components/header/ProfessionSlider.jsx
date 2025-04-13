import React from "react";
import "./ProfessionSlider.css";

const ProfessionSlider = ({
  profession = 0,
  setProfession = () => console.warn("setProfession function not provided"),
  professions = [],
}) => {
  // Default professions data if none is provided
  const defaultProfessions = [
    { title: "Software Developer" },
    { title: "Digital Marketer" },
    { title: "Game Developer" },
    { title: "3D Developer" },
  ];

  // Use provided professions or default if not available
  const professionData =
    professions.length > 0 ? professions : defaultProfessions;

  const handleSliderChange = (e) => {
    try {
      if (typeof setProfession === "function") {
        setProfession(parseInt(e.target.value));
      } else {
        console.warn("setProfession is not a function");
      }
    } catch (error) {
      console.error("Error in handleSliderChange:", error);
    }
  };

  const handleProfessionClick = (index) => {
    try {
      if (typeof setProfession === "function") {
        setProfession(index);
      } else {
        console.warn("setProfession is not a function");
      }
    } catch (error) {
      console.error("Error in handleProfessionClick:", error);
    }
  };

  // Safety check to ensure profession index is valid
  const currentProfession = professionData[profession] || professionData[0];

  return (
    <div className="profession__slider">
      <h3 className="profession__title">{currentProfession.title}</h3>
      <div className="slider__container">
        <input
          type="range"
          min="0"
          max={professionData.length - 1}
          value={profession}
          onChange={handleSliderChange}
          className="slider"
        />
        <div className="slider__markers">
          {professionData.map((_, index) => (
            <span
              key={index}
              className={`slider__marker ${
                index <= profession ? "active" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className="profession__labels">
        {professionData.map((prof, index) => (
          <span
            key={index}
            className={`profession__label ${
              index === profession ? "active" : ""
            }`}
            onClick={() => handleProfessionClick(index)}
          >
            {prof.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProfessionSlider;
