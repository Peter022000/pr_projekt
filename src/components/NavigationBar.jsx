import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Outlet, useNavigate} from "react-router-dom";
import {useState} from "react";
import home from "./Home";
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

    return (
        <>
            <Navbar bg="light" expand="lg" style={{height:'6vh'}}>
                <Container fluid>
                    <Navbar.Brand>
                        <Link className="text-decoration-none text-black" to="/">
                            Filmoteka
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse style={{backgroundColor: "#f8f9fa", zIndex:1000}} id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
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
                        <Form className="d-flex">
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


            <Outlet />
        </>
    )
}

export default NavigationBar;
