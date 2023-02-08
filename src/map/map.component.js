import housesData from "../context/housesData";
import { useContext, useEffect, useState } from "react";
import { allHomesContext } from "../context/housesData.context";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// const greenIcon = new L.Icon({
//   iconUrl:
//     "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

function MapComponent() {
  const { allHomes, setAllHomes } = useContext(allHomesContext);
  // const { findHome, setFindHome } = useContext(allHomesContext);
  const [lat, setLat] = useState("");

  // const handleMarkerClick = {
  //   click: (e) => setLat(e.target._latlng.lat),
  // };

  const handleMarkerClick = {
    click: (e) => setLat(e.target._latlng.lat),
  };

  // findEntry();

  // function findEntry() {
  //   const home = housesData.filter((entry) => {
  //     if (entry.coords.includes(lat)) {
  //       setFindHome(entry);
  //     }
  //   });
  //   console.log("findHome:", findHome);
  // }

  return (
    <div id="map">
      <MapContainer
        center={[40.2137467, 8.8534608]}
        zoom={9}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {housesData.map((house) => {
          return (
            <Marker
              position={house.coords}
              key={house.id}
              eventHandlers={handleMarkerClick}
              // onClick={{ handleMarkerClick }}
            >
              <Popup>{`🏆${house.id}  💲${house.price.toLocaleString(
                "en-US"
              )}`}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
