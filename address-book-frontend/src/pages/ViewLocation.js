import {React, useMemo} from "react";
import Navbar from "../components/Navbar";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";



const ViewLocation = () => {



    return (
        <div className='global-container'>
            <Navbar/>
            <div className="viewmap-body-container"> 
            MAP
            </div>
        </div>
    );
};


export default ViewLocation;
