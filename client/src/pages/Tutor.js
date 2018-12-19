import React from "react";

import TutorProfile from "../components/TutorProfile";
import Request from "../components/Request";


export default class Tutor extends React.Component {
    state = {

    }

    render() {
        return (
            <div>
                <TutorProfile/>
                <Request />
            </div>
        )
    }
}