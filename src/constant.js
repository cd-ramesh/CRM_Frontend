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

module.exports = {userType, userFields};