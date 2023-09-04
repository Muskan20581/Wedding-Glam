import React from "react";
import { DestinationList, DestinationList2, DestinationList3, DestinationList4 } from "../helpers/DestinationList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import Chatbot from "./Chatbot";
import "../styles/chatbot.css"; 

function Destination_wedding() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Indian Destinations</h1>
      <div className="menuList">
        {DestinationList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              
            />
          );
        })}
      </div>
      <h1 className="menuTitle">MiddleEast Destinations</h1>
      <div className="menuList">
        {DestinationList2.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              
            />
          );
        })}
      </div>
      <h1 className="menuTitle">Eurpoean Destinations</h1>
      <div className="menuList">
        {DestinationList3.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              
            />
          );
        })}
      </div>
      <h1 className="menuTitle">Asian Destinations</h1>
      <div className="menuList">
        {DestinationList4.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              
            />
          );
        })}
     
      </div>
    
    </div>
    
)}


export default Destination_wedding;

