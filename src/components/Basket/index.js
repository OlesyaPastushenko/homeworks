import React, { useEffect } from "react";
import Header from "../Home/Header";
import LowerHeader from "../Home/LowerHeader";
import { useContext } from "react";
import {ContextCatalogue, ContextuserBasket} from "../../store/context";
const Basket = () => {
    const {userBasket, setUserBasket} = useContext(ContextuserBasket)
    console.log("basket->", userBasket)
    
    return (
        <div>
             <Header></Header>
             <LowerHeader></LowerHeader>
                <h1>Корзина</h1>
            <ul>
                {userBasket.map(el=>{
                    return (
                        <li>
                            {el.title}
                        </li>
                    )
                })}
            </ul>
         </div>
    )
}

export default Basket;