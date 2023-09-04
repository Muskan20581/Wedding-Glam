import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import enquiry from "../assets/enquiry.jpg";
import "../styles/Contact.css";
import { useState } from "react";
import axios from 'axios'

function Enquiry() {
  
  const WhatsAppIcon = () => {
    const handleWhatsAppClick = () => {
      const phoneNumber = "+918427885585";
      const message =
        "Hi! I want to enquire about Wedding Services provided by Wedding Glam.";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    };
    
    return (
      <div className="whatsapp-icon">
        <span style={{ marginLeft: 27, fontSize: 30 }}>Chat with us</span>
        <FontAwesomeIcon
          icon={faWhatsapp}
          onClick={handleWhatsAppClick}
          size="50x"
          style={{ color: "green", fontSize: 27 }}
        />
      </div>
    );
  };
   
    //form states
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [message, setMessage]=useState('');
    const [address, setAddress]=useState('');
    const [contact_no, setContact_no]=useState('');
    //submit event
    const handleSubmit=(e)=>{
      e.preventDefault();
      // console.log(name,email,address,contact_no,message);
      const data={
        Name:name,
        Email:email,
        Address:address,
        Contact_no:contact_no,
        Message:message
      }
      axios.post('https://sheet.best/api/sheets/b17acdaa-b4f4-4dcc-9796-93ab233bd2fa',data).then((response)=>{})
      // console.log(response);
      setName('');
      setEmail('');
      setMessage('');
      setAddress('');
      setContact_no('');
    }
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${enquiry})` }}
      ></div>
      <div className="rightSide">
        <h1>Enquiry Form</h1>
        <WhatsAppIcon />

        <form id="contact-form" method="POST" onSubmit={handleSubmit} autoComplete="off" className="form-group" action="/wedplan">
          <label htmlFor="name">Full Name *</label>
          <input
            // name="name"
            placeholder="Enter full name..."
            type="text"
            required
            onChange={(e)=>setName(e.target.value)} value={name}
          />
          <label htmlFor="email">Email *</label>
          <input
            name="email"
            placeholder="Enter email..."
            type="email"
            required
            onChange={(e)=>setEmail(e.target.value)} value={email}
          />
          <label htmlFor="contact_no">Contact No. *</label>
          <input
            name="contact_no"
            placeholder="Enter Contact Details..."
            type="number"
            maxLength={10}
            required
            onChange={(e)=>setContact_no(e.target.value)} value={contact_no}
          />
          <label htmlFor="address">Address *</label>
          <input
            name="address"
            placeholder="Enter address..."
            type="text"
            required
            onChange={(e)=>setAddress(e.target.value)} value={address}
          />
          <label htmlFor="message">Your Enquiry/Query Details *</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            onChange={(e)=>setMessage(e.target.value)} value={message}
          ></textarea>
           <Link to="/menu">
          <button type="submit" className="btn-btn-primary" onSubmit={handleSubmit} >Submit</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Enquiry;