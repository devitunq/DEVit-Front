import Character1 from "../Assets/gameElements/character1.png";
import Character2 from "../Assets/gameElements/character2.png";
import Character3 from "../Assets/gameElements/character3.png";
import Character4 from "../Assets/gameElements/character4.png";

const ANA = { name: "Ana", img: Character1 };
const LIAM = { name: "Liam", img: Character2 };
const ARIEL = { name: "Ariel", img: Character3 };
const JORGE = { name: "Jorge", img: Character4 };

const getCharacterByName = (charName) => {
  switch (charName) {
  case "Ana":
    return ANA;
  case "Liam":
    return LIAM;
  case "Ariel":
    return ARIEL;
  case "Jorge":
  default:
    return JORGE;
  }
}

export { ANA, LIAM, ARIEL, JORGE, getCharacterByName };