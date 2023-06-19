


export function calcStatusCount(tickets){
    const ticketStatusCount = {
        OPEN: 0,
        INPROGRESS: 0,
        CLOSED: 0,
        BLOCKED: 0
    };
    tickets.forEach(ticket => {
        ticketStatusCount[ticket.ticketStatus]++;        
    });
    return ticketStatusCount;
}