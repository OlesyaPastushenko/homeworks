function Nav (props) {
    console.log(props)
   return (
<nav className = {props.clName}>
  <ul> 
    <li className = 'li'><a href="#">{props.a1}</a></li>
    <li className = 'li'><a href="#">{props.a2}</a></li>
    <li className = 'li'><a href="#">{props.a3}</a></li>
  </ul>
</nav>
    )
}
export default Nav;