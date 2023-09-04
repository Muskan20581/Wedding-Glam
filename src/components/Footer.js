import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";



import "../styles/Footer.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <Link to={{ pathname: "https://www.instagram.com/" }} target="_blank"> <InstagramIcon /> </Link>
      <Link to={{ pathname: "https://www.twitter.com/" }} target="_blank"><TwitterIcon /></Link>
      <Link to={{ pathname: "https://www.facebook.com/" }} target="_blank"> <FacebookIcon /> </Link>
      <Link to={{ pathname: "https://www.linkedin.com/" }} target="_blank"> <LinkedInIcon /></Link>
       
      </div>
      <p> &copy; 2023 weddingglam.com</p>
    </div>
  );
}

export default Footer;
