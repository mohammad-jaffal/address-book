import React from "react";
import { Link } from 'react-router-dom';


const Signup = () => {

    function signupFunction() {
        document.location.href = "./home";
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
