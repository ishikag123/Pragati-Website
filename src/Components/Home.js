import React from "react";
import "../Styles/Home.css";
import { HomeSlider } from "./HomeSlider";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <div className="intro">
        <h1>About Pragati</h1>
        <p>
          32 years back,a handful of spirited and impulsive young individuals,
          who were merely teenagers at the time, united and established PRAGATI
          (A GROUP THEATRE) in Liluah, driven by their profound adoration and
          fervent yearning for the theatrical arts. From that moment onward,
          their remarkable journey embarked, intertwined with the essence of
          theater, as their fiery passion blossomed and evolved alongside their
          maturing years.
        </p>
        <Link to="/about">Know more</Link>
      </div>
    </div>
  );
};
