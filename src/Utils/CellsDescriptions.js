import React from "react";
import path from "../Assets/tutorial/pathTutorial.png";
import water from "../Assets/tutorial/waterTutorial.png";
import player from "../Assets/tutorial/playerTutorial.png";
import finish from "../Assets/tutorial/finishTutorial.png";
import door from "../Assets/tutorial/doorTutorial.PNG";
import key from "../Assets/tutorial/keyTutorial.PNG";
import conceal from "../Assets/tutorial/concealTutorial.PNG";


const imgBuilder = (img, alt) => (
  <img
    src={img}
    alt={alt}
  />
);

export const elementsDescriptionList = [
  {
    name: "Player",
    description: "Hay 4 personajes distintos que podras elegir en caso de ser usuario, este personaje es el que se guia con las instrucciones se colocan en el display del joystick",
    img: imgBuilder(player, "player")
  },
  {
    name: "Finish",
    description: "Al llegar a esta posicion, el jugador logro el objetivo.",
    img: imgBuilder(finish, "finish")
  },
  {
    name: "Path",
    description: "El pasto indica los lugares por donde nuestro personaje se podra desplazar para cumplir el objetivo.",
    img: imgBuilder(path, "path")
  },
  {
    name: "Water",
    description: "El agua es el camino prohibido, al pisarla, el persona se ahoga y el juego se debe reiniciar.",
    img: imgBuilder(water, "water")
  },
  {
    name: "Door",
    description: "Las puertas son obstaculos dentro del juego, para poder pasar por ellos, si o si necesitaremos una llave, o que esten abiertas",
    img: imgBuilder(door, "door")
  },
  {
    name: "Key",
    description: "Las llaves son objetos coleccionables, que se utilizaran para abrir las puertas que se presenten.",
    img: imgBuilder(key, "key")
  },
  {
    name: "Conceal",
    description: "La tierra es un elemento que debajo puede haber una llave, no obstaculiza.",
    img: imgBuilder(conceal, "conceal")
  }
];

