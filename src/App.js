import React, { Component } from "react";
import Quote from "./components/Quote/Quote";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

class App extends Component {
  render() {
    library.add(faTwitter);
    library.add(faFacebook);
    return (
      <div>
        <Quote />
        <span className="creator">by Nacen</span>
      </div>
    );
  }
}

export default App;
