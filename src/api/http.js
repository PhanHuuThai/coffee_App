import axios from "axios";
import { useState } from "react";
import { getTokenFromAsyncStorage } from "./Auth";
import { BASE_URL } from "../../ipconfig";
class Http {
  constructor() {

    const [token, setToken] = useState('');

    const getTokenFromAsyncStorage = async () => {

        try {
            const token = await AsyncStorage.getItem('loginInfor');
            return token ? JSON.parse(token) : "";
            
        } catch (error) {
            console.log("Get Token: ", error)
        }

        
        return token;
    }
        


    this.instance = axios.create({
      baseURL: BASE_URL,
      name: "Dictionary App",
      timeout: 10000,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
    this.instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      ({ response }) => {
        if (response.status === 400) {
          return Promise.reject(response.data);
        }
        const result = { ...response.data, status: response.status };
        return Promise.reject(result);
      }
    );
    this.instance.interceptors.request.use(
      async (config) => {
        const token = await getTokenFromAsyncStorage();
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error.response);
      }
    );
  }
  get(url, config = null) {
    return this.instance.get(url, config);
  }
  post(url, data, config = null) {
    return this.instance.post(url, data, config);
  }
  put(url, data, config = null) {
    return this.instance.put(url, data, config);
  }
  patch(url, data, config = null) {
    return this.instance.patch(url, data, config);
  }
  delete(url, data, config = null) {
    return this.instance.delete(url, {
      data,
      ...config,
    });
  }
}

const http = new Http();

export default http;