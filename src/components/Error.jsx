import React, {useState} from 'react';
import '../App.css';
import Footer from "./Footer";
import {
    MDBContainer,
    MDBInput,
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBCardImage
} from 'mdb-react-ui-kit';
import Button from "react-bootstrap/Button";
import {Link, useNavigate} from "react-router-dom";
import axios, {AxiosError} from "axios";
import {decodeToken} from "react-jwt";
const Error = (props) => {

    return (
        <div className="page-container">
            <div className="content-wrap" style={{display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center"}}>
                <p style={{fontSize: "3rem"}}>
                    Page not found
                </p>
            </div>
            <Footer/>
        </div>
    );
};

export default Error;
