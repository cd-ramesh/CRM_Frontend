import { useEffect, useState } from "react";
import { login, register } from "../api/Auth.api";
import { userFields, userType } from "../constant";

function Auth(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("CUSTOMER");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const [isRegistered, setIsRegistered] = useState(true);

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
        if(e.target.name === userFields.name)
            setName(e.target.value);
        else if(e.target.name === userFields.email)
            setEmail(e.target.value);        
        else if(e.target.name === userFields.userId)
            setUserId(e.target.value);   
        else if(e.target.name === userFields.password)
            setPassword(e.target.value);
        else
            setType(e.target.value);
    }

    function onRegister(e){
        e.preventDefault();
        setMessage("");
   
        const registerDetails = {name, email, userId, password, userType: type};
        register(registerDetails)
        .then(res=>{
            setIsError(false);
            setMessage("Sign up successful.");
            setIsRegistered(true);
        })
        .catch(err=>{
            setIsError(true);
            setMessage(err.response.data.message);
        })
    }
    

    function onLogin(e){
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
            console.log(err);
            setMessage(err.response.data.message);
        })
    }

    function clearState(){
        setName("");
        setEmail("");
        setUserId("");
        setPassword("");
        setType("CUSTOMER");
        setMessage("");
        setIsError(false);
    }

    function toggle(){
        clearState();
        setIsRegistered(!isRegistered);
    }


    return (
        <div>
            { (isRegistered) ?
            <div className="vh-100 d-flex justify-content-center align-items-center bg-info">
                <div style={{width: "30rem"}} className="card p-3 rounded-3 shadow text-center">
                    <h4 className="text-info mb-3">SIGN IN</h4>
                    <form onSubmit={onLogin}>
                        <div className="input-group mb-2">
                            <input onChange={onFormChange} className="form-control" type="text" name="userId" placeholder="User ID" value={userId}/>
                        </div>
                        <div className="input-group mb-3">
                            <input onChange={onFormChange} className="form-control" type="password" name="password" placeholder="Password" value={password}/>
                        </div>
                        <p className="text-info" style={{cursor: "pointer"}} onClick={toggle}>Don't have an account ? Register</p>
                        <div>
                            <input className="btn btn-outline-info pt-1 pb-1 mb-2" type="submit" value="Submit"/>
                        </div>
                    </form>
                    <div style={isError ? {color: "#dc3545"}: {color: "#28a745"}}>{message}</div>
                </div>
            </div> :
            <div className="vh-100 d-flex justify-content-center align-items-center bg-info">
                <div style={{width: "30rem"}} className="card p-3 rounded-3 shadow text-center">
                    <h4 className="text-info mb-3">SIGN UP</h4>
                    <form onSubmit={onRegister}>
                        <div className="input-group mb-2">
                            <input onChange={onFormChange} className="form-control" type="text" name="name" placeholder="Name" value={name}/>
                        </div>
                        <div className="input-group mb-2">
                            <input onChange={onFormChange} className="form-control" type="email" name="email" placeholder="Email" value={email}/>
                        </div>
                        <div className="input-group mb-2">
                            <input onChange={onFormChange} className="form-control" type="text" name="userId" placeholder="User ID" value={userId}/>
                        </div>
                        <div className="input-group mb-2">
                            <input onChange={onFormChange} className="form-control" type="password" name="password" placeholder="Password" value={password}/>
                        </div>
                        <select onChange={onFormChange} className="form-select mb-3" name="userType">
                            <option selected>{userType.customer}</option>
                            <option>{userType.engineer}</option>
                            <option>{userType.admin}</option>
                        </select>
                        <p className="text-info" style={{cursor: "pointer"}} onClick={toggle}>Already have an account ? Login</p>
                        <div>
                            <input className="btn btn-outline-info pt-1 pb-1 mb-2" type="submit" value="Submit"/>
                        </div>
                    </form>
                    <div style={isError ? {color: "#dc3545"}: {color: "#28a745"}}>{message}</div>
                </div>
            </div>
            }
        </div>
    );
}

export default Auth;