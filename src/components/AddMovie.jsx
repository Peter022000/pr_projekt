import React from 'react';
import '../App.css';
import Footer from "./Footer";
import {
    MDBCard, MDBCardBody, MDBCol,
    MDBContainer,
    MDBInput, MDBRow,
    MDBTextArea
}
    from 'mdb-react-ui-kit';
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";


const AddMovie = (props) => {

    return (
        <div className="page-container">
            <div className="content-wrap">
                <MDBContainer fluid>
                    <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
                        <MDBCardBody>
                            <MDBRow style={{justifyContent: "center", alignItems: "center", alignContent: "center"}}>
                                <MDBCol md='10' lg='6' className='d-flex flex-column'>
                                    <MDBInput wrapperClass='mb-4' label='Tytuł' id='form1' type='text'/>
                                    <MDBInput wrapperClass='mb-4' label='Link do obrazu' id='form1' type='text'/>
                                    <MDBInput wrapperClass='mb-4' label='Tytuł oryginalny' id='form2' type='text'/>
                                    <MDBInput wrapperClass='mb-4' label='Ocena' id='form2' type='number'/>
                                    <MDBTextArea label='Opis' rows={6}></MDBTextArea>
                                    <Button style={{marginTop: 12}} className="mb-4">Zapisz</Button>
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

export default AddMovie;
