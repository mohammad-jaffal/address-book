import { React, useState, useEffect } from "react";
import ContactItem from "../components/ContactItem";
import Navbar from "../components/Navbar";
import axios from 'axios';




const Home = () => {

    // const token = localStorage.getItem('token');
    // console.log("home " + token);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzQHRlc3QuY29tIiwiZnVsbE5hbWUiOiJ0ZXN0MyIsIl9pZCI6IjYyYjcwYWU4ZWQ4MDVjOWNkMjA5ZTA4ZCIsImlhdCI6MTY1NjE2NDg3M30.RsB2jEIMKYJVVR2bmp7z7aGIPQp4iW5ezkDlgqLU4OM'
    
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
                console.log(res.data)
            }
        })
            .catch(err => {
                console.log(err);
            })


      }




    // async function validateUser() {
    //     await axios.post(`http://localhost:3000/tasks`,
    //         {
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //             'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzQHRlc3QuY29tIiwiZnVsbE5hbWUiOiJ0ZXN0MyIsIl9pZCI6IjYyYjcwYWU4ZWQ4MDVjOWNkMjA5ZTA4ZCIsImlhdCI6MTY1NjE2NDg3M30.RsB2jEIMKYJVVR2bmp7z7aGIPQp4iW5ezkDlgqLU4OM',

    //         }
    //     ).then(res => {
    //         console.log(res.data)
    //         if (res['status'] == 200) {

    //         }
    //     })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }


    useEffect(() => {
        validateUser();
    }, []);



    return (
        <div className='global-container'>
            <Navbar />
            <div className="home-body-container">
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
            </div>
        </div>
    );

};

export default Home;
