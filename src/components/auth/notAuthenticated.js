
function NotAuthenticated(props){
    return(
        <div className="bg-info vh-100 d-flex justify-content-center align-items-center">
            <div className="text-white text-center">
                <h3>You need to be logged in as {props.route.toLocaleUpperCase()} to access this page</h3>
                <a href="/" className="text-white"><p>Move to Login Page</p></a>
            </div>
        </div>
    )
}

export default NotAuthenticated;