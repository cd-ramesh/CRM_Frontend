import Sidebar from "../components/sidebar/sidebar";
import { userFields }  from "../constant";
import { Cards } from "../components/cards/card";
import { Table } from "../components/table/ticketsTable";
import useFetchTickets from "../hooks/fetchTickets";
import useUpdateTickets from "../hooks/updateTickets";
import { UpdateModal } from "../components/modal/ticketModal";
import useCreateTickets from "../hooks/createTickets";
import CreateTicketModal from "../components/modal/createTicketModal";



function Engineer(){

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
                <p className="text-center text-muted">Efficiently handle raised tickets, collaborate with your team, and provide timely resolutions to customer issues.</p>
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

export default Engineer;