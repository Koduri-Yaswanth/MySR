/* eslint-disable no-unsafe-optional-chaining */
import axios, {AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {keys} from '../constants/async-storage-keys';
import {
  getStorageItem,
  removeItem,
  setItem,
} from '../hooks/use-async-storage';
import axiosUtils from '../utils/axiosUtils';
import { BaseURL } from '../context/use-environment';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const config: AxiosRequestConfig = {
  // baseURL : BaseURL,
  timeout: 50000,
  headers: {
    source: 'mobile',
  },
};

const instance = axios.create(config);

instance.interceptors.request.use(
  async config => {
    const envBase = await getStorageItem(keys.savedEnv);
    config.baseURL = envBase.baseUrl;
    return config;
  },
  error => Promise.reject(error),
);

const requestInterceptorId: number = instance.interceptors.request.use(
  (configs: any) => configs,
  (error: any) => Promise.reject(error),
);
export interface AxiosProps {
  type: any;
  url: any;
  params?: any;
  headers?: any;
  transformRequest?: any;
}

/** function that returns an axios call */
export const requestApi = ({
  type,
  url,
  params,
  headers,
  transformRequest,
}: AxiosProps): Promise<AxiosResponse> => {
  instance.interceptors.request.eject(requestInterceptorId);

  instance.interceptors.request.use(
    async (configs: any) => {
      const userData = await getStorageItem(keys.userLoginData);
      const envBase = axiosUtils.getBaseUrl();
      configs = {
        ...configs,
        baseURL: envBase,
        headers: {
          ...configs.headers,
          Authorization: `Bearer ${userData?.accessToken}`,
        },
      };

      return Promise.resolve(configs);
    },
    (error: any) => Promise.reject(error),
  );
  instance.interceptors.request.eject(requestInterceptorId);

  instance.interceptors.request.use(
    (configs: InternalAxiosRequestConfig) => Promise.resolve(configs),
    (error: any) => Promise.reject(error),
  );

  instance.interceptors.request.use(
    (configs: InternalAxiosRequestConfig) => configs,
  );
  instance.interceptors.request.use((configs: InternalAxiosRequestConfig) =>
    Promise.resolve(configs),
  );

  const responseInterceptorId: number = axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: any) => Promise.reject(error),
  );

  axios.interceptors.response.eject(responseInterceptorId);

  axios.interceptors.response.use(
    (response: AxiosResponse) => Promise.resolve(response),
    (error: any) => Promise.reject(error),
  );

  axios.interceptors.response.use((response: AxiosResponse) => response);
  axios.interceptors.response.use((response: AxiosResponse) =>
    Promise.resolve(response),
  );

  return instance.request({
    method: type,
    url: url,
    data: params,
    headers: headers,
    transformRequest: transformRequest,
  });
};

export default instance;
