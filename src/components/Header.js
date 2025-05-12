import React from "react";
import "../styles/hero.css";

export default function Header() {
  return (
    <header className="hero">
      <img
        className="hero-bg"
        src="https://www.hotelplayamazatlan.com/media/uploads/cms_apps/imagenes/inner-restaurante-detalle-maza-nuev.jpg?q=pr:sharp/rs:fill/w:1920/h:700/g:ce/f:jpg"
        alt="Hero background"
      />
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-logo-row">
            <span className="hero-logo" role="img" aria-label="chef">🍍</span>
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