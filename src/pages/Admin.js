import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/sidebar";
import { userType, userFields }  from "../constant";
import { getAllTickets, updateTicketById } from "../api/Tickets.api";
import { Cards } from "../components/cards/card";
import { Table } from "../components/table/ticketsTable";
import { UpdateModal } from "../components/modal/ticketModal";
import { getAllUsers, updateUserById } from "../api/Users.api";
import { UsersTable } from "../components/table/usersTable";
import { UpdateUserModal } from "../components/modal/userModal";



function Admin(){

    const [tickets, setTickets] = useState([]);
    const [showTicketModal, setShowTicketModal] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState({});

    const [users, setUsers] = useState([]);
    const [showUserModal, setShowUserModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    const name = localStorage.getItem(userFields.name);
    const type = localStorage.getItem(userFields.userType);

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
            window.location.href = "/admin";
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    function closeTicketModal(){
        setShowTicketModal(false);
        setSelectedTicket({});
    }

    ///////////////////////////////////

    const usersRowEvents = {
        onClick: (e, row, rowIndex)=>{
            setShowUserModal(true);
            setSelectedUser(row);
        }
    }

    function onUpdateUser(e){
        const name = e.target.name;
        const value = e.target.value;
        selectedUser[name] = value;
        setSelectedUser({...selectedUser});
    }

    function onSaveUser(e){
        e.preventDefault();
        console.log(selectedUser);
        updateUserById(selectedUser)
        .then((res)=>{
            setShowUserModal(false);
            window.location.href = "/admin";
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    function closeUserModal(){
        setShowUserModal(false);
        setSelectedUser({});
    }

    useEffect(()=>{
        getAllUsers()
        .then((res)=>{
            setUsers(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
        
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
                <UsersTable users={users} rowEvents = {usersRowEvents}/>
                <UpdateUserModal show = {showUserModal} closeModal = {closeUserModal} user = {selectedUser} onUpdateUser = {onUpdateUser} onSaveUser = {onSaveUser}/>
                <hr/>
                <Table tickets={tickets} rowEvents = {ticketsRowEvents}/>
                <UpdateModal show = {showTicketModal} closeModal = {closeTicketModal} ticket = {selectedTicket} onUpdateTicket = {onUpdateTicket} onSaveTicket = {onSaveTicket}/>
            </div>
        </div>
    );
}

export default Admin;