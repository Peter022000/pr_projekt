import React from 'react';
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
from 'mdb-react-ui-kit';
import Button from "react-bootstrap/Button";

const Register = (props) => {

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
                                        <MDBInput label='Nazwa' id='form1' type='text' className='w-100'/>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg'/>
                                        <MDBInput label='Login' id='form1' type='text' className='w-100'/>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="envelope me-3" size='lg'/>
                                        <MDBInput label='Email' id='form2' type='email'/>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg'/>
                                        <MDBInput label='Hasło' id='form3' type='password'/>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="key me-3" size='lg'/>
                                        <MDBInput label='Powtórz hasło' id='form4' type='password'/>
                                    </div>

                                    <Button className='mb-4' size='lg'>Zarejestruj</Button>
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
