import { React, useState, useEffect } from "react";
import ContactItem from "../components/ContactItem";
import Navbar from "../components/Navbar";
import axios from 'axios';




const Home = () => {

    const token = localStorage.getItem('token');
    // console.log("home " + token);


    const [user_id, setUserId] = useState('');
    const [contacts, setContacts] = useState('');


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

    const fetchContacts = async () => {
        try {
            const params = new URLSearchParams();
            params.append('user_id', user_id);

            await axios.post(`http://localhost:3000/get-contacts`,
                params,
                { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
            ).then(res => {

                // if login
                if (res['status'] == 200) {
                    setContacts(res.data);

                }
            })
                .catch(err => {
                    alert(err.response.data['message']);
                })

        }
        catch {

        }
        // check if token is still legit

    }



    useEffect(() => {
        validateUser();
        // console.log(user_id);
        fetchContacts();
    }, []);


    try {
        return (
            <div className='global-container'>
                <Navbar />
                <div className="home-body-container">


                    {contacts.map((value, index) => {
                        return (
                            <ContactItem key={index} />
                        )
                    })}

                </div>
            </div>
        )
    }
    catch (err) {
        // console.log(err)
        // show loading sign while the questions are being loaded
        return (<div className="surveys-container">Loading...</div>);
      }

};

export default Home;
