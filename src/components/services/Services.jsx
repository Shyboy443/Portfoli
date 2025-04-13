import React, { useState, useEffect } from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

// Modified Services component to work with external profession state
const Services = ({
  profession = 0,
  professionTools = defaultProfessionTools,
}) => {
  const [textAnimation, setTextAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation when profession changes
    setTextAnimation(true);
    const timeout = setTimeout(() => {
      setTextAnimation(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [profession]);

  // Ensure profession index is valid
  const safeIndex = Math.min(
    Math.max(0, profession),
    professionTools.length - 1
  );
  const currentProfession = professionTools[safeIndex];

  return (
    <section id="services">
      <h5>What I Use</h5>
      <h2>Tools</h2>

      <div
        className={`container services__container ${
          textAnimation ? "animate" : ""
        }`}
      >
        {currentProfession.tools.map((toolCategory, index) => (
          <article className="service" key={index}>
            <div className="service__head">
              <h3>{toolCategory.category}</h3>
            </div>
            <ul className="service__list">
              {toolCategory.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <BiCheck className="service__list-icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

// Default profession tools that will be used if none are provided
const defaultProfessionTools = [
  {
    title: "Software Developer",
    tools: [
      {
        category: "Testing",
        items: ["Insomnia", "Postman", "Junit", "Jest"],
      },
      {
        category: "IDE",
        items: [
          "Visual Studio",
          "Eclipse",
          "Android Studio",
          "IntelliJ",
          "Dev C++",
          "VS Code",
        ],
      },
      {
        category: "Other",
        items: [
          "Figma",
          "Git",
          "GitHub",
          "Google Cloud",
          "MongoDB Compass",
          "Draw.io",
          "NPM/Yarn",
        ],
      },
    ],
  },
  {
    title: "Digital Marketer",
    tools: [
      {
        category: "Analytics",
        items: ["Google Analytics"],
      },
      {
        category: "Content Creation",
        items: [
          "Adobe Creative Suite",
          "Grammarly",

          "WordPress",
          "Google Docs",
        ],
      },
      {
        category: "Marketing Tools",
        items: ["Mailchimp", "Hootsuite", "Google Ads", "Facebook Ads Manager"],
      },
    ],
  },
  {
    title: "Game Developer",
    tools: [
      {
        category: "Game Engines",
        items: ["Unity", "Unreal Engine"],
      },
      {
        category: "3D Tools",
        items: ["Blender", "Maya", "Substance Painter", "3DS Max"],
      },
      {
        category: "Other",
        items: ["Git", "Visual Studio", "Photoshop", "GitHub"],
      },
    ],
  },
  {
    title: "3D Developer",
    tools: [
      {
        category: "3D Modeling",
        items: ["Blender", "Maya", "Substance Painter"],
      },
      {
        category: "Rendering",
        items: ["V-Ray", "Arnold", "Cycles"],
      },
      {
        category: "Other",
        items: [
          "After Effects",
          "Photoshop",
          "Illustrator",

          "Unreal Engine",
          "Unity",
        ],
      },
    ],
  },
];

export default Services;
