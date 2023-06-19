import { CSidebar, CSidebarNav, CNavTitle, CNavItem, CSidebarToggler } from '@coreui/react'
import "./sidebar.css"


function Sidebar(){

    function logout(){
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <div>
            <CSidebar unfoldable={true} className="vh-100">
                <CSidebarNav className='p-1'>
                <CNavTitle>CUSTOMER RELATIONSHIP MANAGEMENT</CNavTitle>
                <CNavItem>
                    <div className="my-3 nav-item" onClick={()=>{window.location.href="/admin"}}>
                        <i className="bi bi-house mx-3"></i>
                        Home
                    </div>
                </CNavItem>
                <CNavItem>
                    <div className="my-3 nav-item" onClick={logout}>
                        <i className="bi bi-box-arrow-left mx-3"></i>
                        Logout
                    </div>
                </CNavItem>
                </CSidebarNav>
                <CSidebarToggler/>
            </CSidebar>
        </div>
    )
}

export default Sidebar;

