export const AUTH_TOKEN = "mud-token";
export const BASE_URL = "http://mud-app.herokuapp.com/api";

export const getAuthHeaders = () => {
  let token = localStorage.getItem(AUTH_TOKEN);
  return {
    Authorization: `Token ${token}`
  };
};

export const theme = {
  main: "#990066",
  darkMain: "#54354A",
  lightMain: "#C1C4BB",
  errorLight: "#FCD6CF",
  errorStrong: "#CC4F47"
};
