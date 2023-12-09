/* eslint-disable lines-between-class-members */
import axios from 'axios';
import UrlPattern from 'url-pattern';

import { navigate } from '@src/services/navigation';
import { getAccessToken } from '@src/services/localStorage';
import { apiConfig } from './config';

const getRequestParams = (pattern, url, params) => {
  const pathParams = pattern.match(url);
  return Object.keys(params)
    .filter((param) => !Object.prototype.hasOwnProperty.call(pathParams, param))
    .reduce(
      (requestParams, param) => {
        requestParams[param] = params[param];
        return requestParams;
      },
      {},
    );
};

const onRequestSuccess = async (config) => {
  const token = await getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers['x-leanlaw-source'] = 'web';
  return config;
};

const onRequestFail = (error) => Promise.reject(error);

const onResponseSuccess = (response) => response;

const onResponseFail = (error) => {
  const status = error.status || error.response.status;
  if (status === 403 || status === 401) {
    navigate('Login');
  }
  const message = error.response.data?.message || error.message || 'Something went wrong';
  return Promise.reject(message)
};


class Api {
  constructor() {
    this.instance = axios.create({ baseURL: apiConfig.baseUrl });
    this.instance.interceptors.request.use(onRequestSuccess, onRequestFail);
    this.instance.interceptors.response.use(onResponseSuccess, onResponseFail);
  }

  products = this.createResource('products/(/:id)');

  get(pattern, params = {}, config = {}) {
    const url = pattern.stringify(params);
    config.params = getRequestParams(pattern, url, params);

    return this.instance.get(url, config).then((response) => response.data);
  }

  post(pattern, params = {}, data, config = {}) {
    const url = pattern.stringify(params);
    return this.instance.post(url, data, config).then((response) => response.data);
  }

  put(pattern, params = {}, data, config = {}) {
    const url = pattern.stringify(params);

    if (data?.headers) {
      config.headers = data.headers;
      delete data.headers;
    }
    return this.instance.put(url, data, config).then((response) => response.data);
  }

  update(pattern, params = {}, data, config = {}) {
    const url = pattern.stringify(params);
    return this.instance.patch(url, data, config);
  }

  delete(pattern, params = {}, config = {}) {
    const url = pattern.stringify(params);
    return this.instance.delete(url, config).then((response) => response.data);
  }

  createResource(path, config = {}) {
    const pattern = new UrlPattern(path);

    return {
      get: (params) => this.get(pattern, params),
      post: (params, data) => this.post(pattern, params, data, config),
      put: (params, data) => this.put(pattern, params, data, config),
      patch: (params, data) => this.update(pattern, params, data, config),
      delete: (params) => this.delete(pattern, params, config),
    };
  }
}

export default new Api();
