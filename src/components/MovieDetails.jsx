import React, {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {decodeToken, isExpired} from "react-jwt";
import axios, {AxiosError} from "axios";

const MovieDetails = (props) => {

    const location = useLocation();
    const movie = location.state?.movie;
    const isNotLogged = isExpired(localStorage.getItem('token'));
    const user = decodeToken(localStorage.getItem('token'));
    const navigate = useNavigate();

    const delete_movie = () => {
        axios({
            method: 'DELETE',
            url: 'https://at.usermd.net/api/movie/' + movie.id,
            }).then(response => {
            alert("Usunięto film");
            navigate("/");
        }).catch((error: AxiosError) => alert(error.response.data));
    }

    const getMovie = () => {
        try {
            axios({method: 'get', url: 'https://at.usermd.net/api/movies/' + movie.id}).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMovie();
    }, []);


    return (
        <div className="page-container">
            <div className="content-wrap" style={{display: "flex", flexDirection: "row", margin: 20}}>
                <img style={{ width: "20%", height: "20%" }} src={movie.image} alt={"No image"}/>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{display: "flex", flexDirection: "column", margin: 20}}>
                        <p>Tytuł: {movie.title}</p>
                        <p className="text-break">Opis: {movie.content}</p>
                    </div>
                    {(!isNotLogged && user["isAdmin"])&& <Button style={{width: "10rem", margin: "1rem"}} onClick={() => {delete_movie()}} className="mb-4">Usuń</Button>}
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
