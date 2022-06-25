import { React, useMemo } from "react";
import Navbar from "../components/Navbar";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";



const ViewLocation = () => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyBS8VZXIVu9EOghzUMzzI9kwxq92G7Ckb4" });

    if (!isLoaded) {
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
    return (
        <div className='global-container'>
            <Navbar />
            <div className="viewmap-body-container">
                <GoogleMap
                    zoom={10}
                    center={{ lat: 33.888630, lng: 35.422281 }}
                    mapContainerClassName="map-container"
                >
                    <Marker
                        position={{ lat: 33.888630, lng: 35.822281 }}
                    />
                </GoogleMap>
            </div>
        </div>
    );
}