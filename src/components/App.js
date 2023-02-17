import Nave from "./Nav"
import Footer from "./Footer.js"
import { Component } from 'react'
import Home from "./pages/Home.jsx"
import { Switch, Route } from "react-router-dom"
import Detail from "./pages/Detalles.jsx"
import NotFound from "./pages/NotFound.jsx"
import Result from "./pages/Result.jsx"
import Favorite from './pages/Favorite.jsx'

class App extends Component {
  constructor(){
    super();
    this.state = {
      main: false,
      movies: []
    }
  }
  componentDidMount(){
    console.log('se Creo el componente')
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=802c505c0decd67ca465ba4c9787ee35")
      .then(res => res.json())
      .then(mov => {
        this.setState({movies: mov})
      })
  }
  componentDidUpdate(){
    console.log('se Actualizo el componente')
  }
  componentWillUnmount(){
    console.log('se Elimino del componente')
    
  }
  render(){
    return (
      <>
        <Nave/>
      
        <Switch>
          <Route path = "/detail/:id" component = { Detail }/>
          <Route path = "/result" component = { Result }/>
          <Route path = "/favorite/:id" component = { Favorite }/>
          <Route exact path = "/" component = { Home }/>
          <Route component = {NotFound}/>



        </Switch>
        
        <Footer/>
      </>
    );
  }
}

export default App;
