import React from "react";
import Profile from "./PortfolioContainer/Home/Profile/Profile";
import Home from "./PortfolioContainer/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home>
        <Profile />
      </Home>
    </div>
  );
}

export default App;
