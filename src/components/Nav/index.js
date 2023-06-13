import Bottom from "./Bottom";
import Title from "./Title";
import { useHistory } from "react-router-dom";
import Fav from './Fav.js'
import { useState } from "react";


function Nave() {

    const history = useHistory()
    const handleSubmit = (e) => {
      e.preventDefault()

      let input = e.target.search.value
      if(input.length >= 3 ){
        history.push('/result?search='+ input)
      }
    }
    const [menu, setMenu ] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Title 
            text = "PELICULIN" 
            className= "navbar-brand"
            />
            <button
            onClick={toggleMenu}
              className={`navbar-toggler ${ menu ? "collapsed" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className={`collapse navbar-collapse ${menu ? "show": ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Title 
                text = "Home"
                className="nav-link"
                />
              </li>
              <li className="nav-item">
                <Fav 
                text = "Favorite"
                className="nav-link"
                />
              </li>
            </ul>
            
    
              <form className="d-flex" onSubmit={ e => handleSubmit(e)}>
                <input
                  className="form-control me-2"
                  type="search"
                  name= "search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Bottom title = "Search"/>
              </form>
            </div>
          </div>
        </nav>

    );
}

export default Nave;