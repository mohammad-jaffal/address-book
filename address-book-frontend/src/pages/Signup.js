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

                // const params = new URLSearchParams();
                // params.append('email', email);
                // params.append('password', password);
                await axios.post(`http://localhost:3000/auth/register`, params, { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }).then(res => {
                    // if login
                    if (res['status'] == 200) {
                        console.log('noice');
                        // save access token in local storage for later use
                        // localStorage.setItem('token', res.data['token'])
                        // document.location.href = "./home";
                    }
                })
                    .catch(err => {
                        alert(err.response.data['message']);
                    })

            }
            else {
                alert('Passwords dont match!')
            }
        }

    }

    return (
        <div className='global-container'>
            <div className="login-body-container">
                <div id="login_form" className="login-form-container">
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" id="su_name" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="Email" id="su_email" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" id="su_password" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input type="password" id="su_confirm_password" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <button className='li-btn' onClick={() => { signupFunction() }}>SignUp</button>
                    </div>
                    <div className="form-group">
                        <Link to={-1}>Already have account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Signup;
