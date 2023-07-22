import { useEffect } from "react";
import { useState } from "react";
import { getAllTickets } from "../api/Tickets.api";


function useFetchTickets(){
    const [tickets, setTickets] = useState([]);

    useEffect(()=>{
        getAllTickets()
        .then((res)=>{
            setTickets(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    return tickets;
}

export default useFetchTickets;