import { allHomesContext } from "../context/housesData.context";
import { useContext } from "react";

import "./house.module.scss";
function HouseComponent({ house }) {
  const { setFindHome } = useContext(allHomesContext);
  const { allHomes } = useContext(allHomesContext);

  const {
    id,
    img,
    price,
    size,
    energy,
    internet,
    pv,
    ac,
    hospital,
    vet,
    market,
    notes,
    link,
    active,
  } = house;

  function yesOrNo(status) {
    if (status === "no") {
      return "❌";
    } else if (status === "yes") {
      return "✔️";
    } else if (status === "?") {
      return "❓";
    }
  }

  function homeClickHandler(event) {
    const houseClass = event.currentTarget;
    const houseId = +houseClass.id;

    allHomes.forEach((home) => {
      if (houseId === home.id) {
        home.active = true;
      } else if (houseId === home.id && home.active === true) {
        home.active = false;
      } else if (houseId !== home.id) {
        home.active = false;
      }
    });

    setFindHome(houseId);
  }

  return (
    <div
      class={`${active === true ? "shadow" : "house__item"}`}
      key={id}
      id={id}
      onClick={homeClickHandler}
    >
      <li>
        <img class="house__image" src={img} alt={notes} />
        <div class="house__Container">
          <div>
            <span class="house__icon">🏆</span>
            <span class="house__value">{id}</span>
          </div>
          <div>
            <span class="house__icon">💲</span>
            <span class="house__value">{price.toLocaleString("en-US")}</span>
          </div>
          <div>
            <span class="house__icon">🏡</span>
            <span class="house__value">{size}</span>
          </div>
          <div>
            <span class="house__icon">⚡️</span>
            <span class="house__value">{energy}</span>
          </div>
        </div>
        <div class="house__details">
          <div class="house__ipa">
            <p>{yesOrNo(internet)}Internet</p>
            <p>{yesOrNo(pv)}PV</p>
            <p>{yesOrNo(ac)}A/C</p>
          </div>
          <div class="house__emergencies">
            <p>{hospital} km Hospital</p>
            <p>{vet} km Vet</p>
            <p>{market} km Market</p>
          </div>
        </div>

        <span class="house__notes">
          <em>Notes: {notes}</em>
        </span>
        <div class="house__posting">
          <a href={link} target="_blank" rel="noreferrer">
            Site→
          </a>
        </div>
      </li>
    </div>
  );
}

export default HouseComponent;
