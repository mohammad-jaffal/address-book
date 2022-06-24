// import React from "react";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Login = () => {



    return (
        <div className='body-container'>
            <div id="login_form" className="login-form-container">
                {/* go back to previous page if he cancels login */}

                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" id="li_email" className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" id="li_password" className="form-control" required />
                </div>
                <div className="form-group">
                    <button className='li-btn' onClick={()=>{}}>Login</button>
                </div>
                <div className="form-group">
                    <a href=''>Don't have account?</a>
                </div>
            </div>
        </div>
    );
};


export default Login;
