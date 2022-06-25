import { React, useMemo, useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";



const PickLocation = () => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyBS8VZXIVu9EOghzUMzzI9kwxq92G7Ckb4" });

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

export default PickLocation;


function Map() {

    var lat_input = document.getElementById('lat_input');
    var lng_input = document.getElementById('lng_input');
    
    const center = useMemo(() => ({ lat: 33.888630, lng: 35.422281 }), []);
    function saveLocation(c_lat, c_lng) {
        console.log(c_lat)
        console.log(c_lng)
        localStorage.setItem('c_lat', c_lat);
        localStorage.setItem('c_lng', c_lng);
        document.location.href='/add-contact';
        
       }

    return (
        <div className='global-container'>
            <Navbar />
            <div className="viewmap-body-container">
                <GoogleMap
                    zoom={9}
                    center={center}
                    mapContainerClassName="map-container"
                    onClick={(event) => {
                        saveLocation(event.latLng.lat(), event.latLng.lng())
                        // console.log("latitide = ", event.latLng.lat());
                        // console.log("longitude = ", event.latLng.lng());
                    }}
                >

                </GoogleMap>

            </div>
        </div>
    );
}

