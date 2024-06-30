import React, { useState, useEffect } from "react";
import { Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from "leaflet";
const mylocation = new Icon({
  iconUrl : "/currentlocation.png",
  iconSize : [50,50]
})

 function LocationMarker() {
    let [location, setLocation] = useState(null);
    const map=useMap();

    useEffect(() => {
    try {
    map.locate().on("locationfound", function (e) {
      setLocation(e.latlng);
      console.log(e.latlng);
      map.flyTo(e.latlng, 17);
      });
      //   if(navigator.geolocation){
      //   navigator.geolocation.getCurrentPosition((position)=>{
      //       setAccuracy(position.coords.accuracy);
      //   setLocation({
      //       lat: position.coords.latitude,
      //       lng: position.coords.longitude
      //   })
      //   console.log(location);
      //   console.log(position.coords.accuracy);
      //   if(position.coords.accuracy > 10){
      //       console.log("the accuracy is bad")
      //   }
      //   map.flyTo([location.lat, location.lng], ZOOMLEVEL, {animate:true, duration:2})
      //   },
      //   (e)=>{
      //       console.log(e);
      //   },
      //   {enableHighAccuracy:true}
      //   )
      // }
        
    } catch (error) {
        console.log(error);
    }
      
    }, [map]);

    return location=== null ? null : (
      <Marker position={location} icon={mylocation}>
        <Popup>
            Your current location
        </Popup>
      </Marker>
    );
  }

export default LocationMarker;