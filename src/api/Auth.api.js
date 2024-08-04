import axios from 'axios'

const BASE_URL = "https://crm-api-jlzn.onrender.com";

export async function login(data){
    return await axios.post(`${BASE_URL}/api/v1/auth/login`,data);
}

export async function register(data){
    return await axios.post(`${BASE_URL}/api/v1/auth/register`,data);
}