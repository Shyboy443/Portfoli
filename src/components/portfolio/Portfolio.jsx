import "./portfolio.css";
import PIC1 from "../../assets/p1.png";
import PIC2 from "../../assets/p2.png";
import PIC3 from "../../assets/p3.png";
import PIC4 from "../../assets/p4.png";

const data = [
  {
    id: 1,
    image: PIC1,
    title: "Mern Task App",
    github: "https://github.com/Shyboy443/testmern",
    demo: "https://marn-task-app.onrender.com",
  },
  {
    id: 2,
    image: PIC2,
    title: "Inventory Management System",
    github: "https://github.com/Shyboy443/ShyApp-frontend.git",
    demo: "",
  },
  {
    id: 3,
    image: PIC3,
    title: "FarmLink Agricultural Market Place",
    github: "https://github.com/Shyboy443/FarmLink.git",
    demo: "",
  },
  {
    id: 4,
    image: PIC4,
    title: "Fishy Catch Frenzy Mobile Game",
    github: "https://github.com/Shyboy443/SpaceShooterGame-Kotlin.git",
    demo: "https://drive.google.com/file/d/1OcSo2-3hZ12YWcNuRvrtMJuSDVK-834m/view?usp=drive_link",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="Task App" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                {demo ? (
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                ) : (
                  <button className="btn btn-primary" disabled>
                    Unavailable
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
