import axios from "axios";
import { Message } from "element-ui";

const request = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}`,
  responseType: "json"
});

request.interceptors.response.use(response => {
  Object.values<string[]>(response.data.errors ?? {})
    .slice(0, 1)
    .map(errors =>
      errors.slice(0, 1).map(error => {
        setTimeout(() => {
          Message.error({
            message: error,
            type: "error",
            showClose: true
          });
        })
      })
    );
  return response;
});

export default request;
