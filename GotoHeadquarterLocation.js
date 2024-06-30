import { useEffect } from "react";
import { useMap } from 'react-leaflet';

function GotoHeadquarterLocation({selectedheadquarter, isclicked}) {
  const map=useMap();

  const headquarters={
  "Delhi" : [28.7041, 77.1025],
  "Mumbai" : [19.0760,72.8777],
  "Kolkata" : [22.5744, 88.3629],
  "Hyderabad" : [17.4065, 78.4772]
  }

  const headquarter=headquarters[selectedheadquarter];

  useEffect(()=>{
    try{
    console.log(headquarter);
    if(isclicked){
      map.flyTo(headquarter, 12);
    }
    }catch(e){
      console.log(e);
    }
  }, [map, selectedheadquarter, headquarter, isclicked])
  return null;
}

export default GotoHeadquarterLocation;
