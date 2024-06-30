import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../index.css';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import LeafletControlGeocoder from "./Leafletcontrolgeocoder";
import LocationMarker from "./LocationMarker";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import GotoHeadquarterLocation from "./GotoHeadquarterLocation";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const headquarters=[
  {Delhi : [28.7041, 77.1025]},
  {Mumbai : [19.0760,72.8777]},
  {Kolkata : [22.5744, 88.3629]},
  {Hyderabad : [17.4065, 78.4772]}
]

function MyMap({selectedheadquarter, isclicked}) {
  console.log(typeof(selectedheadquarter));

  return (
    <>
      <MapContainer center={[20.6, 85.7]} zoom={10} scrollWheelZoom={false} >
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={headquarters[0].Delhi}>
          <Popup>Headquarter:D-9 complex, Delhi</Popup>
        </Marker>
        <Marker position={headquarters[1].Mumbai}>
          <Popup>Headquarter:M-10 complex, Mumbai</Popup></Marker>
        <Marker position={headquarters[2].Kolkata}>
          <Popup>Headquarter:K-3 complex, Kolkata</Popup>
        </Marker>
        <Marker position={headquarters[3].Hyderabad}>
          <Popup>Headquarter:H-19 complex, Hyderabad</Popup>
        </Marker>
        <LeafletControlGeocoder />
        <LocationMarker/>
        {isclicked && (
          <GotoHeadquarterLocation selectedheadquarter={selectedheadquarter} isclicked={isclicked}/>
        )}
      </MapContainer>
    </>
  );
}

export default MyMap;