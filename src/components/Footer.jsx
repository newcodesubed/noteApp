import React from "react";

const d = new Date();
const year = d.getFullYear();

function Footer(){
    return (
        <footer className="footer"><p>copyright{year} </p></footer>
    )
}
export default Footer;