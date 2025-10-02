import React from "react";
import { Table } from "react-bootstrap";

const DataTable: React.FC = () => {
  return (
    <div className="table-responsive">
      <Table hover striped bordered className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Email</th>
            <th>Status</th>
            <th>Last Active</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Alice</td><td>alice@mail.com</td><td>Active</td><td>2 mins ago</td></tr>
          <tr><td>2</td><td>Bob</td><td>bob@mail.com</td><td>Inactive</td><td>1 hr ago</td></tr>
          <tr><td>3</td><td>Charlie</td><td>charlie@mail.com</td><td>Active</td><td>Yesterday</td></tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
