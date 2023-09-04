import React from "react";
import { GalleryList } from "../helpers/GalleryList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { Style } from "@material-ui/icons";


function Gallery() {
  return (                                                                                      
    <div className="menu">
      <h1 className="menuTitle">Client Diaries</h1>
      <div className="menuList">
        {GalleryList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              // price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;