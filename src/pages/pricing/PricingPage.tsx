import React from "react";
import PricingHeader from "./PricingHeader";
import ExtraInfo from "./ExtraInfo";
import Footer from "../components/common/Footer";
import PricingCard from "./PricingCard";
import MainMenu from "../components/common/MainMenu";

const PricingPage: React.FC = () => {
  return (
      <>
             <div className="app-content">
                 <MainMenu/>
                 <div className="container py-5">
                     <PricingHeader/>
                     <PricingCard />
                     <ExtraInfo />
                 </div>
             </div>
             <Footer/>
         </>
  );
};

export default PricingPage;

