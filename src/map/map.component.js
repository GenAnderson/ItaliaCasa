import { useRef } from "react";
import { useContext, useEffect } from "react";
import { allHomesContext } from "../context/housesData.context";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });

const defaultIcon = new L.Icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [35, 55],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function MapComponent() {
  const { allHomes } = useContext(allHomesContext);
  const { findHome } = useContext(allHomesContext);
  const { setFindMarker } = useContext(allHomesContext);

  const popupRef = useRef(null);

  const handleMarkerClick = {
    click: (e) => changeMarker(e),
  };

  function changeMarker(e) {
    // !e.target._icon.classList.contains("selectMarker")
    //   ? e.target._icon.classList.add("selectMarker")
    //   : e.target._icon.classList.remove("selectMarker");

    const markerId = e.sourceTarget.options.id;
    setFindMarker(markerId);
  }

  useEffect(() => {
    allHomes.forEach((home) => {
      // console.log(findHome, home.id);
      if (findHome === home.id) {
        home.active = true;
      } else if (findHome === home.id && home.active === true) {
        home.active = false;
      } else if (findHome !== home.id) {
        home.active = false;
      }
    });
    // console.log(findHome);

    // const popup = popupRef.current;

    // console.log(popup);
  }, [findHome, allHomes]);

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
              icon={house.active ? greenIcon : defaultIcon}
            >
              <Popup ref={popupRef}>{`🏆${
                house.id
              }  💲${house.price.toLocaleString("en-US")}`}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
