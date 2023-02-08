import { useContext, useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import MapComponent from "./map/map.component.js";
import HouseComponent from "./house/house.component.js";

import { allHomesContext } from "./context/housesData.context.js";

import "./App.scss";

function App() {
  // const [parent, enableAnimations] = vAutoAnimate();

  const [listRef] = useAutoAnimate();

  const { allHomes, setAllHomes } = useContext(allHomesContext);
  const [sortType, setSortType] = useState("id");

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        rank: "id",
        price: "price",
        hospital: "hospital",
        vet: "vet",
        market: "market",
      };
      const sortProperty = types[type];
      const sorted = [...allHomes].sort(
        (a, b) => a[sortProperty] - b[sortProperty]
      );
      setAllHomes(sorted);
    };
    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="App">
      <div className="sideBar">
        <h1>Casa dolce casa</h1>
        <div className="homesContainer" ref={listRef}>
          <form>
            <select
              class="dropdown"
              onChange={(e) => setSortType(e.target.value)}
            >
              <option>Filter</option>
              <option value="rank">Rank</option>
              <option value="price">Price</option>
              <option value="hospital">Hospital</option>
              <option value="vet">Vet</option>
              <option value="market">Market</option>
            </select>
          </form>
          {allHomes.map((house) => (
            <HouseComponent house={house} key={house.id} />
          ))}
        </div>
      </div>
      <MapComponent />
    </div>
  );
}

export default App;
