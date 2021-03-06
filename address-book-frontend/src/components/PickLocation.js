import { React, useMemo, useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";



const PickLocation = () => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyBS8VZXIVu9EOghzUMzzI9kwxq92G7Ckb4" });

    while (!isLoaded) {
        return (
            <div />
        );
    }
    return (
        <Map />
    );
};

export default PickLocation;


function Map() {


    const center = useMemo(() => ({ lat: 33.888630, lng: 35.422281 }), []);

    // save the coordinates and hide the map
    function saveLocation(c_lat, c_lng) {

        document.getElementById("show_lat").setAttribute('value', (Math.round(c_lat * 100) / 100).toFixed(2));
        document.getElementById("show_lng").setAttribute('value', (Math.round(c_lng * 100) / 100).toFixed(2));

        document.getElementById("map_container").style.display = "none";
        document.getElementById("add_body").style.display = "flex";

    }

    return (
        <div className="viewmap-body-container" id="map_container">
            <GoogleMap
                zoom={9}
                center={center}
                mapContainerClassName="map-container"
                onClick={(event) => {
                    saveLocation(event.latLng.lat(), event.latLng.lng())
                }}
            >

            </GoogleMap>

        </div>
    );
}

