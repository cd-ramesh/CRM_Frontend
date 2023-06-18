import { useEffect, useState } from "react";
import { login } from "../api/Auth.api";
import { userFields, userType } from "../constant";

function Auth(){

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        const token = localStorage.getItem(userFields.jwtToken);
        if(!token) return;

        const type = localStorage.getItem(userFields.userType);
        if(type === userType.admin)
            window.location.href = "/admin";
        else if(type === userType.customer)
            window.location.href = "/customer";
        else
            window.location.href = "/engineer";
    },[]);




    function onFormChange(e){
        if(e.target.name === userFields.userId)
            setUserId(e.target.value);
        else
            setPassword(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault(); 
        setMessage("");
        const loginDetails = {userId, password};
        login(loginDetails)
        .then(res=>{
            setIsError(false);
            setMessage("Sign in successful.");
            console.log(res);

            localStorage.setItem(userFields.name,res.data.name);
            localStorage.setItem(userFields.userId,res.data.userId);
            localStorage.setItem(userFields.email,res.data.email);
            localStorage.setItem(userFields.jwtToken,res.data.jwtToken);
            localStorage.setItem(userFields.userType,res.data.userType);
            localStorage.setItem(userFields.userStatus,res.data.userStatus);

            window.location.href = "/";
        }) 
        .catch(err=>{
            setIsError(true);
            setMessage(err.response.data.message);
        })
    }


    return (
        <div className="vh-100 d-flex justify-content-center align-items-center bg-info">
            <div style={{width: "30rem"}} className="card p-3 rounded-3 shadow text-center">
                <h4 className="text-info mb-3">SIGN IN</h4>
                <form onSubmit={onSubmit}>
                    <div className="input-group mb-2">
                        <input onChange={onFormChange} className="form-control" type="text" name="userId" placeholder="User ID" value={userId}/>
                    </div>
                    <div className="input-group mb-3">
                        <input onChange={onFormChange} className="form-control" type="password" name="password" placeholder="Password" value={password}/>
                    </div>
                    <div>
                        <input className="btn btn-outline-info pt-1 pb-1 mb-2" type="submit" value="Submit"/>
                    </div>
                </form>
                <div style={isError ? {color: "#dc3545"}: {color: "#28a745"}}>{message}</div>
            </div>
        </div>
    );
}

export default Auth;