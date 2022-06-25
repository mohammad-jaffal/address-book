import React from "react";



const ContactItem = ({ name, phone, email, status, contact_id, location}) => {

// console.log(location)

function viewmapFunction(){
    localStorage.setItem('lat', location[0]);
    localStorage.setItem('lng', location[1]);
    document.location.href='/view-location';
}
function deleteContact(){
    console.log('deleteing '+contact_id)
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
                <i className="delete-icon" onClick={()=>{deleteContact()}}>❌</i>
                <i className="map-icon" onClick={()=>{
                    viewmapFunction()
                }}>🗺️</i>
            </div>

        </div>
    );
};


export default ContactItem;
