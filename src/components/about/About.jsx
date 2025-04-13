import React, { useState, useEffect } from "react";
import "./about.css";
import ME from "../../assets/me2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = ({ profession = 0 }) => {
  const [textAnimation, setTextAnimation] = useState(false);

  const professions = [
    {
      title: "Software Developer",
      description:
        "Hi, I'm Ashen Tennakoon, a passionate Software Developer with solid experience in building efficient and scalable applications. I specialize in both frontend and backend technologies, including JavaScript, React, Node.js, and various database systems. My approach combines clean code principles with problem-solving skills to create robust software solutions. I'm committed to staying current with emerging technologies and best practices in software development. I excel at translating business requirements into technical solutions and enjoy collaborating with cross-functional teams to deliver high-quality products. My experience includes developing web applications, RESTful APIs, and implementing complex business logic. I'm dedicated to writing maintainable, well-tested code that provides exceptional user experiences.",
    },
    {
      title: "Digital Marketer",
      description:
        "As a Digital Marketer, I leverage data-driven strategies to help brands connect with their target audience and achieve their marketing goals. My expertise spans across SEO, content marketing, social media management, email campaigns, and PPC advertising. I excel at analyzing marketing metrics to optimize campaigns and improve ROI. My approach combines creative content creation with analytical thinking to develop comprehensive marketing strategies. I stay current with the latest digital marketing trends and algorithm changes to ensure my strategies remain effective. I have experience working with various marketing tools and platforms, including Google Analytics, SEMrush, HubSpot, and social media management tools. I'm passionate about crafting compelling narratives that resonate with audiences and drive engagement.",
    },
    {
      title: "Game Developer",
      description:
        "As a Game Developer, I blend creativity with technical skills to create immersive and engaging gaming experiences. I have hands-on experience with game engines like Unity and Unreal, as well as programming languages such as C# and C++. My expertise includes game mechanics implementation, character controllers, physics systems, and UI/UX design for games. I'm passionate about optimizing performance to ensure smooth gameplay across different platforms and devices. I understand the importance of game feel and player experience, focusing on creating responsive controls and satisfying feedback systems. I enjoy collaborating with artists, designers, and other developers to bring game concepts to life. My problem-solving skills enable me to tackle complex technical challenges and implement innovative solutions.",
    },
    {
      title: "3D Developer",
      description:
        "As a 3D Developer, I specialize in creating realistic and visually stunning three-dimensional assets and environments. My skillset includes 3D modeling, texturing, lighting, and animation using tools like Blender, Maya, and ZBrush. I have experience integrating 3D elements into various platforms, including web applications, games, and AR/VR experiences. I pay close attention to detail, ensuring high-quality assets while maintaining optimal performance. I stay updated with the latest advancements in 3D technology, including real-time rendering techniques and procedural generation. My work combines technical expertise with artistic vision to create immersive visual experiences. I'm proficient in optimizing 3D assets for different platforms and have a strong understanding of shaders, materials, and lighting systems.",
    },
  ];

  // Safety check to ensure profession index is valid
  const safeIndex =
    profession >= 0 && profession < professions.length ? profession : 0;
  const currentProfession = professions[safeIndex];

  useEffect(() => {
    // Trigger animation when profession changes
    setTextAnimation(true);
    const timeout = setTimeout(() => {
      setTextAnimation(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [profession]);

  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image" className="about__me-image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Under-Graduate</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>4</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>

          <h3 className="profession__title">{currentProfession.title}</h3>

          <p className={`p__hover ${textAnimation ? "animate" : ""}`}>
            {currentProfession.description}
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
