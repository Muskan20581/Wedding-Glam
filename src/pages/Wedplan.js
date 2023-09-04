import React from 'react';
import WeddingPlannerWebsite from "../components/Wedplan2";;
import "../styles/Wedplan.css";


const App = () => {
  return (
    <div className='wed'>
      <h1 className="wedTitle">Quote a budget for your wedding!</h1><br/>
      <WeddingPlannerWebsite />
    </div>
    
  );
  
};


export default App;
