import React from "react";
import { useLocation} from "react-router-dom";
import Footer from "./Footer";

const MovieDetails = (props) => {

    const location = useLocation();
    const movie = location.state?.movie;

    return (
        <div className="page-container">
            <div className="content-wrap" style={{display: "flex", flexDirection: "row", margin: 20}}>
                <img style={{ width: "20%", height: "20%" }} src={movie.image} alt={'No image'}/>
                <div style={{display: "flex", flexDirection: "column", margin: 20}}>
                    <p>Tytuł: {movie.title}</p>
                    <p className="text-break">Opis: {movie.content}</p>
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default MovieDetails;
