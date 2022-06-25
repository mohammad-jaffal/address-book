import { React, useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import axios from 'axios';



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
        contact_lat.current.value = localStorage.getItem('c_lat');
        contact_lng.current.value = localStorage.getItem('c_lng');
    }, [contact_lat, contact_lng]);

    async function addContactFunction() {
        console.log(contact_name.current.value);
        if (contact_name.current.value == "" || contact_phone.current.value == "" || contact_email.current.value == "" || contact_lat.current.value == "") {
            alert('Fill all!');
            console.log(contact_status.current.value);
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
                    }
                })
                .catch(err => {
                    alert(err.response.data['message']);
                })











            localStorage.setItem('c_lat', '');
            localStorage.setItem('c_lng', '');
            document.location.reload();
        }

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
                        <input ref={contact_lat} className="location-show" readOnly />
                        <input ref={contact_lng} className="location-show" readOnly />
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
