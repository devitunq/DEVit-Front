import axios from "axios";

const LEVELS_URL = "/api/levels";
const USER_URL = "/api/user"
const HOST_URL = "http://localHost:8080"

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  config.headers.Authorization = token ? token : '';
  return config
});

const getLevelByLevelId = (levelId) =>
  axios.get(`${HOST_URL}${LEVELS_URL}/${levelId}`);

const getAllByDifficulty = (difficulty) =>
  axios.get(`${HOST_URL}${LEVELS_URL}?difficulty=${difficulty}`)

const getDifficulties = () =>
  axios.get(`${HOST_URL}${LEVELS_URL}/difficulties`);

const postLevelSolution = (levelId, solution) =>
  axios.post(`${HOST_URL}${LEVELS_URL}/solve/${levelId}`, solution);

const getUser = (user, pass) =>
  axios.post(`${HOST_URL}${USER_URL}`, {userName: user, password: pass});

const getGuestPermission = () =>
  axios.get(`${HOST_URL}${LEVELS_URL}/guest`);

export { getLevelByLevelId, postLevelSolution, getAllByDifficulty, getDifficulties, getUser, getGuestPermission };
