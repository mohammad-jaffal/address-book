// import React from "react";
import React, { useState, useEffect } from 'react';



const Signup = () => {



    return (
        <div className='body-container'>
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
                    <button className='li-btn'>SignUp</button>
                </div>
                <div className="form-group">
                    <a href=''>Already have account?</a>
                </div>
            </div>
        </div>
    );
};


export default Signup;
