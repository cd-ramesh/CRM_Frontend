import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/sidebar";
import { userType, userFields }  from "../constant";
import { getAllTickets } from "../api/Tickets.api";
import { Cards } from "../components/cards/card";
import { Table } from "../components/table/table";


function Engineer(){

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

    if(type !== userType.engineer){
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
                <p className="text-center text-muted">Efficiently handle raised tickets, collaborate with your team, and provide timely resolutions to customer issues.</p>
                <Cards tickets={tickets}/>
                <hr/>
                <Table tickets={tickets}/>
            </div>
        </div>
    );
}

export default Engineer;