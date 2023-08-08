import axios from "axios";
import { useState, useEffect } from "react";
import Movies from "./Movies";

const API = process.env.REACT_APP_API_URL;

function Movies() {
  const [movies, setMovies] = useState([]);

useEffect(() => {
  axios
    .get(`${API}/movies`)
  
    .then((response) => {
      console.log(response.data)
      setMovies(response.data)
    })

    .catch((c) => console.warn("catch", c));
}, []);

  return (
    <div className="Movies">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this movie</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Movies;





