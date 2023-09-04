import React from "react";
import { Link } from "react-router-dom";
import BannerImg from "../assets/back-1.jpg";
import "../styles/Home.css";
import { colors } from "@material-ui/core";
import Chatbot from "./Chatbot";
import "../styles/chatbot.css"; 

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImg})` }}>
      <div className="headerContainer">
        <h1 style={{ color: "white",fontSize:60,marginBottom:20}}> Wedding Glam </h1>
        <p style={{ color: "white" }}>
          {" "}
          You dreamm it! We help you achieve it{" "}
        </p>
        <Link to="/menu">
          <button> Book Now </button>
        </Link>
        <Chatbot/>
      </div>
    </div>
  );
}

export default Home;
