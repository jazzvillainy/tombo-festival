import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
    width: '100%',
    height: '280px',
    borderRadius: '20px',
    zIndex: '40',
};

const center = {
    lat: 4.822570,
    lng: 7.002437,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDmtnsjfZ9d05k_i7ao0tZjCzEbNJy2CtI">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={17} options={{styles: 'bgColor: white'}}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map;
