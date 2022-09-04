import React from "react";
import { useEffect, useState, useContext } from "react";
import {useParams} from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';
import Header from "../Home/Header";
import LowerHeader from "../Home/LowerHeader";
import './style.scss'
import {ContextCatalogue, ContextuserBasket} from "../../store/context";
const ItemCard = ({name}) => {
    let {itemId} = useParams()
    let {pathname} = useLocation()
    const [item, setItem] = useState({})
    const [vol, setvol] = useState(0)
    const { userBasket, setUserBasket } = useContext(ContextuserBasket)
    useEffect (()=>{
        fetch(`https://fakestoreapi.com/products/${itemId}`)
            .then(res=>res.json())
            .then(json=>setItem(json))
    }, [itemId])
    const onCart = () => {
        setUserBasket([...userBasket, item])
    }
    useEffect (() => {
        console.log( 'item -', userBasket)
    }, [userBasket])
    return (
         <div>
            <Header></Header>
            <LowerHeader></LowerHeader>
             <h1>
                {name} Item {itemId}
             </h1>
             <div>
                {item.title}
             </div>
             <img src={item?.image} width={300}></img>
             <button onClick={onCart}>Add to Cart</button>
         </div>
    )
}

export default ItemCard;