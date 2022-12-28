import React from 'react';
import '../App.css';
import Footer from "./Footer";
import {
    MDBContainer,
    MDBInput,
    MDBTextArea
}
    from 'mdb-react-ui-kit';
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";


const AddMovie = (props) => {

    return (
        <div className="page-container">
            <div className="content-wrap">
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                    <MDBInput wrapperClass='mb-4' label='Tytuł' id='form1' type='text'/>
                    <MDBInput wrapperClass='mb-4' label='Link do obrazu' id='form1' type='text'/>
                    <MDBInput wrapperClass='mb-4' label='Tytuł oryginalny' id='form2' type='text'/>
                    <MDBInput wrapperClass='mb-4' label='Ocena' id='form2' type='number'/>
                    <MDBTextArea label='Opis' rows={6}></MDBTextArea>
                    <Button style={{marginTop: 12}} className="mb-4">Zapisz</Button>

                </MDBContainer>
            </div>

            <Footer/>
        </div>
    );
};

export default AddMovie;
