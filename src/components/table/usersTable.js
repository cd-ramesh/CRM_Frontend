import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import { userStatus, userType } from "../../constant";


export function UsersTable(props){
    const {users, rowEvents} = props;

    const selectType = {
        ADMIN: userType.admin,
        CUSTOMER: userType.customer,
        ENGINEER: userType.engineer
    }

    const selectStatus = {
        APPROVED: userStatus.approved,
        PENDING: userStatus.pending,
        REJECTED: userStatus.rejected
    }
 
    const columns = [
        {dataField: "_id", text: "User ID", filter: textFilter(), align: "center", headerAlign: "center"},
        {dataField: "name", text: "Name", sort: true, align: "center", headerAlign: "center"},
        {dataField: "userId", text: "@Username", align: "center", headerAlign: "center"},
        {dataField: "email", text: "Email", align: "center", headerAlign: "center"},
        {dataField: "userType", text: "User Type", filter: selectFilter({
            options: selectType
        }), align: "center", headerAlign: "center"},
        {dataField: "userStatus", text: "User Status", filter: selectFilter({
            options: selectStatus
        }), align: "center", headerAlign: "center"}
    ];

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 4,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
    });

    const CaptionElement = () => <h4 style={{textAlign: 'center', color: "black"}}>USER RECORDS</h4>;

    return (
        <div className="row">
            <BootstrapTable
            bootstrap4
            striped 
            keyField="_id" 
            data={users} 
            columns={columns} 
            pagination={pagination} 
            filter={filterFactory()}
            rowEvents={rowEvents}
            caption={<CaptionElement/>}/>
        </div>
    );
} 