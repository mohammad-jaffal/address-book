import { React } from "react";

const Navbar = ({ page }) => {


    // check which page the user is in to style the navbar
    if (page == "home" && document.getElementById("home_menu")) {
        document.getElementById("home_menu").style.backgroundColor = 'rgba(243, 235, 246, 255)';
        document.getElementById("home_menu").style.color = 'rgba(135, 109, 150, 255)';
    }
    if (page == "add" && document.getElementById("add_contact_menu")) {
        document.getElementById("add_contact_menu").style.backgroundColor = 'rgba(243, 235, 246, 255)';
        document.getElementById("add_contact_menu").style.color = 'rgba(135, 109, 150, 255)';

    }


    // logout function
    function logoutFunction() {
        localStorage.setItem('token', null);
        document.location.href = '/';
    }


    return (
        <div className="navbar">
            <div className="main-logo">📖</div>
            <ul className="navbar-menu">
                <li id="home_menu" className="navbar-li" onClick={() => { document.location.href = '/home' }}><div>Home</div></li>
                <li id="add_contact_menu" className="navbar-li" onClick={() => { document.location.href = '/add-contact' }}><div>Add Contact</div></li>
                <li className="navbar-li" onClick={() => { logoutFunction() }}><div>Logout</div></li>
            </ul>

        </div>
    );

}

export default Navbar;