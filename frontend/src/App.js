import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import webFont from "webfontloader"; 

import Header from "./components/layout/Header.js";
import { useEffect } from "react";




function App() {
  useEffect(() => {
    webFont.load({
      google:{
        families:["Roboto" ,"Droid Sans", "Chilanka"],
      },
    })
  }, [])
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
