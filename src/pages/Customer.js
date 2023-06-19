import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/sidebar";
import { userType, userFields }  from "../constant";
import { getAllTickets } from "../api/Tickets.api";
import { Cards } from "../components/cards/card";


function Customer(){

    const [tickets, setTickets] = useState([]);

    const name = localStorage.getItem(userFields.name);
    const type = localStorage.getItem(userFields.userType);

    useEffect(()=>{
        getAllTickets()
        .then((res)=>{
            setTickets(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    if(type !== userType.customer){
        return(
            <div>
                <h1>Unauthorized</h1>
            </div>
        );
    }

    return (
        <div className="row bg-light">
            <div className="col-1">
                <Sidebar/>
            </div>
            <div className="col p-2">
                <h4 className="text-center">Welcome, {name}!</h4>
                <p className="text-center text-muted">Raise tickets, monitor their progress, and stay updated on the status of your inquiries or reported problems.</p>
                <Cards tickets={tickets}/>
            </div>
        </div>
    );
}

export default Customer;