import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


const Login = () => {

    async function loginFunction() {
        var email = document.getElementById("li_email").value;
        var password = document.getElementById("li_password").value;
        if (email == "" || password == "") {
            alert('Fill All');
        } else {
            
            const params = new URLSearchParams();
            params.append('email', email);
            params.append('password', password);

            await axios.post(`http://localhost:3000/auth/sign_in`, params, {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}).then(res => {
                // if login
                if (res['status'] == 200) {
                    // save access token in local storage for later use
                    localStorage.setItem('token', res.data['token'])
                    document.location.href = "./home";
                }
            })
                .catch(err => {
                    alert(err.response.data['message']);
                })

        }
 
    }

    return (
        <div className='global-container'>
            <div className="login-body-container">
                <div id="login_form" className="login-form-container">
                        <p>Login</p>
                        <input type="text" id="li_email" className="login-input" placeholder="Email" required />
                    
                        <input type="password" id="li_password" className="login-input" placeholder="Password" required />
                    
                        <button className='li-btn' onClick={() => { loginFunction() }}>Login</button>
                   
                        <Link className="auth-link" to={"./signup"}>Create account</Link>
                    
                </div>
            </div>
        </div>
    );
};


export default Login;
