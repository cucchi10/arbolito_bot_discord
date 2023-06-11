const axios = require("axios");

const axiosService = axios.create();

const get = (url, options = {}) => {
  return axiosService.get(url, { ...options });
};

const post = (url, options = {}) => {
  const { body = {}, ...rest } = options;
  return axiosService.post(url, body, rest);
};

const put = (url, options = {}) => {
  const { body = {}, ...rest } = options;
  return axiosService.put(url, body, rest);
};

const patch = (url, body) => {
  return axiosService.patch(url, body);
};

const del = (url) => {
  return axiosService.delete(url);
};

module.exports = {
  get,
  post,
  put,
  patch,
  del,
};
