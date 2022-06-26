import { React, useState, useEffect, useRef } from "react";
import ContactItem from "../components/ContactItem";
import Navbar from "../components/Navbar";
import axios from 'axios';




const Home = () => {

    const token = localStorage.getItem('token');
    // console.log("home " + token);

    var [user_id, setUserId] = useState('');
    var [contacts, setContacts] = useState('');
    var [filtered_contacts, setFilteredContacts] = useState('');

    const filter_input = useRef();

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


    // fetch all contacts for a user
    const fetchContacts = async () => {
        try {
            const params = new URLSearchParams();
            params.append('user_id', user_id);

            await axios.post(`http://localhost:3000/get-contacts`,
                params,
                { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
            ).then(res => {

                if (res['status'] == 200) {
                    setContacts(res.data);
                    setFilteredContacts(res.data);
                }
            })
                .catch(err => {
                    alert(err.response.data['message']);
                })

        }
        catch (err) {
            console.log(err);
        }
    }


    // delete a contact by contact id
    async function deleteContact(c_id) {
        console.log('deleteing ' + c_id);

        const params = new URLSearchParams();
        params.append('contact_id', c_id);

        await axios.post(`http://localhost:3000/delete-contact`,
            params,
            { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' })
            .then(res => {
                // if login
                if (res['status'] == 200) {

                    var temp = [];
                    for (var i = 0; i < contacts.length; i++) {
                        if (contacts[i]['_id'] != c_id) {
                            temp[temp.length] = contacts[i];
                        }
                        setContacts(temp);
                        setFilteredContacts(temp);
                    }
                }
            })
            .catch(err => {
                alert(err.response.data['message']);
            })

    }



    // show contacts who's info contains what the user types
    function filterContacts() {
        var temp = []
        setFilteredContacts([])
        for (var contact of contacts) {
            if (
                contact.name.toLowerCase().includes(filter_input.current.value.toLowerCase())
                || contact.email.toLowerCase().includes(filter_input.current.value.toLowerCase())
                || contact.phone_number.toLowerCase().includes(filter_input.current.value.toLowerCase())
                || contact.status.toLowerCase().includes(filter_input.current.value.toLowerCase())
            ) {
                if (contact in temp) { } else {
                    temp[temp.length] = contact;
                    setFilteredContacts(temp);
                }
            }
        }
    }

    // navigate to the map page and show contact marker
    function viewmapFunction(l_lat, l_lng) {
        localStorage.setItem('lat', l_lat);
        localStorage.setItem('lng', l_lng);
        document.location.href = '/view-location';
    }


    useEffect(() => {
        validateUser();
        fetchContacts();
        // console.log(contacts);
    }, [user_id]);

    try {
        return (
            <div className='global-container'>
                <Navbar page={'home'} />
                <input type={"text"} className={"filter-input"} ref={filter_input} placeholder={"Search"} onInput={() => { filterContacts() }} />
                <div className="home-body-container">

                    {filtered_contacts.map((value, index) => {
                        return (
                            <ContactItem
                                key={index}
                                name={value['name']}
                                phone={value['phone_number']}
                                email={value['email']}
                                status={value['status']}
                                contact_id={value['_id']}
                                location={value['location']}
                                del_fn={() => { deleteContact(value['_id']) }}
                                view_fn={() => { viewmapFunction(value['location'][0], value['location'][1]) }}
                            />
                        )
                    })}

                </div>
            </div>
        )
    }

    catch (err) {
        return (<div className='global-container'>
            <Navbar page={'home'} />
            <div className="home-body-container">
                <div className="surveys-container">Loading...</div>
            </div>
        </div>)
    }

};

export default Home;
