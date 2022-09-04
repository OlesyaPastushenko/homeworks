import React from "react";
import {ContextCatalogue, ContextBasket} from "../../store/context";
import {Link, useLocation} from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import Header from "../Home/Header";
import LowerHeader from "../Home/LowerHeader";
const Catalogue = () => {
    const {catalogue, setCatalogue} = useContext(ContextCatalogue)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setCatalogue(json))
    },[])
    console.log(catalogue.length)
let {pathname} = useLocation()
    return (
        <div>
            <Header></Header>
            <LowerHeader></LowerHeader>
             <h1>
             Каталог 
             </h1>
             <ul>
                {
                catalogue?.map(elem => 
                        <li>
                            <Link to={`${pathname}/${elem.id}`}>{elem.title}</Link>
                        </li>
                    )
            }

             </ul>
         </div>
    )
}

export default Catalogue;