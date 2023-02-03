import React from 'react';
import MovieCard from "./MovieCard";

const Movies = (props) => {

    return (
        <div style={{display: "flex", flexWrap:"wrap", justifyContent: "center", padding: "1rem"}}>
            {props.movies.map((movie, index) => (
                <MovieCard movie={movie} />
            ))}
        </div>
    );
};

export default Movies;
