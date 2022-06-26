import { React, useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import axios from 'axios';
import PickLocation from "../components/PickLocation";



const AddContact = () => {

    var contact_name = useRef(null);
    var contact_lat = useRef(null);
    var contact_lng = useRef(null);
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


    useEffect(() => {
    }, [contact_lat, contact_lng]);

    async function addContactFunction() {
        // console.log(contact_name.current.value);
        if (contact_name.current.value == "" || contact_phone.current.value == "" || contact_email.current.value == "" || contact_lat.current.value == "") {
            alert('Fill all!');
            // console.log(contact_status.current.value);
        } else {



            const params = new URLSearchParams();
            params.append('name', contact_name.current.value);
            params.append('phone_number', contact_phone.current.value);
            params.append('status', contact_status.current.value);
            params.append('email', contact_email.current.value);
            params.append('location[0]', contact_lat.current.value);
            params.append('location[1]', contact_lng.current.value);
            params.append('user_id', user_id);

            await axios.post(`http://localhost:3000/add-contact`,
                params,
                { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' })
                .then(res => {
                    // if login
                    if (res['status'] == 200) {
                        console.log("success");
                        contact_name.current.value = '';
                        contact_phone.current.value = '';
                        contact_email.current.value = '';
                        document.getElementById("show_lat").setAttribute('value', '');
                        document.getElementById("show_lng").setAttribute('value', '');

                    }
                })
                .catch(err => {
                    alert(err.response.data['message']);
                })
        }
    }



    useEffect(() => {
        validateUser();
        // console.log(user_id);
    }, [user_id]);



    return (
        <div className='global-container'>
            <Navbar page={'add'} />
            <div className="addcontact-body-container" id="add_body">
                <div className="addcontact-form-container">
                    <p>Add Contact</p>
                    <div className="addcontact-group">
                        <label className="add-contact-label">Name:</label>
                        <input type="text" ref={contact_name} className="addcontact-input" required />
                    </div>
                    <div className="addcontact-group">
                        <label className="add-contact-label">Phone Number:</label>
                        <input type="text" ref={contact_phone} className="addcontact-input" required />
                    </div>
                    <div className="addcontact-group">
                        <label className="add-contact-label">Email:</label>
                        <input type="Email" ref={contact_email} className="addcontact-input" required />
                    </div>
                    <div className="addcontact-group">
                        <label className="add-contact-label">Status:</label>
                        <select ref={contact_status} id={"status_select"} className="addcontact-input">
                            <option value="Single  ">Single </option>
                            <option value="Married">Married</option>
                            <option value="Separated ">Separated </option>
                            <option value="Divorced ">Divorced </option>
                            <option value="Widowed ">Widowed </option>
                        </select>
                    </div>
                    <div className="showlocation-group">
                        <label className="add-contact-label">Location:</label>
                        <div>
                            <input ref={contact_lat} id={'show_lat'} className="location-show" readOnly />
                            <input ref={contact_lng} id={'show_lng'} className="location-show" readOnly />
                            <button className="pick-contact-btn" onClick={() => {
                                document.getElementById("add_body").style.display = "none";
                                document.getElementById("map_container").style.display = "block";
                            }}>Pick</button>
                        </div>
                    </div>
                    <button className="add-contact-btn" onClick={() => { addContactFunction() }}>AddContact</button>
                </div>
            </div>
            <PickLocation />
        </div>
    );
};


export default AddContact;
