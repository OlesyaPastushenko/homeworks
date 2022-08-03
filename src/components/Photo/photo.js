function Photo(props){
 return (
    <div className = {props.clName}>
        {props.children}
    </div>
 )
}
export default Photo