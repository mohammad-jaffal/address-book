import React from "react";



const Login = () => {

    function loginFunction (){
        document.location.href="./home";
    }

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
                    <button className='li-btn' onClick={()=>{loginFunction()}}>Login</button>
                </div>
                <div className="form-group">
                    <a href='./signup'>Don't have account?</a>
                </div>
            </div>
        </div>
    );
};


export default Login;
