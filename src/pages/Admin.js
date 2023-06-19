
import Card from "../components/card/card";
import Sidebar from "../components/sidebar/sidebar";
import { userFields }  from "../constant";

function Admin (){

    const name = localStorage.getItem(userFields.name);

    return (
        <div className="row bg-light">
            <div className="col-1">
                <Sidebar/>
            </div>
            <div className="col p-2">
                <h4 className="text-center">Welcome, {name}!</h4>
                <p className="text-center text-muted">Streamline ticket management and improve customer satisfaction.</p>
            </div>
            <div className="row">
                {/* <Card/> */}
            </div>
        </div>
    );
}

export default Admin;