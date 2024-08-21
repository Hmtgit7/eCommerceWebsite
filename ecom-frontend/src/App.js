import React from "react";
import Navigation from "./Customer/Component/Navigation/Navigation";
import HomePage from "./Customer/Pages/HomePage/HomePage";


const App = () => {
  return (
    <div>
      <Navigation />
      <div>
        <HomePage />
      </div>
    </div>
  );
};

export default App;
