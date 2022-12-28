import React from "react";
import {Link, useLocation} from "react-router-dom";
import Footer from "./Footer";

const MovieDetails = (props) => {

    const location = useLocation();
    const movie = location.state?.movie;

    return (
        <div className="page-container">
            <div className="content-wrap" style={{display: "flex", flexDirection: "row", margin: 20}}>
                <img style={{ width: "20%", height: "20%" }} src={movie.src}/>
                <div style={{display: "flex", flexDirection: "column", margin: 20}}>
                    <p>Tytuł: {movie.title}</p>
                    <p>Tytuł oryginalny: {movie.title}</p>
                    <p>Ocena: {movie.ranking}</p>
                    <p className="text-break">Opis: {movie.description}</p>
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default MovieDetails;
