import PropTypes from "prop-types";
import { Link } from "react-router-dom"


const Card = ({movie}) => {
    const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'images/no-poster.jpg';
    return (
        <>
		    <img src={imageUrl} alt="ggg" class="card-img-top"/>
		    <div class="card-body">
		    	<h5 class="card-title one-line-title">{movie.original_title}</h5>
		    	<p class="card-text">{movie.overview.substr(0, 80).trim()}...</p>
		    	<Link to={`/detail/${movie.id}`} class="btn btn-primary">Ver detalle</Link>
                <Link to={`/favorite/${movie.id}`} class="btn btn-terciary">❤️Añadir</Link>
		    </div>
        </>
    );
};

Card.propTypes = {
    text: PropTypes.object
};

export default Card;