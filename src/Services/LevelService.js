import axios from "axios";

const LEVELS_URL = "/api/levels";

const getLevelByLevelId = (levelId) =>
  axios.get(`http://localHost:8080/${LEVELS_URL}/${levelId}`);

const getAllByDifficulty = (difficulty) =>
  axios.get(`http://localHost:8080/${LEVELS_URL}?difficulty=${difficulty}`)

const postLevelSolution = (levelId, solution) =>
  axios.post(`http://localHost:8080/${LEVELS_URL}/solve/${levelId}`, solution);

export { getLevelByLevelId, postLevelSolution, getAllByDifficulty };
