export const traductorLevels = (levelName) => {
  switch (levelName) {
    case "Level One":
      return "Nivel Uno";
    case "Level Two":
      return "Nivel Dos";
    case "Level Three":
      return "Nivel Tres";
    case "Level Four":
      return "Nivel Cuatro";
    default:
      return levelName;
  }
} 