import React from "react";
import "../styles/hero.css";

export default function Header() {
  return (
    <header className="hero">
      <img
        className="hero-bg"
        src="https://www.sandos.com/sites/default/files/styles/12_5_1920/public/2024-02/Sandos%20Playacar%20Iztapalapa.jpg?h=6273b3ea&itok=IlYpkzo_"
        alt="Hero background"
      />
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-logo-container">
            <img src="https://i.ibb.co/Qj1bGbk/homechef-logo.png" alt="HomeChef" className="hero-logo" />
          </div>
          <h1 className="hero-title">
            Chefs<br />Academy<br />Secrets
          </h1>
        </div>
        <div className="hero-right">
          <div className="hero-note">
            <span className="hero-dot">●</span>
            New recipe for you to try out, let's cook!
          </div>
        </div>
      </div>
    </header>
  );
}