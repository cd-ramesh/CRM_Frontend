import axios from 'axios'
import { userFields } from '../constant';

const BASE_URL = "https://crm-api-jlzn.onrender.com";

export async function getAllUsers(){
    return axios.get(`${BASE_URL}/api/v1/users`,{
        headers:{
            "Authorization" : localStorage.getItem(userFields.jwtToken)
        },
    });
}

export async function updateUserById(user){
    return axios.post(`${BASE_URL}/api/v1/users/${user._id}`,user,{
        headers:{
            "Authorization" : localStorage.getItem(userFields.jwtToken)
        },
    });
}

