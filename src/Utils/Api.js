import axios from "axios";

const LEVELS_URL = "/api/levels";
const USER_URL = "/api/user"
const GUEST_URL = "/api/guest"
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
  axios.post(`${HOST_URL}${USER_URL}`, { userName: user, password: pass });


const registerUser = (user, nick, pass, passConfirmation) =>
  axios.post(
    `${HOST_URL}${USER_URL}/register`,
    { userName: user, nick: nick, password: pass, passwordConfirm: passConfirmation }
  );

const getGuestPermission = (nickname) =>
  axios.get(`${HOST_URL}${GUEST_URL}?nick=${nickname}`);

const postLevelSucces = (userName, levelId, stars) =>
  axios.post(`${HOST_URL}${USER_URL}/saveLevel`, { userName: userName, levelID: levelId, stars: stars })

const postLevelScore = (levelID, score, from) =>
  axios.post(`${HOST_URL}${LEVELS_URL}/score/${levelID}`, { score: score, from: from });

const postLevelSolutionUnsaved = (level, actionList) =>
  axios.post(`${HOST_URL}${LEVELS_URL}/solveNewLevel`, { level: level, actionList: actionList });

const postNewLevel = (level) =>
  axios.post(`${HOST_URL}${LEVELS_URL}/save`, level);

const getUserLevelsCompleted = (userName) =>
  axios.get(`${HOST_URL}${USER_URL}/levelsCompleted?userName=${userName}`);

const getCompletionProgress = (userName) =>
  axios.get(`${HOST_URL}${USER_URL}/completionProgress?userName=${userName}`)

const isLevelExistent = (levelId) =>
  axios.get(`${HOST_URL}${LEVELS_URL}/checkName?levelId=${levelId}`);

export {
  getLevelByLevelId, postLevelSolution, getAllByDifficulty,
  getDifficulties, getUser, getGuestPermission, postLevelSucces, getUserLevelsCompleted,
  postLevelScore, getCompletionProgress, registerUser, postLevelSolutionUnsaved,
  postNewLevel, isLevelExistent
};
