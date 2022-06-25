import React from "react";
import axios from 'axios';


const ContactItem = ({ name, phone, email, status, contact_id, location, del_fn}) => {

// console.log(location)

function viewmapFunction(){
    localStorage.setItem('lat', location[0]);
    localStorage.setItem('lng', location[1]);
    document.location.href='/view-location';
}


    return (
        <div className='contact-item'>
            <div className="info-container">
                <p className="contact-name">{name}</p>
                <p>📞 {phone}</p>
                <p>✉️ {email}</p>
                <p>🗿 {status}</p>
            </div>
            <div className="location-container">
                <i className="delete-icon" onClick={del_fn}>❌</i>
                <i className="map-icon" onClick={()=>{
                    viewmapFunction()
                }}>🗺️</i>
            </div>

        </div>
    );
};


export default ContactItem;
