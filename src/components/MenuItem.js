import { Style } from "@material-ui/icons";
import React from "react";
import {Link} from "react-router-dom";


function MenuItem({ image, name }) {
  return (
    // <a href="enquiry.js" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none',color:'palevioletred (' }} >
    <Link to="/enquiry" style={{ textDecoration: 'none',color:'palevioletred' }}><div className="menuItem">
      <div style={{ backgroundImage: `url(${image})`}}> </div>
      <h1 style={{ fontSize:27,marginTop:10}}> {name} </h1>
      </div>
      {/* </a> */}
      </Link>
    
  );
}

export default MenuItem;
