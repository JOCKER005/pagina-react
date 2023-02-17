import { Link } from "react-router-dom"
import { Component } from "react"

class Detail extends Component {
  constructor(props) {
    super()
    this.state = {
      movieId:"",
      movie: []
    }           
  }

  componentDidMount() {
    console.log("creado")
    let movieId = this.props.match.params.id
    console.log(movieId);
    fetch ("https://api.themoviedb.org/3/movie/"+movieId+"?api_key=802c505c0decd67ca465ba4c9787ee35&language=es-ES")
    .then(res => res.json())
    .then(movi => {
      this.setState({movie:movi})
    })
    
  }
 
  
  render(){  
    let imageUrl = this.state.movie.poster_path ? `https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}` : 'images/no-poster.jpg';
    const gen = this.state.movie.genres
    console.log(gen)
    return (
          <>
            <div className="row" id="movieDetail">
              <div className="col-12 col-md-4">
                <img
                  src={imageUrl }
                  id="movieImg"
                  alt={this.state.movie.title}
                  title={this.state.movie.title}
                  className="rounded img-thumbnail"
                />
              </div>
              <div className="col-12 col-md-8" id="movieInfo">
                <h2>Título: {this.state.movie.title}    </h2>
                <h5>Géneros: </h5>
                <ul>
                  {
                    gen?.map((gen)=>{
                      return(
                        <li>{gen.name}</li>
                      )
                    })
                  }  
                </ul>
                <h5>Reseña:  </h5>
                  <p> {this.state.movie.overview} </p>
                <h5 >Rating: {this.state.movie.vote_average} </h5>
                <Link to="/" className="btn btn-dark my-3">
                  Volver al Listado
                </Link>
              </div>
            </div>
          </>
      )
  }
}










// const Detail = (props) => {
//   const id = props.match.params.id
//   console.log(props);
//   console.log(i);
//   console.log(j);

//   let imageUrl = props.poster_path ? `https://image.tmdb.org/t/p/w500${props.poster_path}` : 'images/no-poster.jpg';
//     return (
//         <>
//           <div className="row" id="movieDetail">
//             <div className="col-12 col-md-4">
//               <img
//                 src={imageUrl }
//                 id="movieImg"
//                 alt={props.match.params.id}
//                 title={props.match.params.id}
//                 className="rounded img-thumbnail"
//               />
//             </div>
//             <div className="col-12 col-md-8" id="movieInfo">
//               <h2>Título: {props.match.params.id}    </h2>
//               <h5>Géneros: </h5>
//               <ul></ul>
//               <h5>Reseña: </h5>
//                 <p> {props.overview} </p>
//               <h5 >Rating: </h5>
//               <Link to="/Detail" className="btn btn-dark my-3">
//                 volver al listado
//               </Link>
//             </div>
//           </div>
//         </>
//     );
// }

export default Detail;