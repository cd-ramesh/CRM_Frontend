import { useLocation } from "react-router-dom";
import { userFields } from "../constant";
import NotAuthenticated from "../components/auth/notAuthenticated";
import NotAuthorized from "../components/auth/notAuthorized";


function Check(props){
    const type = localStorage.getItem(userFields.userType);
    const location = useLocation();
    const route = location.pathname.slice(1);
    
    if(!type){
        return(
            <div>
                <NotAuthenticated route = {route}/>
            </div>
        )
    }

    if(type.toLocaleLowerCase() !== route.toLocaleLowerCase()){
        return(
            <div>
                <NotAuthorized type = {type}/>
            </div>
        )
    }

    return <div>{props.children}</div>
    
}

export default Check;