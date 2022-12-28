import Card from 'react-bootstrap/Card';
import React from "react";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'
import movies from "./Movies";


const MovieCard = (props) => {
    const {title, text, ranking, src} = props;

    return (
        <Link style={{color: 'black', textDecoration: "none"}} to="/details" state={{ movie: props }}>
        <Card style={{ width: '18rem', margin: '1em', zIndex:1}}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Card.Text>Ocena: {ranking}</Card.Text>
                {/*<Button variant="primary"><Link style={{color: 'white', textDecoration: "none"}} to={{pathname:"/movieDetails"}} state={{ movie: props }}>Szczegóły</Link></Button>*/}
            </Card.Body>
        </Card>
        </Link>
    );
}

export default MovieCard;
