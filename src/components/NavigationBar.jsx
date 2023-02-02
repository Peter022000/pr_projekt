import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Outlet, useNavigate} from "react-router-dom";
import {useState} from "react";
import {isExpired} from "react-jwt";

const NavigationBar = () => {

    const [phrase, setPhrase] = useState('');

    const isNotLogged = isExpired(localStorage.getItem('token'));

    const navigate = useNavigate();

    const search = () => {
        navigate(
                '/',
                {
                    state: {
                        phrase: phrase
                    }
                })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        search();
    }

    return (
        <Navbar bg="light" expand="lg" style={{height:'4rem'}}>
            <Container fluid>
                <Navbar.Brand>
                    <Link className="text-decoration-none text-black" to="/">
                        Filmoteka
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle style={{marginBottom:'1rem'}} aria-controls="navbarScroll" />
                <Navbar.Collapse style={{backgroundColor: "#f8f9fa", zIndex:1000}} id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link>
                            <Link className="text-decoration-none text-black" to="/">
                                Strona główna
                            </Link>
                        </Nav.Link>
                        {isNotLogged && <Nav.Link>
                            <Link className="text-decoration-none text-black" to="/signin">
                                Logowanie
                            </Link>
                        </Nav.Link>}
                        {isNotLogged && <Nav.Link>
                            <Link className="text-decoration-none text-black" to="/signup">
                                Rejestracja
                            </Link>
                        </Nav.Link>}

                        {!isNotLogged && <Nav.Link>
                            <Link className="text-decoration-none text-black" to="/add">
                                Dodaj film
                            </Link>
                        </Nav.Link>}

                        {!isNotLogged && <Nav.Link>
                            <Link onClick={() => {localStorage.removeItem('token'); window.location.href = "/";}} className="text-decoration-none text-black" to="/">
                                Wyloguj się
                            </Link>
                        </Nav.Link>}

                    </Nav>
                    <Form className="d-flex" onSubmit={handleSubmit}>
                        <Form.Control
                            type="search"
                            placeholder=""
                            className="me-2"
                            aria-label="Search"
                            value={phrase}
                            onChange={e => setPhrase(e.target.value)}
                        />
                        <Button onClick={() => search()} variant="outline-success">Wyszukaj</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;
