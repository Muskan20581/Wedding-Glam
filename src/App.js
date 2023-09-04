import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Enquiry from "./pages/Enquiry";
import Destination_wedding from "./pages/Destination_wedding";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gallery from "./pages/Gallery";
import { MenuItem } from "@material-ui/core";
import Chatbot from "./pages/Chatbot";
import WeddingPlannerWebsite from "./components/Wedplan2";
import axios from 'axios'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/enquiry" exact component={Enquiry} />
          <Route path="/Gallery" exact component={Gallery} />
          
          <Route
            path="/Destination_wedding"
            exact
            component={Destination_wedding}
          />
          <Route path="/enquiry" exact component={MenuItem} />
          <Route path="/chatbot" exact component={Chatbot} />
          <Route path="/wedplan" exact component={WeddingPlannerWebsite} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
