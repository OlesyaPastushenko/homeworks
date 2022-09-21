import "./style.scss";
import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";
import { Carousel } from "@fancyapps/ui/src/Carousel/Carousel.js";
import { helperCreateClass } from "../../Helper/helperCreate";
const slider = (foto, id) => {
const mainFoto = helperCreateClass('div','foto','')
const img = helperCreateClass('img','imgclass','')
img.setAttribute('src', foto.img)
mainFoto.append(img)
return mainFoto 
}; 
export { slider };
