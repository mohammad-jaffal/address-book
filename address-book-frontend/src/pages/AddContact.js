import { React, useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import axios from 'axios';



const AddContact = () => {

    var contact_name = useRef(null);
    var lat_input = useRef(null);
    var lng_input = useRef(null);
    var contact_phone = useRef(null);
    var contact_email = useRef(null);
    var contact_status = useRef(null);
    const token = localStorage.getItem('token');
    // console.log("home " + token);

    const [user_id, setUserId] = useState('');

    // check if user logged in via jwt controller
    const validateUser = async () => {
        // check if token is still legit
        await axios("http://localhost:3000/profile", {
            method: 'POST',
            headers: {
                Authorization: 'JWT ' + token,
                Accept: 'application/x-www-form-urlencoded',
            },

        }).then(res => {

            if (res['status'] == 200) {
                setUserId(res.data['_id']);
            }
        })
            .catch(err => {
                document.location.href = "./";
            })
    }


    // lat_input.value = localStorage.getItem('c_lat');
    // lat_input.value = localStorage.getItem('c_lng');

    // lat_input.current.value = 'c_lat';
    // lng_input.current.value = 'c_lng';
    useEffect(() => {
        lat_input.current.value = localStorage.getItem('c_lat');
        lng_input.current.value = localStorage.getItem('c_lng');
    }, [lat_input, lng_input]);

function addContactFunction(){
    console.log(contact_name.current.value);
    
    localStorage.setItem('c_lat', '');
    localStorage.setItem('c_lng', '');

    document.location.reload();
}



    useEffect(() => {
        validateUser();
        console.log(user_id);
    }, [user_id]);



    return (
        <div className='global-container'>
            <Navbar />
            <div className="addcontact-body-container">
                <div className="addcontact-form-container">
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" ref={contact_name} className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input type="text" ref={contact_phone} className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="Email" ref={contact_email} className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Status:</label>
                        <select ref={contact_status} className="form-control">
                            <option value="Single  ">Single </option>
                            <option value="Married">Married</option>
                            <option value="Separated ">Separated </option>
                            <option value="Divorced ">Divorced </option>
                            <option value="Widowed ">Widowed </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Location:</label>
                        <input ref={lat_input} className="location-show" readOnly />
                        <input ref={lng_input} className="location-show" readOnly />
                        <button onClick={() => { document.location.href = '/pick-location' }}>Pick</button>
                    </div>
                    <div className="form-group">
                        <button onClick={() => { addContactFunction() }}>AddContact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AddContact;
