import axios from "axios";

export const getItem = (url) => {
  // this method is created once and it used and access for all API call
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};
