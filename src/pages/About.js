import React from "react";
import wed1 from "../assets/about_us.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${wed1})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        <b><i>Wedding Glam</i></b> is a premium online wedding planning resource designed by a group of reputed wedding planners to inspire and support couples getting married in India and introduce them to the best wedding venues, most experienced vendors, latest trends and decor ideas to help them plan the wedding of their dreams.

We hope that <b><i>Wedding Glam</i></b> serves as a fun and exciting way to get acquainted with the latest trends in the wedding industry. If you’ve ever picked up a bridal magazine or searched the internet for wedding information and felt disheartened by what you didn’t find, well my friend you are in the right place! With years of experience in the wedding industry, we are best able to provide a platform to help couples with smart planning, practical guidance and quality wedding information. We will guide you in every step of the way to ensure you get the best in the wedding industry at the right price.
        </p>
      </div>
    </div>
  );
}

export default About;
