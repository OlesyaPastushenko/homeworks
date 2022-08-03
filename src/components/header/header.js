function Header (props) { 
    console.log(props)
   return (
     <header className = {props.clName}>
       <h1 onClick={props.click}>

      {props.title}</h1>
      {props.children}
       
     </header>
   );
 }
 
 export default Header;
 