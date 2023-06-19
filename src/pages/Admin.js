import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/sidebar";
import { userType, userFields }  from "../constant";
import { getAllTickets } from "../api/Tickets.api";
import { Cards } from "../components/cards/card";


function Admin(){

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

    if(type !== userType.admin){
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
                <p className="text-center text-muted">Streamline ticket management and improve customer satisfaction.</p>
                <Cards tickets={tickets}/>
                <hr/>
            </div>
        </div>
    );
}

export default Admin;