import { createElem } from "../../helper/createElem";

const Button = () => {
    let wrap = document.querySelector('.wrapper');

    const btn = createElem('button', wrap, 'generate', 'btn');

    const click = () => {};

    btn.addEventListener('click', click);
}

export default Button;