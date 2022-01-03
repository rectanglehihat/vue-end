import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Authorization: "test1234",
  },
});

// const config = {
//   baseURL: "https://api-nodejs-todolist.herokuapp.com",
// };

function registerUser(userData) {
  // const url = "http://localhost:3000/signup";
  // return axios.post(url, userData);
  return instance.post("signup", userData);
  // return axios.post(`${config.baseURL}/user/register`, userData);
}

function loginUser(userData) {
  return instance.post("login", userData);
}

export { registerUser, loginUser };
