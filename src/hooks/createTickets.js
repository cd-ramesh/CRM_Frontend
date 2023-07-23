import { useState } from "react";
import { createTicket } from "../api/Tickets.api";
import { userFields } from "../constant";



function useCreateTickets(){
    const [showCreateTicketModal, setShowCreateTicketModal] = useState(false);
    const [newTicket, setNewTicket] = useState({});

    function onCreateNewTicket(e){
        e.preventDefault();
        setShowCreateTicketModal(true);
    }
    
    function onUpdateNewTicket(e){
        const name = e.target.name;
        const value = e.target.value;
        newTicket[name] = value;
        setNewTicket({...newTicket});
        console.log(newTicket);
    }

    function onSaveNewTicket(e){
        e.preventDefault();
        createTicket(newTicket)
        .then((res)=>{
            setShowCreateTicketModal(false);
            window.location.href = `/${localStorage.getItem(userFields.userType).toLocaleLowerCase()}`;
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    function closeCreateTicketModal(){
        setShowCreateTicketModal(false);
        setNewTicket({});
    }

    return {onCreateNewTicket, showCreateTicketModal, closeCreateTicketModal, onUpdateNewTicket, onSaveNewTicket};
}

export default useCreateTickets;