import axios from "axios";

export const api = axios.create({
    baseURL: 'http://192.168.68.157:8083/'
})