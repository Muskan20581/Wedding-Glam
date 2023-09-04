import React from "react";
import contact from "../assets/contact_us.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "../styles/Contact.css";
import Chatbot from "./Chatbot";
import "../styles/chatbot.css";

function Contact() {
  const WhatsAppIcon = () => {
    const handleWhatsAppClick = () => {
      const phoneNumber = "+918427885585";
      const message = ' Hi! I want to enquire about Wedding Services provided by Wedding Glam.';
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };
    
    return (
      <div className="whatsapp-icon">
        <span style={{marginLeft:2,fontSize:30}}>Chat with us</span>
        <FontAwesomeIcon
          icon={faWhatsapp}
          onClick={handleWhatsAppClick}
          size="50x"
          style={{ color: 'green' ,fontSize:27}}
        />
      </div>
    );
  };
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contact})` }}
      ></div>
      <div className="rightSide">
        <h1 style={{marginLeft:20}}> Contact Us</h1> 
         <div style={{marginLeft:20}}>
         <WhatsAppIcon />
        <br />Contact Numbers<br />
        <br />+91-97816-00101 <br />
        <br />+91-93935-00002 <br />
        {/* <br />+91-97816-00101 [ Mr. Ankur Garg ]<br />
        <br />+91-93935-00002 [ Mr. Ankur Garg ]<br /> */}

        <br />E-mail
        <br />weddingglam@gmail.com<br />

        <br />Website<br />
http://www.weddingglam.com<br />
<br />
Registered Office Address<br />
Wedding Glam<br />
Vikas Nagar, Shaheed Bhagat Singh Nagar,
Ludhiana, Punjab 141013.<br />
Punjab (INDIA)<br />

Chandigarh Office<br />
Wedding Glam<br />
Indl Area, Elante Mall,
Chandigarh.

We are Offering service in following Cities<br />
Amritsar, Jalandhar, Ludhiana, Hoshiarpur, Ferozepur, Patiala, Moga, Chandigarh, Bathinda, Punjab
     </div> 
     </div>
    </div>
  );
}

export default Contact;
