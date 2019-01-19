import React from "react";

import Request from "../components/Request";
import Navbar from "../components/Navbar"

export default class AcceptedRequest extends React.Component {
    state = {

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <Navbar />
                    </div>
                    <div className="col-md-10">
                        <Request />
                    </div>
                </div>
            </div>
        )
    }
}