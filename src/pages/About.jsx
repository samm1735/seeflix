import "./about.css";

import { Film, Globe, Users } from "lucide-react";

const About = () => {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="overlay">
          <h1>About us</h1>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <div className="mission-container">
          <div className="mission-image">
            <img src="/illustration.png" alt="Illustration from figma" />
          </div>

          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              We are a next generation streaming platform built to bring your
              favorite movies, shows and live events together in one place.
            </p>
            <p>
              Our mission is to connect creators and audiences through
              high-quality, ad-free entertainment - anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <h2>Our Values</h2>

        <div className="values-container">
          <div className="values-list">
            <div className="value-item">
                <Film size={22} />
                <p>Quality Content</p>
            </div>

            <div className="value-item">
                <Globe size={22} />
                <p>Global Access</p>
            </div>

            <div className="value-item">
                <Users size={22} />
                <p>Community & Creativity</p>
            </div>
          </div>

          <div className="values-image">
            {/* Placeholder */}
            <img src="/undraw_online.svg" alt="Illustration from undraw" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;