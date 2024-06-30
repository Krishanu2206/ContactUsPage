import { useEffect } from "react";
import L from "leaflet";
import { useMap } from 'react-leaflet';
import "leaflet-control-geocoder/dist/Control.Geocoder.js";

function LeafletControlGeocoder() {
  const map = useMap();

  useEffect(() => {
    // initialize the geocoder
    let geocoder = L.Control.Geocoder.nominatim();

    // add the geocoder control to the map
    const geocoderControl = L.Control.geocoder({
      query: "",
      placeholder: "Search here...",
      defaultMarkGeocode: false,
      geocoder
    })
      .on("markgeocode", function (e) {
        let latlng = e.geocode.center;
        L.marker(latlng)
          .addTo(map)
          .bindPopup(e.geocode.name)
          .openPopup();
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);

    // Return a cleanup function
    return () => {
      // This code will run when the component unmounts or before the effect re-runs
      map.removeControl(geocoderControl);
    };
  }, [map]); // Dependency array

  return null;
}

export default LeafletControlGeocoder;