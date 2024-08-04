import { useState } from "react";
import { updateUserById } from "../api/Users.api";
import { userFields } from "../constant";

function useUpdateUsers(){
    const [showUserModal, setShowUserModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});


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
            window.location.href = `/${localStorage.getItem(userFields.userType).toLocaleLowerCase()}`;
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    function closeUserModal(){
        setShowUserModal(false);
        setSelectedUser({});
    }

    return {usersRowEvents, showUserModal, closeUserModal, selectedUser, onUpdateUser, onSaveUser};
}

export default useUpdateUsers;