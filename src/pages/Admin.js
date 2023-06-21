import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/sidebar";
import { userType, userFields }  from "../constant";
import { getAllTickets, updateTicketById } from "../api/Tickets.api";
import { Cards } from "../components/cards/card";
import { Table } from "../components/table/table";
import { UpdateModal } from "../components/modal/modal";


function Admin(){

    const [tickets, setTickets] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState({});

    const name = localStorage.getItem(userFields.name);
    const type = localStorage.getItem(userFields.userType);

    const rowEvents = {
        onClick: (e, row, rowIndex)=>{
            setShowModal(true);
            setSelectedTicket(row);
        }
    }

    function onUpdateTicket(e){
        const name = e.target.name;
        const value = e.target.value;
        selectedTicket[name] = value;
        setSelectedTicket({...selectedTicket});
    }

    function onSaveTicket(e){
        e.preventDefault();
        console.log(selectedTicket);
        updateTicketById(selectedTicket)
        .then((res)=>{
            setShowModal(false);
            window.location.href = "/admin";
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    function closeModal(){
        setShowModal(false);
        setSelectedTicket({});
    }

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
                <Table tickets={tickets} rowEvents = {rowEvents}/>
                <UpdateModal show = {showModal} closeModal = {closeModal} ticket = {selectedTicket} onUpdateTicket = {onUpdateTicket} onSaveTicket = {onSaveTicket}/>
            </div>
        </div>
    );
}

export default Admin;