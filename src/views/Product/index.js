// import './style.scss'

import { helperCreateClass } from '../../Helper/helperCreate'
const Product = () => {
    const wrap = helperCreateClass('div', '', '')
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            json.forEach(el => {
                let title = helperCreateClass('h3', '', el.title);
                wrap.append(title)
            });
        })
        return wrap
}
export default Product;