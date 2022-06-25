import React from "react";
import ContactItem from "../components/ContactItem";
import Navbar from "../components/Navbar";



const Home = () => {

    const token = localStorage.getItem('token');
    console.log("home "+ token);

    return (
        <div className='global-container'>
            <Navbar/>
            <div className="home-body-container">
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
            </div>
        </div>
    );
};


export default Home;
