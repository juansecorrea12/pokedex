import React, { useState } from "react";
import CardPokemon from "./components/card";
import "./App.css";
import { Container, Row, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import BulbasaurImg from "./images/Bulbasaur.png";
import IvysaurImg from "./images/Ivysaur.png";
import VenusaurImg from "./images/Venusaur.png";
import CharmanderImg from "./images/Charmander.png";
import CharmeleonImg from "./images/Charmeleon.png";
import CharizardImg from "./images/Charizard.png";
import SquirtleImg from "./images/Squirtle.png";
import WartortleImg from "./images/Wartortle.png";
import BlastoiseImg from "./images/Blastoise.png";
import CaterpieImg from "./images/Caterpie.png";
import MetapodImg from "./images/Metapod.png";
import ButterfreeImg from "./images/Butterfree.png";
import WeddleImg from "./images/Weedlw.png";
import kakunaImg from "./images/Kakuna.png";
import BeedrillImg from "./images/beedrill.png";
import PidgeyImg from "./images/Pidgey.png";
import PidgeottoImg from "./images/Pidgeotto.png";
import PidgeotImg from "./images/Pidgeot.png";
import RattataImg from "./images/Rattata.png";
import RaticateImg from "./images/Raticate.png";

export default function App() {
  const [types, setTypes] = useState([
    "Grass",
    "Poison",
    "Fire",
    "Water",
    "Flying",
    "Bug",
    "Normal",
  ]);
  const [pokemons, setPokemons] = useState([
    {
      id: 1,
      name: {
        english: "Bulbasaur",
        japanese: "フシギダネ",
        chinese: "妙蛙种子",
        french: "Bulbizarre",
      },
      type: ["Grass", "Poison"],
      sprite: BulbasaurImg,
      base: {
        HP: 45,
        Attack: 49,
        Defense: 49,
        "Sp. Attack": 65,
        "Sp. Defense": 65,
        Speed: 45,
      },
      color: "rgb(129,208,177)",
    },
    {
      id: 2,
      name: {
        english: "Ivysaur",
        japanese: "フシギソウ",
        chinese: "妙蛙草",
        french: "Herbizarre",
      },
      type: ["Grass", "Poison"],
      sprite: IvysaurImg,
      base: {
        HP: 60,
        Attack: 62,
        Defense: 63,
        "Sp. Attack": 80,
        "Sp. Defense": 80,
        Speed: 60,
      },
      color: "rgb(98,179,183)",
    },
    {
      id: 3,
      name: {
        english: "Venusaur",
        japanese: "フシギバナ",
        chinese: "妙蛙花",
        french: "Florizarre",
      },
      type: ["Grass", "Poison"],
      sprite: VenusaurImg,
      base: {
        HP: 80,
        Attack: 82,
        Defense: 83,
        "Sp. Attack": 100,
        "Sp. Defense": 100,
        Speed: 80,
      },
      color: "rgb(85,158,170)",
    },
    {
      id: 4,
      name: {
        english: "Charmander",
        japanese: "ヒトカゲ",
        chinese: "小火龙",
        french: "Salamèche",
      },
      type: ["Fire"],
      sprite: CharmanderImg,
      base: {
        HP: 39,
        Attack: 52,
        Defense: 43,
        "Sp. Attack": 60,
        "Sp. Defense": 50,
        Speed: 65,
      },
      color: "rgb(224,109,35)",
    },
    {
      id: 5,
      name: {
        english: "Charmeleon",
        japanese: "リザード",
        chinese: "火恐龙",
        french: "Reptincel",
      },
      type: ["Fire"],
      sprite: CharmeleonImg,
      base: {
        HP: 58,
        Attack: 64,
        Defense: 58,
        "Sp. Attack": 80,
        "Sp. Defense": 65,
        Speed: 80,
      },
      color: "rgb(229,70,70)",
    },
    {
      id: 6,
      name: {
        english: "Charizard",
        japanese: "リザードン",
        chinese: "喷火龙",
        french: "Dracaufeu",
      },
      type: ["Fire", "Flying"],
      sprite: CharizardImg,
      base: {
        HP: 78,
        Attack: 84,
        Defense: 78,
        "Sp. Attack": 109,
        "Sp. Defense": 85,
        Speed: 100,
      },
      color: "rgb(221,133,53)",
    },
    {
      id: 7,
      name: {
        english: "Squirtle",
        japanese: "ゼニガメ",
        chinese: "杰尼龟",
        french: "Carapuce",
      },
      type: ["Water"],
      sprite: SquirtleImg,
      base: {
        HP: 44,
        Attack: 48,
        Defense: 65,
        "Sp. Attack": 50,
        "Sp. Defense": 64,
        Speed: 43,
      },
      color: "rgb(148,207,200)",
    },
    {
      id: 8,
      name: {
        english: "Wartortle",
        japanese: "カメール",
        chinese: "卡咪龟",
        french: "Carabaffe",
      },
      type: ["Water"],
      sprite: WartortleImg,
      base: {
        HP: 59,
        Attack: 63,
        Defense: 80,
        "Sp. Attack": 65,
        "Sp. Defense": 80,
        Speed: 58,
      },
      color: "rgb(121,145,205)",
    },
    {
      id: 9,
      name: {
        english: "Blastoise",
        japanese: "カメックス",
        chinese: "水箭龟",
        french: "Tortank",
      },
      type: ["Water"],
      sprite: BlastoiseImg,
      base: {
        HP: 79,
        Attack: 83,
        Defense: 100,
        "Sp. Attack": 85,
        "Sp. Defense": 105,
        Speed: 78,
      },
      color: "rgb(106,142,178)",
    },
    {
      id: 10,
      name: {
        english: "Caterpie",
        japanese: "キャタピー",
        chinese: "绿毛虫",
        french: "Chenipan",
      },
      type: ["Bug"],
      sprite: CaterpieImg,
      base: {
        HP: 45,
        Attack: 30,
        Defense: 35,
        "Sp. Attack": 20,
        "Sp. Defense": 20,
        Speed: 45,
      },
      color: "rgb(109,156,89)",
    },
    {
      id: 11,
      name: {
        english: "Metapod",
        japanese: "トランセル",
        chinese: "铁甲蛹",
        french: "Chrysacier",
      },
      type: ["Bug"],
      sprite: MetapodImg,
      base: {
        HP: 50,
        Attack: 20,
        Defense: 55,
        "Sp. Attack": 25,
        "Sp. Defense": 25,
        Speed: 30,
      },
      color: "rgb(115,161,53)",
    },
    {
      id: 12,
      name: {
        english: "Butterfree",
        japanese: "バタフリー",
        chinese: "巴大蝶",
        french: "Papilusion",
      },
      type: ["Bug", "Flying"],
      sprite: ButterfreeImg,
      base: {
        HP: 60,
        Attack: 45,
        Defense: 50,
        "Sp. Attack": 90,
        "Sp. Defense": 80,
        Speed: 70,
      },
      color: "rgb(145,125,214)",
    },
    {
      id: 13,
      name: {
        english: "Weedle",
        japanese: "ビードル",
        chinese: "独角虫",
        french: "Aspicot",
      },
      type: ["Bug", "Poison"],
      sprite: WeddleImg,
      base: {
        HP: 40,
        Attack: 35,
        Defense: 30,
        "Sp. Attack": 20,
        "Sp. Defense": 20,
        Speed: 50,
      },
      color: "rgb(233,196,93)",
    },
    {
      id: 14,
      name: {
        english: "Kakuna",
        japanese: "コクーン",
        chinese: "铁壳蛹",
        french: "Coconfort",
      },
      type: ["Bug", "Poison"],
      sprite: kakunaImg,
      base: {
        HP: 45,
        Attack: 25,
        Defense: 50,
        "Sp. Attack": 25,
        "Sp. Defense": 25,
        Speed: 35,
      },
      color: "rgb(173,144,42)",
    },
    {
      id: 15,
      name: {
        english: "Beedrill",
        japanese: "スピアー",
        chinese: "大针蜂",
        french: "Dardargnan",
      },
      type: ["Bug", "Poison"],
      sprite: BeedrillImg,
      base: {
        HP: 65,
        Attack: 90,
        Defense: 40,
        "Sp. Attack": 45,
        "Sp. Defense": 80,
        Speed: 75,
      },
      color: "rgb(236,169,17)",
    },
    {
      id: 16,
      name: {
        english: "Pidgey",
        japanese: "ポッポ",
        chinese: "波波",
        french: "Roucool",
      },
      type: ["Normal", "Flying"],
      sprite: PidgeyImg,
      base: {
        HP: 40,
        Attack: 45,
        Defense: 40,
        "Sp. Attack": 35,
        "Sp. Defense": 35,
        Speed: 56,
      },
      color: "rgb(192,138,70)",
    },
    {
      id: 17,
      name: {
        english: "Pidgeotto",
        japanese: "ピジョン",
        chinese: "比比鸟",
        french: "Roucoups",
      },
      type: ["Normal", "Flying"],
      sprite: PidgeottoImg,
      base: {
        HP: 63,
        Attack: 60,
        Defense: 55,
        "Sp. Attack": 50,
        "Sp. Defense": 50,
        Speed: 71,
      },
      color: "rgb(192,138,70)",
    },
    {
      id: 18,
      name: {
        english: "Pidgeot",
        japanese: "ピジョット",
        chinese: "大比鸟",
        french: "Roucarnage",
      },
      type: ["Normal", "Flying"],
      sprite: PidgeotImg,
      base: {
        HP: 83,
        Attack: 80,
        Defense: 75,
        "Sp. Attack": 70,
        "Sp. Defense": 70,
        Speed: 101,
      },
      color: "rgb(192,138,70)",
    },
    {
      id: 19,
      name: {
        english: "Rattata",
        japanese: "コラッタ",
        chinese: "小拉达",
        french: "Rattata",
      },
      type: ["Normal"],
      sprite: RattataImg,
      base: {
        HP: 30,
        Attack: 56,
        Defense: 35,
        "Sp. Attack": 25,
        "Sp. Defense": 35,
        Speed: 72,
      },
      color: "rgb(147,87,162)",
    },
    {
      id: 20,
      name: {
        english: "Raticate",
        japanese: "ラッタ",
        chinese: "拉达",
        french: "Rattatac",
      },
      type: ["Normal"],
      sprite: RaticateImg,
      base: {
        HP: 55,
        Attack: 81,
        Defense: 60,
        "Sp. Attack": 50,
        "Sp. Defense": 70,
        Speed: 97,
      },
      color: "rgb(192,138,70)",
    },
  ]);
  return (
    <Container fluid>
      <Row className="flex-column justify-content-center text-center my-5">
        <div className="filters">
          <select>
            <option key={0} value="Todos">
              Todos
            </option>
            {types.map((type, index) => {
              return (
                <option key={index + 1} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
        <div className="filters d-flex justify-content-center">
          {/* <form>
            <input type="text" value="Charmander" />
          </form> */}
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search Pokemon"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
      </Row>
      <Container fluid>
        <div className="cards">
          {pokemons.map((pokemon) => {
            return (
              <CardPokemon
                id={pokemon.id}
                name={pokemon.name.english}
                nameJapones={pokemon.name.japanese}
                image={pokemon.sprite}
                base={pokemon.base}
                types={pokemon.type}
                color={pokemon.color}
              />
            );
          })}
        </div>
      </Container>
    </Container>
  );
}
