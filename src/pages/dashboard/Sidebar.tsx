import React from "react";
import {Nav} from "react-bootstrap";
import {FaHome, FaChartBar, FaCog, FaTable} from "react-icons/fa";

const Sidebar: React.FC = () => {
    // @ts-ignore
    const homeIcon = <FaHome/>
    // @ts-ignore
    const analyticIcon = <FaChartBar/>
    // @ts-ignore
    const reportIcon = <FaTable/>
    // @ts-ignore
    const settingsIcon = <FaCog/>

    return (
        <div className="bg-light border-end vh-100 p-3" style={{width: "230px"}}>
            <h5 className="fw-bold mb-4">Menu</h5>
            <Nav className="flex-column gap-2">
                <Nav.Link href="#">{homeIcon} Dashboard</Nav.Link>
                <Nav.Link href="#">{analyticIcon} Analytics</Nav.Link>
                <Nav.Link href="#">{reportIcon} Reports</Nav.Link>
                <Nav.Link href="#">{settingsIcon} Settings</Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;
