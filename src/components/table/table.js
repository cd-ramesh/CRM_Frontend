import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import { ticketStatus } from "../../constant";

export function Table(props){
    const {tickets} = props;

    const selectOptions = {
        OPEN: ticketStatus.open,
        INPROGRESS: ticketStatus.inprogress,
        CLOSED: ticketStatus.closed,
        BLOCKED: ticketStatus.blocked
    }

    const columns = [
        {dataField: "_id", text: "Ticket ID", filter: textFilter(), align: "center", headerAlign: "center", headerStyle: {width: "15vw"}},
        {dataField: "title", text: "Title", headerAlign: "center", headerStyle: {width: "13vw"}},
        {dataField: "description", text: "Description", headerAlign: "center", headerStyle: {width: "30vw"}},
        {dataField: "ticketPriority", text: "Priority", sort: "true", align: "center", headerAlign: "center", headerStyle: {width: "6vw"}},
        {dataField: "requester", text: "Requester", align: "center", headerAlign: "center"},
        {dataField: "assignee", text: "Assignee", align: "center", headerAlign: "center"},
        {dataField: "ticketStatus", text: "Status", filter: selectFilter({
            options: selectOptions
        }), align: "center", headerAlign: "center"},
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

    return (
        <div className="row">
            <BootstrapTable
            bootstrap4
            striped 
            keyField="_id" 
            data={tickets} 
            columns={columns} 
            pagination={pagination} 
            filter={filterFactory()}/>
        </div>
    );
} 