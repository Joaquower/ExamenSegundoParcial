import React from "react";
import "../styles/hero.css";

export default function Header() {
  return (
    <header className="hero">
      <img
        className="hero-bg"
        src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg"
        alt="Hero background"
      />
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-logo-row">
            <img src="https://i.imgur.com/8XoA1bI.png" alt="HomeChef" className="hero-logo" />
            <span className="hero-brand">HomeChef</span>
          </div>
          <h1 className="hero-title">
            Chefs<br />Academy<br />Secrets
          </h1>
        </div>
        <div className="hero-right">
          <span className="hero-note">● New recipe for you to try out, let's cook!</span>
        </div>
      </div>
    </header>
  );
}