import React from "react";
import Navbar from "../components/Navbar";



const AddContact = () => {
    return (
        <div className='global-container'>
            <Navbar />
            <div className="addcontact-body-container">
                <div className="addcontact-form-container">
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="Email" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Status:</label>
                        <select className="form-control">
                            <option value="Single  ">Single  </option>
                            <option value="Married">Married</option>
                            <option value="Separated ">Separated </option>
                            <option value="Divorced ">Divorced </option>
                            <option value="Widowed ">Widowed </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Location:</label>
                        <button>location picker</button>
                    </div>
                    <div className="form-group">
                        <button>AddContact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AddContact;
