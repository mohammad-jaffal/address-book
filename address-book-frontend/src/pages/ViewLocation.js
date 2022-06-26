import { React, useMemo, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from 'axios';



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
                <Navbar />
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <Map />
    );
};


export default ViewLocation;



function Map() {
    var contact_lng = Number(localStorage.getItem('lng'));
    var contact_lat = Number(localStorage.getItem('lat'));

    console.log(contact_lng + ' - ' + contact_lat);

    const center = useMemo(() => ({ lat: 33.888630, lng: 35.422281 }), []);


    return (
        <div className='global-container'>
            <Navbar />
            <div className="viewmap-body-container">
                <GoogleMap
                    zoom={9}
                    center={center}
                    mapContainerClassName="map-container"
                >

                    <Marker position={{ lat: contact_lat, lng: contact_lng }} />
                </GoogleMap>

            </div>
        </div>
    );
}