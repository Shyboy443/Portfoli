import { useState, useEffect } from "react";
import "./App.css";
import Experience from "./components/experience/Experience";
import ProfessionSlider from "./components/header/ProfessionSlider";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contect/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  // Initialize profession state
  const [profession, setProfession] = useState(0);

  // Update theme colors based on profession
  useEffect(() => {
    // Define the CSS variable assignments based on profession index
    const updateThemeColors = () => {
      switch (profession) {
        case 0: // Software Developer - Blue (default)
          document.documentElement.style.setProperty(
            "--color-primary",
            "#4db5ff"
          );
          document.documentElement.style.setProperty(
            "--color-primary-variant",
            "rgba(77, 181, 255, 0.4)"
          );
          document.documentElement.style.setProperty("--color-bg", "#1f1f38");
          document.documentElement.style.setProperty(
            "--color-bg-variant",
            "#2c2c6c"
          );
          break;
        case 1: // Digital Marketer - Green
          document.documentElement.style.setProperty(
            "--color-primary",
            "var(--color-primary-green)"
          );
          document.documentElement.style.setProperty(
            "--color-primary-variant",
            "var(--color-primary-variant-green)"
          );
          document.documentElement.style.setProperty(
            "--color-bg",
            "var(--color-bg-green)"
          );
          document.documentElement.style.setProperty(
            "--color-bg-variant",
            "var(--color-bg-variant-green)"
          );
          break;
        case 2: // Game Developer - Purple
          document.documentElement.style.setProperty(
            "--color-primary",
            "var(--color-primary-purple)"
          );
          document.documentElement.style.setProperty(
            "--color-primary-variant",
            "var(--color-primary-variant-purple)"
          );
          document.documentElement.style.setProperty(
            "--color-bg",
            "var(--color-bg-purple)"
          );
          document.documentElement.style.setProperty(
            "--color-bg-variant",
            "var(--color-bg-variant-purple)"
          );
          break;
        case 3: // 3D Developer - Orange
          document.documentElement.style.setProperty(
            "--color-primary",
            "var(--color-primary-orange)"
          );
          document.documentElement.style.setProperty(
            "--color-primary-variant",
            "var(--color-primary-variant-orange)"
          );
          document.documentElement.style.setProperty(
            "--color-bg",
            "var(--color-bg-orange)"
          );
          document.documentElement.style.setProperty(
            "--color-bg-variant",
            "var(--color-bg-variant-orange)"
          );
          break;
        default:
          // Default to blue theme
          document.documentElement.style.setProperty(
            "--color-primary",
            "#4db5ff"
          );
          document.documentElement.style.setProperty(
            "--color-primary-variant",
            "rgba(77, 181, 255, 0.4)"
          );
          document.documentElement.style.setProperty("--color-bg", "#1f1f38");
          document.documentElement.style.setProperty(
            "--color-bg-variant",
            "#2c2c6c"
          );
      }
    };

    // Apply theme updates
    updateThemeColors();
  }, [profession]);

  // Function to update profession
  const handleProfessionChange = (newProfession) => {
    // Validate input
    if (
      typeof newProfession === "number" &&
      newProfession >= 0 &&
      newProfession <= 3
    ) {
      setProfession(newProfession);
    } else {
      console.warn("Invalid profession value:", newProfession);
    }
  };

  return (
    <div className="app">
      <Header profession={profession} setProfession={handleProfessionChange} />
      <Nav />
      <About profession={profession} />
      <Experience profession={profession} />
      <Services profession={profession} />
      <Portfolio profession={profession} />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
