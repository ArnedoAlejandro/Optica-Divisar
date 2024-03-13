import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%", // Usar porcentaje para el ancho
  maxWidth: "650px", // Establecer un ancho máximo
  height: "550px",
  borderRadius: "30px",
  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
};

const center = { lat: -31.408142, lng: -64.189154 };
const center1 = { lat: -31.391102, lng: -64.184458 };
const center2 = { lat: -31.2877243362748, lng: -64.29313541663146 };

const Location = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_LOCATION}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />;
        <Marker position={center1} />;
        <Marker position={center2} />;
      </GoogleMap>
    </LoadScript>
  );
};

export default Location;
