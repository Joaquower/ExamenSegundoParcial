import React from "react";
import "../styles/hero.css";

export default function Header() {
  return (
    <header className="hero">
      <img
        className="hero-bg"
        src="https://assets.anantara.com/image/upload/q_auto,f_auto,c_limit,w_1920/media/minor/anantara/images/anantara-siam-hotel/experience/details-page/luxury-dinner-cruise/anantara_siam_experiences_luxurydinnercruise_header_1920x600.jpg"
        alt="Hero background"
      />
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-logo-row">
            <img src="https://cdn-icons-png.flaticon.com/512/450/450166.png" alt="HomeChef" className="hero-logo" />
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