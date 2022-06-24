import React from "react";

const Navbar = () => {


    return (
        <div className="navbar">
            <div className="main-logo">A-Book</div>
            <ul className="navbar-menu">
                <li className="navbar-li" onClick={()=>{document.location.href='/home'}}>Home</li>
                <li className="navbar-li" onClick={()=>{document.location.href='/add-contact'}}>Add Contact</li>
                <li className="navbar-li">Logout</li>
            </ul>

        </div>
    );

}

export default Navbar;