import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


const Signup = () => {

    async function signupFunction() {
        var name = document.getElementById("su_name").value;
        var email = document.getElementById("su_email").value;
        var password = document.getElementById("su_password").value;
        var confirm_password = document.getElementById("su_confirm_password").value;
        if (name == "" || email == "" || password == "" || confirm_password == "") {
            alert('Fill All')
        } else {
            if (password == confirm_password) {

                const params = new URLSearchParams();
                params.append('fullName', name);
                params.append('email', email);
                params.append('password', password);
                // register the new user
                await axios.post(`http://localhost:3000/auth/register`, params, { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }).then(async res => {
                    // if login
                    if (res['status'] == 200) {
                        // automatically log in the user after signup
                        await axios.post(`http://localhost:3000/auth/sign_in`, params, { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }).then(res => {
                            // if login
                            if (res['status'] == 200) {
                                // save access token in local storage for later use
                                localStorage.setItem('token', res.data['token']);
                                document.location.href = "./home";
                            }
                        })
                            .catch(err => {
                                alert(err.response.data['message']);
                            })

                    }
                })
                    .catch(err => {
                        alert("Something went wrong :(");
                    })

            }
            else {
                alert('Passwords dont match!')
            }
        }

    }

    return (
        <div className='global-container'>
            <div className="signup-body-container">
                <div id="login_form" className="login-form-container">
                    <p>Signup</p>
                    <input type="text" id="su_name" className="login-input" placeholder="name" required />
                    <input type="Email" id="su_email" className="login-input" placeholder="Email" required />
                    <input type="password" id="su_password" className="login-input" placeholder="Password" required />
                    <input type="password" id="su_confirm_password" className="login-input" placeholder="Confirm Password" required />
                    <button className='li-btn' onClick={() => { signupFunction() }}>SignUp</button>
                    <Link className="auth-link" to={-1}>Already have account</Link>
                </div>
            </div>
        </div>
    );
};


export default Signup;
