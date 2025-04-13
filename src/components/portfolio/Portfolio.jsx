import "./portfolio.css";
import PIC1 from "../../assets/p1.png";
import PIC2 from "../../assets/p2.png";
import PIC3 from "../../assets/p3.png";
import PIC4 from "../../assets/p4.png";
import PIC5 from "../../assets/p5.png";
import BEHANCE_PIC from "../../assets/behance.png";
import DigitalPic1 from "../../assets/digitalmark1.png";
import DigitalPic2 from "../../assets/digitalmark2.png";
import ImageProc from "../../assets/imageproccessing.png";
import FacecialRocg from "../../assets/emotionrecog.png";
import Racinggame from "../../assets/racinggame.jpg";
import Islandgame from "../../assets/islandgame.png";
// Portfolio data categorized by profession
const portfolioData = {
  // Software Developer Projects
  softwareDeveloper: [
    {
      id: 1,
      image: PIC5,
      title: "GPTLK Digital Store-React and Node-js",
      github: "",
      demo: "https://www.gptlk.shop/",
    },
    {
      id: 5,
      image: PIC1,
      title: "Mern Task App - React and Node-js",
      github: "https://github.com/Shyboy443/testmern",
      demo: "",
    },
    {
      id: 2,
      image: PIC2,
      title: "Inventory Management System React and Node-js",
      github: "https://github.com/Shyboy443/ShyApp-frontend.git",
      demo: "",
    },

    {
      id: 3,
      image: PIC3,
      title: "FarmLink - Agiricultural Marketplace React and Node-js",
      github: "https://github.com/Shyboy443/FarmLink",
      demo: "",
    },
    {
      id: 6,
      image: ImageProc,
      title: "Image Processing tool using Python and React js",
      github: "https://github.com/Shyboy443/Image-Processing-Site",
      demo: "",
    },
    {
      id: 7,
      image: FacecialRocg,
      title: "Facial Emotions Detector using Machine Learning",
      github: "https://github.com/Shyboy443/Image-Processing-Site",
      demo: "",
    },
  ],
  // Digital Marketer Projects
  digitalMarketer: [
    {
      id: 1,
      image: DigitalPic1, // Add appropriate image for GPTLK project
      title: "GPTLK Digital Marketing Campaign",
      github: "",
      demo: "https://web.facebook.com/GPTLK?_rdc=1&_rdr", // Link to the Facebook page
    },
    {
      id: 2,
      image: DigitalPic2, // Add appropriate image for Dilani Beauty Academy project
      title: "Dilani Beauty Academy Marketing Strategy",
      github: "",
      demo: "https://web.facebook.com/DilaniBeautyacademy/?_rdc=1&_rdr", // Link to the Facebook page
    },
  ],
  // Game Developer Projects
  gameDeveloper: [
    {
      id: 4,
      image: PIC4,
      title: "Fishy Catch Frenzy Mobile Game Using Android Studio",
      github: "https://github.com/Shyboy443/SpaceShooterGame-Kotlin.git",
      demo: "https://drive.google.com/file/d/1OcSo2-3hZ12YWcNuRvrtMJuSDVK-834m/view?usp=drive_link",
    },
    {
      id: 3,
      image: Racinggame,
      title: "Racing Horizon Car Game Using Unreal Engine",
      github: "",
      demo: "https://mysliit-my.sharepoint.com/personal/it22582560_my_sliit_lk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fit22582560%5Fmy%5Fsliit%5Flk%2FDocuments%2FIM%2F3rd%20Year%201st%20Sem%2FGT&ga=1",
    },
    {
      id: 2,
      image: Islandgame,
      title: "Escape Island Game Using Unity",
      github: "",
      demo: "https://drive.google.com/drive/folders/1uZ3_G0c8RHwzv1wn5VJx4i0v4uRXV5ni?usp=sharing",
    },
  ],
  // 3D Developer Projects - Added Behance portfolio
  threeDDeveloper: [
    {
      id: 6,
      image: BEHANCE_PIC,
      title: "3D Design Portfolio",
      github: "", // No GitHub link for Behance portfolio
      demo: "https://www.behance.net/ashensemithu", // Behance portfolio link
    },
  ],
};

const Portfolio = ({ profession }) => {
  // Determine the category of projects to show based on the profession prop
  const professionKey =
    Object.keys(portfolioData)[profession] || "softwareDeveloper";
  const currentPortfolioData = portfolioData[professionKey] || [];

  // Check if current profession is digital marketing or 3D developer
  const hideGithubButton =
    professionKey === "digitalMarketer" || professionKey === "threeDDeveloper";

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {currentPortfolioData.length > 0 ? (
          currentPortfolioData.map(({ id, image, title, github, demo }) => (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {!hideGithubButton &&
                  (github ? (
                    <a
                      href={github}
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  ) : (
                    <button className="btn" disabled>
                      No Github
                    </button>
                  ))}
                {demo ? (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                ) : (
                  <button className="btn btn-primary" disabled>
                    Unavailable
                  </button>
                )}
              </div>
            </article>
          ))
        ) : (
          <p>
            No projects available for this profession yet. Check back later!
          </p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
