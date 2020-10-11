import axios from "axios";

const LEVELS_URL = "/api/levels";
const USER_URL = "/api/user"
const HOST_URL = "http://localHost:8080"

const HEADERS = {Authorization : localStorage.getItem("accessToken")}

const getLevelByLevelId = (levelId) =>
  axios.get(`${HOST_URL}${LEVELS_URL}/${levelId}`, {headers : HEADERS});

const getAllByDifficulty = (difficulty) =>
  axios.get(`${HOST_URL}${LEVELS_URL}?difficulty=${difficulty}`, {headers : HEADERS})

const getDifficulties = () =>
  axios.get(`${HOST_URL}${LEVELS_URL}/difficulties`, {headers : HEADERS})

const postLevelSolution = (levelId, solution) =>
  axios.post(`${HOST_URL}${LEVELS_URL}/solve/${levelId}`, solution, {headers : HEADERS});

const getUser = (user, pass) =>
  axios.post(`${HOST_URL}${USER_URL}`, {userName: user, password: pass});

const getGuestPermission = () =>
  axios.get(`${HOST_URL}${LEVELS_URL}/guest`);

export { getLevelByLevelId, postLevelSolution, getAllByDifficulty, getDifficulties, getUser, getGuestPermission };
