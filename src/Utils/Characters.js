import Character1 from "../Assets/gameElements/character1.png";
import Character2 from "../Assets/gameElements/character2.png";
import Character3 from "../Assets/gameElements/character3.png";
import Character4 from "../Assets/gameElements/character4.png";
import Character1l from "../Assets/gameElements/character1l.png";
import Character2l from "../Assets/gameElements/character2l.png";
import Character3l from "../Assets/gameElements/character3l.png";
import Character4l from "../Assets/gameElements/character4l.png";


const ANA = { name: "Ana", img: { right: Character1, left: Character1l } };
const LIAM = { name: "Liam", img: { right: Character2, left: Character2l } };
const ARIEL = { name: "Ariel", img: { right: Character3, left: Character3l } };
const JORGE = { name: "Jorge", img: { right: Character4, left: Character4l } };

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