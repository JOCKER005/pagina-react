import Card from "../Card"
import { Component } from 'react'

class Home extends Component {
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
  render() {
    return(
        <>
        <div class="row" id="popularMovies">
          {
          this.state.movies.results?.map( movie => {
            return (
              <div className="display-flex col-12 col-sm-6 col-lg-3 my-2">
			          <div className="card h-100">
                  <Card movie={ movie} key={movie.id} />
                </div>
		          </div>
            )
          })
          }
        </div>
        </>
    )
  }
}

export default Home;