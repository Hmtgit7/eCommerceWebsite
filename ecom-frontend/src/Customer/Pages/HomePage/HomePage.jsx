import React from "react";
import MainCarousel from "../../Component/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../Component/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/Men/men_kurta";
import Footer from "../../Component/Footer/Footer";



const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
