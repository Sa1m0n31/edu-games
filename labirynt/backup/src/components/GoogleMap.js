import React, { useRef } from "react";
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import credentials from "../static/credentials";

const GoogleMaps = (props) => {
    const przedszkoleMarker = useRef(null);
    const map = useRef(null);

    const mapStyles = {
        width: '100%',
        height: '350px'
    };

    return <div id="googleMap">
        <Map
            ref={map}
            google={props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={
                {
                    lat: 52.39596677593731,
                    lng: 17.077032605620907
                }
            }
        >

            <Marker
                ref={przedszkoleMarker}
                name="Przedszkole Nauki i Sztuki"
            />
            <InfoWindow
                google={props.google}
                map={this}
                marker={przedszkoleMarker}
                visible={true}
            >
                <h3 className="infoWindow__header">
                    Przedszkole nauki i sztuki
                </h3>
            </InfoWindow>


        </Map>
    </div>
}

export default GoogleApiWrapper({
    apiKey: credentials.GOOGLE_MAPS_API_KEY
})(GoogleMaps);
