function Fav (props) {
    return ( 
        <a className= {props.className} href="/favorite">
           {props.text}
        </a> 
    );
}
export default Fav;