import React from "react";
import Header from 'components/Home/Header';
import Banner from "components/Home/Banner";
import LowerHeader from "components/Home/LowerHeader";

const Home = () => {
    return (
         <div>
              <Header/>
              <LowerHeader/>
              <Banner/>
         </div>
    )
}

export default Home;