import { useState } from "react";
import { updateTicketById } from "../api/Tickets.api";
import { userFields } from "../constant";

function useUpdateTickets(){
    const [showTicketModal, setShowTicketModal] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState({});

    const ticketsRowEvents = {
        onClick: (e, row, rowIndex)=>{
            setShowTicketModal(true);
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
            setShowTicketModal(false);
            window.location.href = `/${localStorage.getItem(userFields.userType.toLocaleLowerCase())}`;
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    function closeTicketModal(){
        setShowTicketModal(false);
        setSelectedTicket({});
    }

    return {ticketsRowEvents, showTicketModal, closeTicketModal, selectedTicket, onUpdateTicket, onSaveTicket};
}

export default useUpdateTickets;