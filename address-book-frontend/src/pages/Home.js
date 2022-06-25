import { React, useState, useEffect } from "react";
import ContactItem from "../components/ContactItem";
import Navbar from "../components/Navbar";
import axios from 'axios';




const Home = () => {

    const token = localStorage.getItem('token');
    // console.log("home " + token);



    const [user_id, setUserId] = useState('');
    const [contacts, setContacts] = useState('');
    const [temp_contacts, setTempContacts] = useState('');



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
                    setTempContacts(res.data);
                    // console.log(res.data);
                }
            })
                .catch(err => {
                    alert(err.response.data['message']);
                })

        }
        catch (err) {
            // console.log('henlo');
        }
        // check if token is still legit
    }






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
                    alert('done');
                    console.log(res)
                    // document.location.reload();
                }
            })
            .catch(err => {
                alert(err.response.data['message']);
            })

    }


    useEffect(() => {
        // console.log(user_id);
        validateUser();
        fetchContacts();
    }, [user_id]);

    try {
        return (
            <div className='global-container'>
                <Navbar />
                <div className="home-body-container">
                    {contacts.map((value, index) => {
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
                            />
                        )
                    })}

                </div>
            </div>
        )
    }

    catch (err) {
        // console.log(err)
        // show loading sign while the questions are being loaded
        return (<div className='global-container'>
            <Navbar />
            <div className="home-body-container">
                <div className="surveys-container">Loading...</div>
            </div>
        </div>)
    }

};

export default Home;
