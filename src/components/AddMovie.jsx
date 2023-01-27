import React, {useState} from 'react';
import '../App.css';
import Footer from "./Footer";
import {
    MDBCard, MDBCardBody, MDBCol,
    MDBContainer,
    MDBInput, MDBRow,
    MDBTextArea
} from 'mdb-react-ui-kit';
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import axios, {AxiosError} from "axios";

const AddMovie = (props) => {

    const [title, setTitle] = useState('');
    const [titlePlaceHolder, setTitlePlaceHolder] = useState('Wprowadź tytuł');
    const [image, setImage] = useState('');
    const [imagePlaceHolder, setImagePlaceHolder] = useState('Wprowadź link do obrazu');
    const [description, setDescription] = useState('');
    const [descriptionPlaceHolder, setDescriptionPlaceHolder] = useState('Wprowadź opis');

    const navigate = useNavigate();

    const validate = () => {
        let status = true;
        if (title === '') {
            alert("Wprowadź tytuł!")
            status = false;
        } else if (image === '') {
            alert("Wprowadź link do obrazu!")
            status = false;
        } else if (description === '') {
            alert("Wprowadź opis!")
            status = false;
        }

        return status;
    }

    const send = () => {
        axios({
            method: 'POST',
            url: 'https://at.usermd.net/api/movies',
            data: {
                title: title,
                image: image,
                content: description
            }}).then(response => {
            alert("Dodano film");
            navigate("/");
        }).catch((error: AxiosError) => alert(error.response.data));
    }

    const addMovie = () => {
        if(validate()){
            send();
        }
    }

    return (
        <div className="page-container">
            <div className="content-wrap">
                <MDBContainer fluid>
                    <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
                        <MDBCardBody>
                            <MDBRow style={{justifyContent: "center", alignItems: "center", alignContent: "center"}}>
                                <MDBCol md='10' lg='6' className='d-flex flex-column'>
                                    <MDBInput placeholder={titlePlaceHolder} value={title} onChange={e => setTitle(e.target.value)} wrapperClass='mb-4'  label='Tytuł' id='form1' type='text'/>
                                    <MDBInput placeholder={imagePlaceHolder} value={image} onChange={e => setImage(e.target.value)} wrapperClass='mb-4' label='Link do obrazu' id='form1' type='text'/>
                                    <MDBTextArea placeholder={descriptionPlaceHolder} value={description} onChange={e => setDescription(e.target.value)} label='Opis' rows={6}></MDBTextArea>
                                    <Button style={{marginTop: 12}} onClick={() => addMovie()} className="mb-4">Zapisz</Button>
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
