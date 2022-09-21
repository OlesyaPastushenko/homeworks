import React from "react";
import { useEffect, useState, useContext } from "react";
import {useParams} from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';
import LowerHeader from "../Home/LowerHeader/index";
import './style.scss'
import basket from '../Home/LowerHeader/c3b2dff7986e701847f213423683f00a.png'
import {ContextCatalogue, ContextuserBasket} from "../../store/context";
const ItemCard = ({name}) => {
    const {catalogue, setCatalogue} = useContext(ContextCatalogue)
    let {itemId} = useParams()
    const [item, setItem] = useState({})
    const { userBasket, setUserBasket } = useContext(ContextuserBasket)
    useEffect(()=>{
        const token = 'wkv8h00hzocfk0mzxa4l24uxx6yk8caiwzbhca0l'
        const url = 'https://api.json-generator.com/templates/PQmMoFUNsVBb/data'
        const api = `${url}?access_token=${token}`
        fetch(api)
        .then(res=>res.json())
        .then(json=>setCatalogue(json));        
        },[])
    const fiterItem = () => {
        return catalogue.filter(el=>el.id == itemId)
    }
    useEffect(()=>{     
        setItem(fiterItem())
    },[itemId])

    // console.log('catalog - ', catalogue)
    console.log('itm -', item)
    // console.log('itemid -', itemId)
    console.log('item.id-', item[0]?.tel)
    const onCart = () => {
        setUserBasket([...userBasket, item])
    }
    useEffect (() => {
        // console.log( 'item -', userBasket)
    }, [userBasket])
    return (
         <div className="allWrap">
            <LowerHeader></LowerHeader>
             <h1 className="text">
                {item[0]?.type + " " +item[0]?.action}
             </h1>
             <div >
             <img className = 'imgItem' src={item[0]?.img}></img>
             </div>
             <div>
                {/* {item} */}
             </div>
             <button className = 'button1'onClick={onCart}>
                  <img className = 'heart' src={basket}></img>

             </button>
             <div className="infoItem">
                <div className="detailes">
                    Poblacion: {item[0]?.poblacion}
                </div>
                <div className="detailes">
                    Zona: {item[0]?.zone}
                </div>
                <div className="detailes">
                    Precio: {item[0]?.price}
                </div>
                <div className="detailes">
                    Hab: {item[0]?.rooms}
                </div>
                <div className="detailes">
                    Banos: {item[0]?.bath}
                </div>
                <div className="description">
                <div className="desc">
                    Descricion:{item[0]?.desc}
                </div>
                </div>
             </div>
         </div>
    )
}

export default ItemCard;