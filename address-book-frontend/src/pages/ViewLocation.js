import { React, useMemo, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import axios from 'axios';
import { Link } from "react-router-dom";



const ViewLocation = () => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyBS8VZXIVu9EOghzUMzzI9kwxq92G7Ckb4" });


    const token = localStorage.getItem('token');


    // check if user logged in via jwt controller
    const validateUser = async () => {
        // check if token is still legit
        await axios("http://localhost:3000/profile", {
            method: 'POST',
            headers: {
                Authorization: 'JWT ' + token,
                Accept: 'application/x-www-form-urlencoded',
            },

        }).then(res => {

            if (res['status'] == 200) {
                console.log("legit")
            }
        })
            .catch(err => {
                document.location.href = "./";
            })
    }

    useEffect(() => {
        validateUser();
    }, []);


    while (!isLoaded) {
        return (
            <div className='global-container'>
                {/* <Navbar /> */}
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <Map />
    );
};


export default ViewLocation;


var contact_lng = Number(localStorage.getItem('lng'));
var contact_lat = Number(localStorage.getItem('lat'));

function Map() {

    // console.log(contact_lng + ' - ' + contact_lat);

    const center = useMemo(() => ({ lat: 33.888630, lng: 35.422281 }), []);

    setTimeout(() => {
        document.getElementById("back_to_home").style.display = "block";
    }, 500);



    return (
        <div className='global-container' id="home_map_container">
            {/* <Navbar /> */}
            <div className="viewmap-body-container">
                <GoogleMap
                    zoom={9}
                    center={center}
                    mapContainerClassName="map-container"
                >
                    <MarkerF position={{ lat: contact_lat, lng: contact_lng }} />
                </GoogleMap>

            </div>

            <Link to={-1}><button className="back-btn" id="back_to_home" style={{ display: "none" }}>Back</button></Link>
        </div>
    );
}