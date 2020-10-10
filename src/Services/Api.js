import axios from "axios";

const LEVELS_URL = "/api/levels";

const getLevelByLevelId = (levelId) =>
  axios.get(`http://localHost:8080/${LEVELS_URL}/${levelId}`);

const getAllByDifficulty = (difficulty) =>
  axios.get(`http://localHost:8080/${LEVELS_URL}?difficulty=${difficulty}`)

const getDifficulties = () =>
  axios.get(`http://localHost:8080/${LEVELS_URL}/difficulties`)

const postLevelSolution = (levelId, solution) =>
  axios.post(`http://localHost:8080/${LEVELS_URL}/solve/${levelId}`, solution);

const getUser = (user, passowrd) =>
  axios.post(`http://localHost:8080/${LEVELS_URL}/user`, user, passowrd);

const getGuestPermission = () =>
  axios.get(`http://localHost:8080/${LEVELS_URL}/guest`);

export { getLevelByLevelId, postLevelSolution, getAllByDifficulty, getDifficulties };
