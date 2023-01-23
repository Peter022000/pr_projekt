import React, {useState} from 'react';
import Footer from "./Footer";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
}
from 'mdb-react-ui-kit';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Register = (props) => {

    const [login, setLogin] = useState('');
    const [loginPlaceHolder, setLoginPlaceHolder] = useState('Wprowadź login');
    const [password, setPassword] = useState('');
    const [passwordPlaceHolder, setPasswordPlaceHolder] = useState('Wprowadź hasło');
    const [email, setEmail] = useState('');
    const [emailPlaceHolder, setEmailPlaceHolder] = useState('Wprowadź email');

    const navigate = useNavigate();

    const validateEmail = (mail) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return true
        }
        return false
    }

    const validate = () => {
        let status = true;
        if (login === '') {
            alert("Wprowadź login!")
            status = false;
        } else if (email === '') {
            alert("Wprowadź email!")
            status = false;
        } else if (!validateEmail(email)){
            alert("Niepoprawny email!")
            setEmailPlaceHolder('Niepoprawny email!')
            status = false;
        } else if (password === '') {
            alert("Wprowadź hasło!")
            status = false;
        } else if ( password.length < 8) {
            alert("Za krótkie hasło!")
            setPasswordPlaceHolder('Za krótkie hasło')
            status = false;
        }

        return status;
    }

    const send = async () => {

        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: login,
                email: email,
                password: password
            })
        }

        await fetch('https://at.usermd.net/api/user/create', options)
            .then(response => {
                if (response.ok) {
                    alert("Zarejestrowano");
                    navigate("/signin");
                } else {
                    response.text().then(r => alert(r))
                }
            })
            .catch(error => console.log( error ));
    }

    const register = () => {
        if(validate()){
            send().then(r => {});
        }
    }

    return (
        <div className="page-container">
            <div className="content-wrap">
                <MDBContainer fluid>
                    <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                    <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Rejestracja</p>

                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg'/>
                                        <MDBInput label='Login' id='form1' type='text' placeholder={loginPlaceHolder} value={login} onChange={e => setLogin(e.target.value)} className='w-100'/>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="envelope me-3" size='lg'/>
                                        <MDBInput label='Email' id='form2' type='email' placeholder={emailPlaceHolder} value={email} onChange={e => setEmail(e.target.value)}/>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg'/>
                                        <MDBInput label='Hasło' id='form3' type='password' placeholder={passwordPlaceHolder} value={password} onChange={e => setPassword(e.target.value)}/>
                                    </div>

                                    <Button className='mb-4' onClick={() => register()} size='lg'>Zarejestruj</Button>
                                </MDBCol>
                                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>

                </MDBContainer>
            </div>

            <Footer/>
        </div>
    );};

export default Register;
