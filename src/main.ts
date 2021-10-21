import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import router from "./router";
import store from "./store";
// import axios from "axios";

// vue
const app = createApp(App);

app.use(router);

app.use(store);

// axios
// axios.defaults.baseURL = import.meta.env.VITE_API_URL as string;
// window.axios = axios;
// axios.interceptors.request.use(function (config) {
//   if (store.getters.isAuthenticated) {
//     config.headers.common["Authorization"] = store.getters.token;
//   } else {
//     config.headers.common["Authorization"] = "";
//   }
//   return config;
// });
// axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     // if the error code is 400 it's supposed to be a form error
//     // we want to catch everything that is not a form error and display an error alert
//     if (error.response.status !== 400) {
//       let text;
//       if (error.response.headers["content-type"] === "application/json")
//         text = error.response.data.detail;
//       else text = error.response.statusText;
//       const alert = {
//         type: "error",
//         heading: `Error ${error.response.status}`,
//         message: text,
//       };
//       store.dispatch("createAlert", alert);
//     }
//     return Promise.reject(error);
//   },
// );

// mount
app.mount("#app");
