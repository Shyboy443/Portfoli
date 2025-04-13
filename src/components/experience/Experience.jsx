import React, { useState, useEffect } from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

// Modified Experience component to work with external profession state
const Experience = ({
  profession = 0,
  professionSkills = defaultProfessionSkills,
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
    professionSkills.length - 1
  );
  const currentProfession = professionSkills[safeIndex];

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div
        className={`container experience__container ${
          textAnimation ? "animate" : ""
        }`}
      >
        <div className="experience__frontend">
          <h3>{currentProfession.frontendTitle}</h3>
          <div className="experience__content">
            {currentProfession.frontend.map((skill, index) => (
              <article key={index} className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>{currentProfession.backendTitle}</h3>
          <div className="experience__content">
            {currentProfession.backend.map((skill, index) => (
              <article key={index} className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Default profession skills that will be used if none are provided
const defaultProfessionSkills = [
  {
    title: "Software Developer",
    frontendTitle: "Frontend Development",
    backendTitle: "Backend Development",
    frontend: [
      { name: "HTML", level: "Experienced" },
      { name: "JavaScript", level: "Experienced" },
      { name: "React", level: "Experienced" },
      { name: "BootStrap", level: "Experienced" },
      { name: "Tailwind", level: "Basic" },
    ],
    backend: [
      { name: "MongoDB", level: "Experienced" },
      { name: "PHP", level: "Basic" },
      { name: "MySQL", level: "Basic" },
      { name: "Python", level: "Experienced" },
      { name: "Java", level: "Experienced" },
      { name: "C", level: "Experienced" },
      { name: "C++", level: "Experienced" },
      { name: "Kotlin", level: "Basic" },
    ],
  },
  {
    title: "Digital Marketer",
    frontendTitle: "Marketing Channels",
    backendTitle: "Tools & Analytics",
    frontend: [
      { name: "SEO", level: "Basic" },
      { name: "Content Creation", level: "Experienced" },
      { name: "Social Media", level: "Experienced" },
      { name: "Email Marketing", level: "Intermediate" },
      { name: "UI/UX Design", level: "Basic" },
    ],
    backend: [
      { name: "Google Analytics", level: "Experienced" },

      { name: "WordPress", level: "Experienced" },
    ],
  },
  {
    title: "Game Developer",
    frontendTitle: "Game Engines & UI",
    backendTitle: "Programming & Systems",
    frontend: [
      { name: "Unity", level: "Experienced" },
      { name: "Unreal Engine", level: "Intermediate" },
      { name: "UI Design", level: "Intermediate" },
      { name: "3D Modeling", level: "Basic" },
    ],
    backend: [
      { name: "C#", level: "Experienced" },
      { name: "C++", level: "Experienced" },
      { name: "Game Physics", level: "Intermediate" },
    ],
  },
  {
    title: "3D Developer",
    frontendTitle: "3D Software & Tools",
    backendTitle: "3D Techniques",
    frontend: [
      { name: "Blender", level: "Experienced" },
      { name: "Maya", level: "Intermediate" },
      { name: "Substance Painter", level: "Intermediate" },
    ],
    backend: [
      { name: "3D Modeling", level: "Experienced" },
      { name: "Texturing", level: "Experienced" },
      { name: "Lighting", level: "Intermediate" },
      { name: "Animation", level: "Intermediate" },
      { name: "Rigging", level: "Basic" },
      { name: "Rendering", level: "Experienced" },
      { name: "VFX", level: "Basic" },
    ],
  },
];

export default Experience;
