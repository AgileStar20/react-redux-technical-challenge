import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon
} from "react-google-maps";
import PropTypes from "prop-types";

const API_KEY = "AIzaSyDf-yIqxErTkbWzKhLox7nAANnrfDIY190";
const Map_Url = "https://maps.googleapis.com/maps/api/js?";

const Map = props => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lng: 153.29237339772322, lat: -27.897575560605485 }}
  >
    {/* {props.isMarkerShown && (
      <Marker
        position={{ lng: 153.29237339772322, lat: -27.897575560605485 }}
      />
    )} */}

    {props.ramps.map((item, index) => {
      return (
        <div key={index}>
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
);

Map.propTypes = {
  ramps: PropTypes.array.isRequired
};

const MapContainer = compose(
  withProps({
    googleMapURL: `${Map_Url}key=${API_KEY}`,
    loadingElement: <div style={{ height: `100%`, width: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(Map);

export default MapContainer;
