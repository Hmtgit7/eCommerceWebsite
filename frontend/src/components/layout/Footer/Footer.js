import React from "react";

import playStore from "../../../images/playStore.png";
import appStore from "../../../images/appStore.png";
import logo from "../../../images/logo.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h3>Download Our App</h3>
        <p>Download App for Android and ios mobile phone</p>
        <img src={playStore} alt="playStore"/>
        <img src={appStore} alt="appStore"/>
      </div>
      <div className="midFooter">
      <img src={logo} alt="logo"/>
      <p>Compyright 2024 &copy; sparkdevelopie</p>
      </div>
      <div className="rightFooter">
        <p>Instagram</p>
        <p>youtube</p>
        <p>facebook</p>
      </div>
    </footer>
  );
};

export default Footer;
