import axios from "axios";

const LEVELS_URL = "/api/levels";

export const getLevelByLevelId = (levelId) =>
  axios.get(`http://localHost:8080/${LEVELS_URL}/${levelId}`);
