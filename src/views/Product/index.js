import './style.scss'
import { ProductCard } from '../../components/ProdactCard/index'

import { helperCreateClass } from '../../Helper/helperCreate'
const Product = () => {
    const token = 'wkv8h00hzocfk0mzxa4l24uxx6yk8caiwzbhca0l'
    const url = 'https://api.json-generator.com/templates/PQmMoFUNsVBb/data'
    const api = `${url}?access_token=${token}`
    const wrap = helperCreateClass('div', 'productPage', '')
        fetch(api)
        .then(res=>res.json())
        .then(json=>{
            json.forEach(el => {
                let card = ProductCard(el);
                wrap.append(card)
            });
        })
        
        return wrap
}
export default Product;