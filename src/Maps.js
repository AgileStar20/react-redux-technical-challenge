import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon
} from "react-google-maps";
import Test from "../src/GEOJSON.json";

const API_KEY = "AIzaSyDf-yIqxErTkbWzKhLox7nAANnrfDIY190";
const Map_Url = "https://maps.googleapis.com/maps/api/js?";
const Cordinatess = Test.features.map(ll => {
  return ll.geometry.coordinates.map(kk => {
    return { lat: kk[1], lng: kk[0] };
  });
});

console.log(Cordinatess);

// const Cordinates = Test.features[0].geometry.coordinates;
// const reversedCoords = Cordinates.map(item => {
//   return { lat: item[1], lng: item[0] };
// });
// console.log(reversedCoords);

const MyMapComponent = compose(
  withProps({
    googleMapURL: `${Map_Url}key=${API_KEY}`,
    loadingElement: <div style={{ height: `100%`, width: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={9}
    defaultCenter={{ lng: 153.29237339772322, lat: -27.897575560605485 }}
  >
    {props.isMarkerShown && (
      <Marker
        position={{ lng: 153.29237339772322, lat: -27.897575560605485 }}
      />
    )}

    {Cordinatess.map(item => {
      return (
        <div>
          <Marker
            position={{ lng: 153.29237339772322, lat: -27.897575560605485 }}
          />
          <Polygon
            path={item}
            options={{
              fillColor: "#000",
              fillOpacity: 0.4,
              strokeColor: "#000",
              strokeOpacity: 1,
              strokeWeight: 1
            }}
          />
        </div>
      );
    })}
  </GoogleMap>
));

export default MyMapComponent;
