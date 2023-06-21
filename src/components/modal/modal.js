import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal.css';
import { fetchDisabledFields } from '../../utils/fetchDisabledFields';

export function UpdateModal(props) {

    const ticket = props.ticket;
    const disabledFields = fetchDisabledFields();

    return (
        <Modal
            show={props.show}
            backdrop="static"
        >
            <Modal.Header>
                <Modal.Title>Ticket ID: {ticket._id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>Title</span>
                        <input className="px-2 ip" type="text" name="title" disabled={disabledFields.title}
                        defaultValue={ticket.title} style={{width: "20rem"}} onChange={props.onUpdateTicket}/>
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>Priority</span>
                        <input className="px-2 ip" type="number" name="ticketPriority" disabled={disabledFields.priority}
                        defaultValue={ticket.ticketPriority} autoComplete="off" onChange={props.onUpdateTicket} />
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>Requester</span>
                        <input className="px-2 ip" type="text" name="requester" disabled={disabledFields.requester} 
                        defaultValue={ticket.requester} autoComplete="off" onChange={props.onUpdateTicket} />
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>Assignee</span>
                        <input className="px-2 ip" type="text" name="assignee" disabled={disabledFields.assignee}
                        defaultValue={ticket.assignee} autoComplete="off" onChange={props.onUpdateTicket}/>
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>Status</span>
                        <input className="px-2 ip" type="text" name="ticketStatus" disabled={disabledFields.status}
                        defaultValue={ticket.ticketStatus} autoComplete="off" onChange={props.onUpdateTicket}/>
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>Description</span>
                        <textarea className="px-2 ip" name="description" disabled={disabledFields.description}
                        defaultValue={ticket.description} cols="40" onChange={props.onupdateTicket}/> 
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.onSaveTicket}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
    );
}


