import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


const Login = () => {

    async function loginFunction() {
        var email = document.getElementById("li_email").value;
        var password = document.getElementById("li_password").value;
        if (email == "" || password == "") {
            alert('Fill All')
        } else {
            
            const params = new URLSearchParams();
            params.append('email', email);
            params.append('password', password);

            // const params = new URLSearchParams();
            // params.append('email', email);
            // params.append('password', password);
            await axios.post(`http://localhost:3000/auth/sign_in`, params, {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}).then(res => {
                // if login
                if (res['status'] == 200) {
                    console.log('noice')
                    // save access token in local storage for later use
                    // localStorage.setItem('token', res.data['access_token'])
                    // document.location.href = '/';
                }
            })
                .catch(err => {
                    console.log(err.response.data)
                })

        }











        // document.location.href = "./home";
    }

    return (
        <div className='global-container'>
            <div className="login-body-container">
                <div id="login_form" className="login-form-container">
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" id="li_email" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" id="li_password" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <button className='li-btn' onClick={() => { loginFunction() }}>Login</button>
                    </div>
                    <div className="form-group">
                        <Link to={"./signup"}>Create account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Login;
