import { React, useMemo } from "react";
import Navbar from "../components/Navbar";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";



const ViewLocation = () => {
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

export default ViewLocation;



function Map() {
    const center = useMemo(()=>({ lat: 33.888630, lng: 35.422281 }), []);
    return (
        <div className='global-container'>
            <Navbar />
            <div className="viewmap-body-container">
                <GoogleMap
                    zoom={9}
                    center={center}
                    mapContainerClassName="map-container"
                >
                    <Marker
                        position={{ lat: 33.344584, lng: 35.422281 }}
                    />
                </GoogleMap>
                
            </div>
        </div>
    );
}