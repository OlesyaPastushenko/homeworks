import bannerPhoto from './05170859825470.jpg'
import { areas, types, prices, rooms, bath } from '../../../store/data'
import './style.scss'
import {Link , useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ContextFilter, ContextCatalogue } from '../../../store/context'

const Banner = () => {
    let {pathname} = useLocation()
    console.log(pathname)
    const {catalogue, setCatalogue} = useContext(ContextCatalogue)
    const {filter, setFilter} = useContext(ContextFilter)
    const [area, setArea] = useState('Poblaciones')
    const [room, setRoom] = useState('')
    const [type, setType] = useState('')
    const [price, setPrice] = useState('100000000')
    const [zona, setZona] = useState('')
    useEffect(()=>{
        const token = 'wkv8h00hzocfk0mzxa4l24uxx6yk8caiwzbhca0l'
        const url = 'https://api.json-generator.com/templates/PQmMoFUNsVBb/data'
        const api = `${url}?access_token=${token}`
        fetch(api)
        .then(res=>res.json())
        .then(json=>setCatalogue(json));        
        },[])
    useEffect(()=>{
        setFilter(filter, filter.rooms=room, filter.price = price, filter.poblacion = area, filter.zone = zona, filter.type = type)
    },[area,room,type,price,zona])

    let variants = Object.keys(areas)
    return (
    <div>   
    <div style = {{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${bannerPhoto})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '475px'
    }}>
    <div className='wrapSelect'>
    <select className='select' onChange={(e)=>{setArea(e.target.value)}}>
        {variants.map(el=>(
           <option>{el}</option>
        ))}
    </select>
    <select className='select' onChange={(e)=>{setZona(e.target.value)}}>
        {areas[area].map((el)=>(
            <option>{el}</option>
        ))}
    </select>
    <select className='select' onChange={(e)=>{setType(e.target.value)}}>
        {types.map(el=>(
           <option>{el}</option>
        ))}
    </select>
    </div>
    <div className='wrapSelect'>
        <select className='select' onChange={(e)=>{setPrice(e.target.value)}}>
            {Object.keys(prices).map(el=>(
            <option>{el}</option>
            ))}
        </select>
        <select className='select' onChange={(e)=>{setRoom(e.target.value)}}>
            {Object.values(rooms).map(el=>(
            <option>{el}</option>
            ))}
        </select>
        <Link to='/catalogue' className = "a">
        <div className = 'button'>Buscar</div>
        </Link>
    </div>
    </div>
    <div className='wrapH3'>

    <h3 className="h3">
             Todos inmuebles: {catalogue.length} objectos 
    </h3>
    </div>
    <div className="allWrap1">
    <ul>
        {
        catalogue?.map(elem => 
                <li>
                    <Link className='all' to={`catalogue/${elem.id}`}>
                        <div className="card">
                        <img src={elem.img} className='img'/>
                        <div className='infoDetail'>
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
                            <div className='telClass'>{elem.tel}</div>
                        </div>                                 
                        </div>  
                    </Link>
                </li>
            )
    }

             </ul>
    </div>
    </div> 
    )

}

export default Banner;