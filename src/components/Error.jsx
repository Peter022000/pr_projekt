import React from 'react';
import '../App.css';

const Error = (props) => {

    return (
        <div className="page-container">
            <div className="content-wrap" style={{display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center"}}>
                <p style={{fontSize: "3rem"}}>
                    Page not found
                </p>
            </div>
        </div>
    );
};

export default Error;
