import React from "react";
import "./Certificates.css";

// Sample certificate images
import Certificate1 from "../../assets/certificate1.png";
import Certificate2 from "../../assets/certificate2.png";

const certificateData = [
  {
    id: 1,
    image: Certificate1,
    title: "Figma Certificate",
  },
  {
    id: 2,
    image: Certificate2,
    title: "Android Development Certificate",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="portfolio">
      {" "}
      {/* Added 'portfolio' class */}
      <h5>My Certificates</h5>
      <h2>Certificates</h2>
      <div className="container portfolio__container certificates__container">
        {" "}
        {/* Added 'portfolio__container' class */}
        {certificateData.map(({ id, image, title }) => {
          return (
            <article key={id} className="portfolio__item certificate__item">
              {" "}
              {/* Added 'portfolio__item' class */}
              <div className="portfolio__item-image certificate__item-image">
                {" "}
                {/* Added 'portfolio__item-image' class */}
                <img src={image} alt="Certificate" />
              </div>
              <h3>{title}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Certificates;
