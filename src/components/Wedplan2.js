import React, { useState } from "react";
import wed_planner1 from "../assets/wed-planner1.jpg";
import wed_planner2 from "../assets/wed-planner2.jpg";
import wed_planner3 from "../assets/wed-planner3.jpg";
import wed_planner4 from "../assets/wed-planner4.jpg";
import "../styles/Wedplan.css";
import { CenterFocusStrong } from "@material-ui/icons";
import shadows from "@material-ui/core/styles/shadows";
import enquiry from "../pages/Enquiry";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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

const weddingPlanners = [
  { id: 1, name: "Wedding Bells", budget: 50000, image: wed_planner3 },
  { id: 2, name: "Wed & Wed", budget: 70000, image: wed_planner2 },
  // { id: 3, name: 'Planner C', budget: 100000, image: wed_planner3 },
  // { id: 4, name: 'Planner D', budget: 120000, image: wed_planner4 },
  { id: 5, name: "Dream Weddings", budget: 55000, image: wed_planner4 },
  // { id: 6, name: 'Planner F', budget: 80000, image: wed_planner1 },
  // { id: 7, name: 'Planner G', budget: 170000, image: wed_planner1 },
  // { id: 8, name: 'Planner H', budget: 190000, image: wed_planner1 },
];

const WeddingPlanner = ({ planner, onEnquiryClick }) => {
  const { id, name, budget, image } = planner;

  return (
    <Link
      to="/enquiry"
      style={{ textDecoration: "none", color: "palevioletred" }}
    >
      <div className="planner-box">
        <img
          src={image}
          alt={name}
          style={{
            height: 300,
            width: 400,
            marginBottom: 10,
            marginTop: 10,
            borderRadius: 15,
          }}
        />
        <h4 style={{ marginLeft: 100 }}>{name}</h4>
        <p style={{ marginLeft: 100 }}>Budget: ₹ {budget}</p>
        <button onClick={() => enquiry} style={{ marginLeft: 100 }}>
          Enquire
        </button>
      </div>
    </Link>
  );
};

const EnquiryPage = ({ planner }) => {
  return (
    <div>
      <h2>Enquiry Page</h2>
      <h3>Selected Planner: {planner.name}</h3>
      <p>Budget: ${planner.budget}</p>
      {/* Add additional form fields and submit functionality for the enquiry page */}
    </div>
  );
};

const WeddingPlannerWebsite = () => {
  const [budget, setBudget] = useState(0);
  const [filteredPlanners, setFilteredPlanners] = useState([]);
  const [selectedPlanner, setSelectedPlanner] = useState(null);

  const handleBudgetChange = (event) => {
    const newBudget = parseInt(event.target.value);
    setBudget(newBudget);

    const plannersWithinBudget = weddingPlanners.filter(
      (planner) => planner.budget <= newBudget
    );

    const sortedPlanners = plannersWithinBudget.sort(
      (a, b) => a.budget - b.budget
    );

    setFilteredPlanners(sortedPlanners.slice(0, 3));
  };

  const handleEnquiryClick = (plannerId) => {
    const selected = weddingPlanners.find(
      (planner) => planner.id === plannerId
    );
    setSelectedPlanner(selected);
  };

  return (
    <div className="wedplan1">
      <h2 className="wedTitle">Quote a budget for your wedding!</h2>
      <label
        htmlFor="budget"
        style={{ margintop: 10, textAlign: CenterFocusStrong }}
      >
        Enter your budget:
        <br />
      </label>
      <input
        type="number"
        id="budget"
        value={budget}
        onChange={handleBudgetChange}
      />
      <br />
      <br />

      <h3 style={{ margintop: 10 }}>
        Top Wedding Planners within Budget:
        <br />
      </h3>
      {filteredPlanners.length > 0 ? (
        <div className="planner-container">
          {filteredPlanners.map((planner) => (
            <WeddingPlanner
              key={planner.id}
              planner={planner}
              onEnquiryClick={handleEnquiryClick}
            />
          ))}
        </div>
      ) : (
        <p>
          No wedding planners available within the budget. Get customized
          wedding planned within your budget!
          <WhatsAppIcon />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </p>
      )}

      {selectedPlanner && <EnquiryPage planner={selectedPlanner} />}
    </div>
  );
};

export default WeddingPlannerWebsite;
