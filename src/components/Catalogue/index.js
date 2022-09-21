import React from "react";
import {ContextCatalogue, ContextBasket, ContextFilter} from "../../store/context";
import {Link, useLocation} from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import LowerHeader from "../Home/LowerHeader";
import './style.scss'
const Catalogue = () => {
    const {filter, setFilter} = useContext(ContextFilter)
    const {catalogue, setCatalogue} = useContext(ContextCatalogue)


useEffect(() => {
    filter.poblacion == "Poblaciones" ? filter.poblacion = '': filter.poblacion=filter.poblacion
    filter.rooms == "Dormitorios" ? filter.rooms = '': filter.rooms=filter.rooms
    filter.price == "Precio Max" ? filter.price = 100000000 : filter.price = filter.price.replace('.','')
    filter.zone == "Zonas" || filter.zone == "Todas" ? filter.zone='': filter.zone = filter.zone 
    filter.type == "Tipo" ? filter.type = '' : filter.type = filter.type
    console.log(filter)
    catalogue.map(el=>{
        console.log(el.poblacion)
    })
        setCatalogue(catalogue.filter(el=>(
            (el.rooms+'').includes(''+filter.rooms) &&
            el.poblacion.includes(filter.poblacion) &&
            el.price <= filter.price &&
            el.zone.includes(filter.zone) &&
            el.type.includes(filter.type)
            )))



    },[]) 



let {pathname} = useLocation()
console.log(pathname)
    return (
        <div className="allWrap">
            <LowerHeader></LowerHeader>
             <h3 className="h3">
             Encontrado {catalogue.length} objectos 
             </h3>
             <ul>
                {
                catalogue?.map(elem => 
                        <li>
                            <Link className='all' to={`${pathname}/${elem.id}`}>
                              <div className="card">
                                <img src={elem.img} className='img'/>
                                <div className="infoDetail">
                                <div className="all">
                                {elem.type +" "+ elem.action}
                                </div>
                                <div>
                                {elem.poblacion}
                                </div>
                                <div>
                                {elem.zone}
                                </div>
                                <div>
                                {elem.price} EUR
                                </div>
                                    <div className = "miniInfo">
                                        <div>Ref:{elem.id}
                                        </div>
                                        <div>
                                        {elem.rooms} Hab.
                                        </div>
                                        <div>
                                        {elem.bath} Banos.
                                        </div>
                                        <div>
                                        {elem.square} m2
                                        </div>
                                        <div>
                                        {elem.pool ? "picina" :""}
                                        </div>
                                    </div>
                                    <div className="telClass">{elem.tel}</div>
                                </div>                                 
                                </div>  
                            </Link>
                        </li>
                    )
            }

             </ul>
         </div>
    )
}

export default Catalogue;