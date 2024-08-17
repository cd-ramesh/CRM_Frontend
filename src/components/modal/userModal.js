import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { userStatus } from '../../constant';

export function UpdateUserModal(props) {

    const user = props.user;

    return (
        <Modal
            show={props.show}
            backdrop="static"
        >
            <Modal.Header>
                <Modal.Title>User ID: {user._id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>Name</span>
                        <input className="px-2 ip" type="text" name="name" disabled
                        defaultValue={user.name} onChange={props.onUpdateUser} style={{border: "1px solid #B2B2B2", color: "#555555"}}/>
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>@Username</span>
                        <input className="px-2 ip" type="text" name="userId" disabled
                        defaultValue={user.userId} onChange={props.onUpdateUser} style={{border: "1px solid #B2B2B2", color: "#555555"}}/>
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>Email</span>
                        <input className="px-2 ip" type="email" name="email" disabled
                        defaultValue={user.email} onChange={props.onUpdateUser} style={{width: "20rem", border: "1px solid #B2B2B2", color: "#555555"}}/>
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>User Type</span>
                        <input className="px-2 ip" type="text" name="userType" disabled 
                        defaultValue={user.userType} onChange={props.onUpdateUser} style={{border: "1px solid #B2B2B2", color: "#555555"}}/>
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>User Status</span>
                        <select className="form-select" name="userStatus" 
                        defaultValue={user.userStatus} onChange={props.onUpdateUser}>
                            <option value={userStatus.approved}>APPROVED</option>
                            <option value={userStatus.pending}>PENDING</option>
                            <option value={userStatus.rejected}>REJECTED</option>
                        </select>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.onSaveUser}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
    );
}


