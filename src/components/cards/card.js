import {Card} from "react-bootstrap"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { calcStatusCount } from "../../utils/calcStatusCount";

export function Cards(props){
    const {tickets} = props;
    const ticketStatusCount = calcStatusCount(tickets);
    
    return (
        <div className="row text-center d-flex justify-content-center">
            <Card className="m-3" style={{ width: '16rem', backgroundColor: "#e2efff", border: "2px solid #9fb9cc" }}>
                <Card.Body>
                <Card.Title><i className="bi bi-file-earmark-text"></i> OPEN</Card.Title>
                <hr/>
                <div className="row d-flex align-items-center">
                    <div className="col">
                        <h2>{ticketStatusCount.OPEN}</h2>
                    </div>
                    <div className="col">
                        <div style={{width: "70px"}}>
                            <CircularProgressbar styles={buildStyles({pathColor: "#1864ab", trailColor: "#b0c8e8"})} value={(100*ticketStatusCount.OPEN)/tickets.length}/>
                        </div>  
                    </div>
                </div> 
                </Card.Body>
            </Card>
            <Card className="m-3" style={{ width: '16rem', backgroundColor: "#fff3cd", border: "2px solid #c6a62f"}}>
                <Card.Body>
                <Card.Title><i className="bi bi-hourglass-split"></i> IN PROGRESS</Card.Title>
                <hr/>
                <div className="row d-flex align-items-center">
                    <div className="col">
                        <h2>{ticketStatusCount.INPROGRESS}</h2>
                    </div>
                    <div className="col">
                        <div style={{width: "70px"}}>
                            <CircularProgressbar styles={buildStyles({pathColor: "#b08e29", trailColor: "#d4c384"})} value={(100*ticketStatusCount.INPROGRESS)/tickets.length}/>
                        </div>  
                    </div>
                </div> 
                </Card.Body>
            </Card>
            <Card className="m-3" style={{ width: '16rem', backgroundColor: "#d4edda", border: "2px solid #7dbf87" }}>
                <Card.Body>
                <Card.Title><i className="bi bi-check-circle"></i> CLOSED</Card.Title>
                <hr/>
                <div className="row d-flex align-items-center">
                    <div className="col">
                        <h2>{ticketStatusCount.CLOSED}</h2>
                    </div>
                    <div className="col">
                        <div style={{width: "70px"}}>
                            <CircularProgressbar styles={buildStyles({pathColor: "#417f51", trailColor: "#a3c9a8"})} value={(100*ticketStatusCount.CLOSED)/tickets.length}/>
                        </div>  
                    </div>
                </div> 
                </Card.Body>
            </Card>
            <Card className="m-3" style={{ width: '16rem', backgroundColor: "#f8d7da", border: "2px solid #cc6e74" }}>
                <Card.Body>
                <Card.Title><i className="bi bi-exclamation-circle"></i> BLOCKED</Card.Title>
                <hr/>
                <div className="row d-flex align-items-center">
                    <div className="col">
                        <h2>{ticketStatusCount.BLOCKED}</h2>
                    </div>
                    <div className="col">
                        <div style={{width: "70px" }}>
                            <CircularProgressbar styles={buildStyles({pathColor: "#a43842", trailColor: "#d6b5b5"})} value={(100*ticketStatusCount.BLOCKED)/tickets.length}/>
                        </div>  
                    </div>
                </div> 
                </Card.Body>
            </Card>
        </div>
    );
}