const userType = {
    customer: "CUSTOMER",
    engineer: "ENGINEER",
    admin: "ADMIN"
}

const userFields = {
    name: "name",
    userId: "userId",
    email: "email",
    password: "password", 
    userType: "userType",
    userStatus: "userStatus",
    jwtToken: "jwtToken"
}

const userStatus = {
    approved: "APPROVED",
    pending: "PENDING",
    rejected: "REJECTED"
}

const ticketStatus = {
    open: "OPEN",
    closed: "CLOSED",
    inprogress: "INPROGRESS",
    blocked: "BLOCKED"
}

module.exports = {userType, userFields, userStatus, ticketStatus};