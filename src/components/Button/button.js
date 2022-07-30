import { createElem } from "../../helper/createElem";

const Button = () => {
  let wrap = document.querySelector(".wrapper");

  createElem("button", wrap, "generate", "btn");
};

export default Button;
