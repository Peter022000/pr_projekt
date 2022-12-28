import Card from 'react-bootstrap/Card';
import React from "react";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'
import movies from "./Movies";


const MovieCard = (props) => {
    const {title, title2, ranking, src} = props;

    return (
        <div style={{margin: '1em'}}>
            <Link style={{color: 'black', textDecoration: "none"}} to="/details" state={{ movie: props }}>
            <Card style={{ width: '18rem', zIndex:1}}>
                <Card.Img variant="top" src={src} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{title2}</Card.Text>
                    <Card.Text>Ocena: {ranking}</Card.Text>
                    {/*<Button variant="primary"><Link style={{color: 'white', textDecoration: "none"}} to={{pathname:"/movieDetails"}} state={{ movie: props }}>Szczegóły</Link></Button>*/}
                </Card.Body>
            </Card>
            </Link>
        </div>
    );
}

export default MovieCard;
