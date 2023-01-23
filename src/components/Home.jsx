import React, {useEffect, useState} from 'react';
import Footer from "./Footer";
import Movies from "./Movies";
import '../App.css';
import axios from "axios";

const Home = (props) => {

    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        try {
            axios({method: 'get', url: 'https://at.usermd.net/api/movies'}).then((response) => {
                setMovies(response.data);
            }).catch((error) => {
                console.log(error);
            });

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMovies().then(r => {});
    }, []);

    return (
        <div className="page-container">
            <div className="content-wrap">
                <Movies movies={movies}></Movies>
            </div>
            <Footer/>
        </div>

    );
};

export default Home;
