import { helperCreateClass } from '../../Helper/helperCreate.js';
import './style.scss'
import {slider} from '../Slider/index'
import { Carousel } from "@fancyapps/ui/src/Carousel/Carousel.js";
const ProductCard = (prod) => {
const card = helperCreateClass("div", "card","") 
const cardInfo = helperCreateClass('div','infoWrap',
`<div>
${prod.type +" "+ prod.action}
</div>
<div>
${prod.poblacion}
</div>
<div>
${prod.price}
</div>
    <div class = "miniInfo">
        <div>Ref:${prod.id}
        </div>
        <div>
        ${prod.rooms} Hab.
        </div>
        <div>
        ${prod.bath} Banos.
        </div>
        <div>
        ${prod.square} m2
        </div>
        <div>
        ${prod.pool ? "picina" :""}
        </div>
    </div>
    <div>${prod.tel}</div>
</div>
`)
console.log(typeof prod.img)
card.append(slider(prod))
card.append(cardInfo)
card.addEventListener('click', (e)=>{console.log(e.target)})
return card
}
export  {ProductCard}