import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import webFont from "webfontloader"; 

import Header from "./components/layout/Header/Header.js";
import Footer from "./components/layout/Footer/Footer.js";




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

      <Footer/>
    </Router>
  );
}

export default App;
