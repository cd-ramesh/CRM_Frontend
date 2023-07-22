import { useEffect } from "react";
import { useState } from "react";
import { getAllUsers } from "../api/Users.api";


function useFetchUsers(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getAllUsers()
        .then((res)=>{
            setUsers(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    return users;
}

export default useFetchUsers;