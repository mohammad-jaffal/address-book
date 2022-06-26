import React from "react";
import axios from 'axios';


const ContactItem = ({ name, phone, email, status, location, del_fn, view_fn}) => {

// console.log(location)




    return (
        <div className='contact-item'>
            <div className="info-container">
                <p className="contact-name">{name}</p>
                <p className="contact-info">📞 {phone}</p>
                <p className="contact-info">✉️ {email}</p>
                <p className="contact-info">&nbsp;🗿 {status}</p>
            </div>
            <div className="location-container">
                <i className="delete-icon" onClick={del_fn}>❌</i>
                <i className="map-icon" onClick={view_fn}>🗺️</i>
            </div>

        </div>
    );
};


export default ContactItem;
