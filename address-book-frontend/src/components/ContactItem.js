import React from "react";



const ContactItem = () => {



function viewmapFunction(){
    document.location.href='/view-location';
}


    return (
        <div className='contact-item'>
            <div className="info-container">
                <p className="contact-name">Alaa Taweel</p>
                <p>📞 03 306090</p>
                <p>✉️ alaataweel@gmail.com</p>
                <p>🗿 dawle</p>
            </div>
            <div className="location-container">
                <i className="delete-icon">❌</i>
                <i className="map-icon" onClick={()=>{
                    viewmapFunction()
                }}>🗺️</i>
            </div>

        </div>
    );
};


export default ContactItem;
