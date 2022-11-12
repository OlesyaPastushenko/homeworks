import React, { useEffect } from "react";
import Banner from "components/Home/Banner";
import LowerHeader from "components/Home/LowerHeader";
import './style.scss'
import { TopOffer } from "./TopOffers";
import {About} from "./About";
import { OurTeam } from "./OurTeam";
import { Referencias } from "./Referencias";
import { Contactos } from "./Contactos";

const Home = () => {
    useEffect(()=>{
     scroll(0,0)
    },[])
    return (
         <div>
              <LowerHeader/>
              <Banner/>
              <TopOffer/>
              <About/>
              <OurTeam/>
              <Referencias/>
              <Contactos/>
         </div>
         
    )
}

export default Home;