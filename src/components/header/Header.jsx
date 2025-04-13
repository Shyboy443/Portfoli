import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import ProfessionSlider from "./ProfessionSlider";

const Header = ({
  profession = 0,
  setProfession = () => console.warn("setProfession not provided to Header"),
}) => {
  // Define the professions data
  const professions = [
    {
      title: "Software Developer",
      typewriterText: "Software Developer",
    },
    {
      title: "Digital Marketer",
      typewriterText: "Digital Marketer",
    },
    {
      title: "Game Developer",
      typewriterText: "Game Developer",
    },
    {
      title: "3D Developer",
      typewriterText: "3D Developer",
    },
  ];

  // Get the list of typewriter words
  const typewriterWords = professions.map((prof) => prof.typewriterText);

  // Ensure setProfession is a function
  const handleSetProfession = (index) => {
    if (typeof setProfession === "function") {
      setProfession(index);
    } else {
      console.warn("setProfession is not a function in Header");
    }
  };

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ashen Tennakoon</h1>
        <h5 className="text-light">
          <Typewriter
            words={typewriterWords}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h5>

        <p className="profession-hint">
          Explore my journey through different worlds
        </p>

        <ProfessionSlider
          profession={profession}
          setProfession={handleSetProfession}
          professions={professions}
        />

        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
