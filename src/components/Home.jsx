import React, {useEffect, useState} from 'react';
import Movies from "./Movies";
import '../App.css';
import axios from "axios";
import {useLocation} from "react-router-dom";

const Home = (props) => {

    const [allMovies, setAllMovies] = useState([]);
    const [movies, setMovies] = useState([]);
    const { state } = useLocation();

    const getMovies = () => {
        try {
            axios({method: 'get', url: 'https://at.usermd.net/api/movies'}).then((response) => {
                setAllMovies(response.data);
            }).catch((error) => {
                console.log(error);
            });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if(state?.phrase === undefined){
            setMovies(allMovies);
        }
        else {
            setMovies(allMovies.filter(movie => movie?.title?.toLowerCase().includes(state?.phrase.toLowerCase())));
        }
    }, [allMovies, state?.phrase]);

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className="page-container">
            <div className="content-wrap">
                <Movies movies={movies}></Movies>
            </div>
        </div>
    );
};

export default Home;
