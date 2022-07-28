// import './style.scss'

import { helperCreateClass } from '../../helper/helperCreate'
const Product = () => {
    const wrap = helperCreateClass('div', '', '')
        fetch('https://api.github.com/users/USERNAME')
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            // json.forEach(el => {
            //     let title = helperCreateClass('h3', '', el.title);
            //     wrap.append(title)
            // });
        })
        return wrap
}
export default Product;