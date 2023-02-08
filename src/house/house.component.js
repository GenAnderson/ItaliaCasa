import "./house.module.scss";

function HouseComponent({ house }) {
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

  return (
    <li class="house__item" key={id}>
      <img class="house__image" src={img} />
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
        <a href={link} target="_blank">
          Site→
        </a>
      </div>
    </li>
  );
}

export default HouseComponent;
