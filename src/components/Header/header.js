import { OnHandleRoute } from '../../helper/route.js';
import './style.scss'
import { helperCreateClass } from '../../helper/helperCreate.js';
const Header = () => {
  const logo = helperCreateClass("div","", "Murcia Sweet Home")
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const a1 = document.createElement("a");
  const a2 = document.createElement("a");
  const a3 = document.createElement("a");
  a1.href = "/";
  a1.addEventListener('click', OnHandleRoute)
  a1.innerHTML = "Home";
  a2.href = "/about";
  a2.addEventListener('click', OnHandleRoute)
  a2.innerHTML = "About";
  a3.href = "/product";
  a3.addEventListener('click', OnHandleRoute)
  a3.innerHTML = "Product";
  li1.append(a1);
  li2.append(a2);
  li3.append(a3);
  ul.append(li1);
  ul.append(li2);
  ul.append(li3);
  nav.append(ul)
  header.append(logo)
  header.append(nav)

  return header
};
export default Header;
