import Sidebar from "../components/sidebar/sidebar";
import { userFields }  from "../constant";
import { Cards } from "../components/cards/card";
import { Table } from "../components/table/ticketsTable";
import { UpdateModal } from "../components/modal/ticketModal";
import useFetchTickets from "../hooks/fetchTickets";
import useUpdateTickets from "../hooks/updateTickets";
import useCreateTickets from "../hooks/createTickets";
import CreateTicketModal from "../components/modal/createTicketModal";


function Customer(){

    const tickets = useFetchTickets();
    const {ticketsRowEvents, showTicketModal, closeTicketModal, selectedTicket, onUpdateTicket, onSaveTicket} = useUpdateTickets();

    const {onCreateNewTicket, showCreateTicketModal, closeCreateTicketModal, onUpdateNewTicket, onSaveNewTicket} = useCreateTickets();

    const name = localStorage.getItem(userFields.name);

    return (
        <div className="row bg-light">
            <div className="col-1">
                <Sidebar/>
            </div>
            <div className="col p-2">
                <h4 className="text-center">Welcome, {name}!</h4>
                <p className="text-center text-muted">Raise tickets, monitor their progress, and stay updated on the status of your inquiries or reported problems.</p>
                <Cards tickets={tickets}/>
                <hr/>
                <div className="d-flex justify-content-center">
                    <input className="btn btn-outline-dark pt-1 pb-1 my-2 w-50" type="button" onClick={onCreateNewTicket} value="RAISE TICKET"/>
                </div>
                <CreateTicketModal show = {showCreateTicketModal} closeModal = {closeCreateTicketModal}  onUpdateTicket = {onUpdateNewTicket} onSaveTicket = {onSaveNewTicket}/>
                <Table tickets={tickets} rowEvents = {ticketsRowEvents}/>
                <UpdateModal show = {showTicketModal} closeModal = {closeTicketModal} ticket = {selectedTicket} onUpdateTicket = {onUpdateTicket} onSaveTicket = {onSaveTicket}/>
            </div>
        </div>
    );
}

export default Customer;