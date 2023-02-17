import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../Card'

const Result = () => {
    const [result, setResult] = useState([]);
    const location = useLocation();

    const url = new URLSearchParams(location.search);
    const search = url.get('search');
    console.log(search); 

        
    useEffect(() => {
        if (search.length >= 3) {
            console.log('dentro del fectch');
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=802c505c0decd67ca465ba4c9787ee35&language=es-ES&sort_by=popularity.desc&page=1&query=${search}`)
            .then(res => res.json())
            .then(result => {
                setResult(result.results)
                console.log(result)
            })
        }
    },[search]); 

    console.log(result)
    return (
          <>
            <div className="row" id="searchResults">
              {
                result.map(result =>(
                  
                    <div className="display-flex col-12 col-sm-6 col-lg-3 my-2">
                      <div className="card h-100">
                        <Card movie={ result} key={result.id} />
                      </div>
                    </div>
                  
                ))
              }
            </div>
          </>
      );
}
export default Result;