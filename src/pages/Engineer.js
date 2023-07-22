import Sidebar from "../components/sidebar/sidebar";
import { userFields }  from "../constant";
import { Cards } from "../components/cards/card";
import { Table } from "../components/table/ticketsTable";
import useFetchTickets from "../hooks/fetchTickets";
import useUpdateTickets from "../hooks/updateTickets";
import { UpdateModal } from "../components/modal/ticketModal";



function Engineer(){

    const tickets = useFetchTickets();
    const {ticketsRowEvents, showTicketModal, closeTicketModal, selectedTicket, onUpdateTicket, onSaveTicket} = useUpdateTickets();

    const name = localStorage.getItem(userFields.name);

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
                <Table tickets={tickets} rowEvents = {ticketsRowEvents}/>
                <UpdateModal show = {showTicketModal} closeModal = {closeTicketModal} ticket = {selectedTicket} onUpdateTicket = {onUpdateTicket} onSaveTicket = {onSaveTicket}/>
            </div>
        </div>
    );
}

export default Engineer;