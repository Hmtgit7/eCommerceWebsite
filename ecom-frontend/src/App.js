import React from "react";
import Navigation from "./Customer/Component/Navigation/Navigation";
import HomePage from "./Customer/Pages/HomePage/HomePage";
import Product from "./Customer/Component/Product/Product";
import Footer from "./Customer/Component/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
      <Footer />
    </div>
  );
};

export default App;
