import axios from 'axios'

const BASE_URL = "http://localhost:8000";

export async function login(data){
    return axios.post(`${BASE_URL}/api/v1/auth/login`,data);
}