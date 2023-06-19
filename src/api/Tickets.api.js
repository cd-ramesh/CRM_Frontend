import axios from 'axios'
import { userFields } from '../constant';

const BASE_URL = "http://localhost:8000";

export async function getAllTickets(){
    return axios.get(`${BASE_URL}/api/v1/tickets`,{
        headers:{
            "Authorization" : localStorage.getItem(userFields.jwtToken)
        },
    });
}