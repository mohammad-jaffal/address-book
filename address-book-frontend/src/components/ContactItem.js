import React from "react";



const ContactItem = () => {






    return (
        <div className='contact-item'>
            <div className="info-container">
                <p>Contact name</p>
                <p>📞 Phone number</p>
                <p>✉️ Email</p>
                <p>🗿 Status</p>
                </div>
            <div className="location-container">
                <i className="map">🗺️</i>
            </div>

        </div>
    );
};


export default ContactItem;
