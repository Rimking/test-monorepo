import Axios from "./base";

export const getUser = () => {
  return Axios.get("/user");
};
