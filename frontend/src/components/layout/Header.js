import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <ReactNavbar
        burgerColor="#eb4034"
        burgercColorHover="#a62d24"
        logo={logo}
        logoWidth="20vmax"
        navColor1="white"
        logoHoverSize="10px"
        logoHoverColor="#eb4034"
        link1Text="Home"
        link2Text="Product"
        link3Text="Contact"
        link4Text="About"
        link1Url="/"
        link2Url="/product"
        link3Url="/contact"
        link4Url="/about"
        link1Size="1.3vmax"
        link1Color="rgba(35,35,35,0.8)"
        nav1justifyContent="flex-end"
        nav2justifyContent="flex-end"
        nav3justifyContent="felx-start"
        link1ColorHover="#eb4034"
        linnk2ColorHover="#eb4034"
        link3ColorHover="#eb4034"
        link4ColorHover="#eb4034"

        link1Margin="1vmax"
        // link3Margin="0"
        // link4Margin="1vmax"

        profileIconColor="rgba(35,35,35,0)"
        SearchIconColor="rgba(35,35,35,0.8)"
        cartIconColor="rgba(35,35,35,0.8)"
        profileIconColorHover="#eb4034"
        SearchIconColorHover="#eb4034"
        cartIconColorHover="#eb4034"
        cartIconMargin="1vmax"

      />
    </div>
  );
};

export default Header;
