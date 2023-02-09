import { useContext, useEffect, useState } from "react";
import { allHomesContext } from "../context/housesData.context";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { marker } from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function MapComponent() {
  const { allHomes } = useContext(allHomesContext);
  const { findHome } = useContext(allHomesContext);
  const { findMarker, setFindMarker } = useContext(allHomesContext);

  let markerId;
  const handleMarkerClick = {
    click: (e) => changeMarker(e),
  };

  function changeMarker(e) {
    !e.target._icon.classList.contains("selectMarker")
      ? e.target._icon.classList.add("selectMarker")
      : e.target._icon.classList.remove("selectMarker");

    const markerId = e.sourceTarget.options.id;
    setFindMarker(markerId);
  }

  useEffect(() => {
    allHomes.find((home) => {
      if (findHome === home.id) {
        // console.log(L.Marker._icon.classList.add("selectMarker"));
      }
    });
  }, [findHome, findMarker]);

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

        {allHomes.map((house) => {
          return (
            <Marker
              position={house.coords}
              key={house.id}
              id={house.id}
              eventHandlers={handleMarkerClick}
              // icon={testing}
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
