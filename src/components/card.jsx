import React from "react";
import "./card.component.css";

export default function CardPokemon(props) {
  const styles = {
    backgroundColor: props.color,
  };
  return (
    <div className="cardpoke colpoke-4" style={styles}>
      <div className="card-head">
        <div className="card-head-title">
          <span># {props.id}</span>
          <h5>{props.name}</h5>
          <div className="description-poke">
            <div className="text-vertical">
              <h6>Pokemon</h6>
            </div>
            <div>
              <span>Hp:{props.base.HP}</span>
              <span>Ataque:{props.base.Attack}</span>
              <span>Defensa:{props.base.Defense}</span>
              <span>Velocidad:{props.base.Speed}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body-poke">
        <img src={props.image} alt="pokemon" />
        <div className="footer-text">
          <span>{props.nameJapones}</span>
        </div>
      </div>
    </div>
  );
}
