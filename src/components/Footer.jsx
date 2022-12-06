import React from "react"

const Footer = () => {
    return (
        <div className="main-footer">
            <div style={{backgroundColor: "#F8F9FA"}} className="text-center py-3">
                © {new Date().getFullYear()} Copyright: Piotr Duda
            </div>
        </div>
    )
}

export default Footer;
