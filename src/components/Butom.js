
import { Component} from "react"

class Gif extends Component {
    constructor(props){
    super(props)
    this.state = {
        poster_path : ""
    }
}

apiCall (url, handler) {
    fetch (url)
    .then (res => res.json () )
    .then (data => handler (data))
    .catch (error => console.log(error) )
} 

traerGifNuevo() {
    this.apiCall("url con key", this.mostrarGif)

}

}


