import React from 'react';
import '../App.css';
import Footer from "./Footer";
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon, MDBCard, MDBCardBody, MDBRow, MDBCol, MDBCardImage
}
    from 'mdb-react-ui-kit';
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";


const Login = (props) => {

    return (
        <div className="page-container">
            <div className="content-wrap">
                <MDBContainer fluid>
                    <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                    <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Logowanie</p>

                                    <MDBInput wrapperClass='mb-4' label='Login' id='form1' type='email'/>
                                    <MDBInput wrapperClass='mb-4' label='Hasło' id='form2' type='password'/>

                                    {/*<div className="d-flex justify-content-between mx-3 mb-4">*/}
                                    {/*    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />*/}
                                    {/*    <a href="!#">Forgot password?</a>*/}
                                    {/*</div>*/}

                                    <Button className="mb-4">Zaloguj się</Button>

                                    <div className="text-center">
                                        <p>Nie jesteś członkiem? <Link to="/signup">Zarejestruj</Link></p>
                                    </div>
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
    );
};

export default Login;
