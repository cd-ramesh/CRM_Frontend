import axios from 'axios'
import { userFields } from '../constant';

const BASE_URL = "https://crm-api-jlzn.onrender.com";

export async function getAllTickets(){
    return axios.get(`${BASE_URL}/api/v1/tickets`,{
        headers:{
            "Authorization" : localStorage.getItem(userFields.jwtToken)
        },
    });
}

export async function updateTicketById(ticket){
    return axios.post(`${BASE_URL}/api/v1/tickets/${ticket._id}`,ticket,{
        headers:{
            "Authorization" : localStorage.getItem(userFields.jwtToken)
        },
    });
}

export async function createTicket(ticket){
    return axios.post(`${BASE_URL}/api/v1/tickets`,ticket,{
        headers:{
            "Authorization" : localStorage.getItem(userFields.jwtToken)
        },
    });
}

