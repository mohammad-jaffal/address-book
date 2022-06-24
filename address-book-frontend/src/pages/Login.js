import React from "react";
import { Link } from 'react-router-dom';



const Login = () => {

    function loginFunction() {
        document.location.href = "./home";
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
