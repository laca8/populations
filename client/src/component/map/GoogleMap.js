import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "50%",
  height: "605px",
};

const center = {
  lat: 30,
  lng: 31,
};
const GoogleMaps = () => {
  //AIzaSyAg1LJW595lOTelTJGwWZMHUunI-RsCdKk

  return (
    <LoadScript googleMapsApiKey="AIzaSyAg1LJW595lOTelTJGwWZMHUunI-RsCdKk">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};
export default GoogleMaps;
