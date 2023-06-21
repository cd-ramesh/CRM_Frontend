import { userFields, userType } from "../constant";

export function fetchDisabledTicketFields(){
    
    const disabledFields = {
        title: false,
        description: false,
        priority: false,
        requester: true,
        assignee: true,
        status: true
    }
    const type = localStorage.getItem(userFields.userType);

    if(type === userType.customer) return disabledFields;
    disabledFields.status = false;
    if(type === userType.engineer) return disabledFields;
    disabledFields.assignee = false;
    return disabledFields;
}