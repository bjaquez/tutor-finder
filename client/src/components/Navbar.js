import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
    

    render() {
        return (
            <div>
                <Link to="/open-requests" className="badge badge-primary">Open Requests</Link>
                <Link to="/accepted-requests" className="badge badge-primary">Accepted Requests</Link>
                <Link to="/tutor" className="badge badge-primary">Profile</Link>
            </div>
        )
    }
}