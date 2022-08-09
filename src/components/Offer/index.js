import "./style.scss"
import { helperCreateClass } from "../../helper/helperCreate";
const offer = (cardName) =>{
    const card  = document.createElement("div")
    card.className = "card"
    card.innerHTML = cardName
    window.onload = function(){
        console.log(card)
        card.className = "cardScale"
    }
    return card
}

export default offer