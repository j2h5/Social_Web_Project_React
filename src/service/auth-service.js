import axios from "axios";

const SPRING_URL=process.env.REACT_APP_SPRING_URL;

const register = (username, password) => {
  return axios.post(SPRING_URL + "api/signup", {
    username,
    password
  });
};
const login = (username, password) => {
  return axios
    .post(SPRING_URL + "authenticate", {
      username,
      password
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};
export default AuthService;


