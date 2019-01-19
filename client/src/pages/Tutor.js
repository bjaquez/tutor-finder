import React from "react";

import TutorProfile from "../components/TutorProfile";
import Request from "../components/Request";
import Navbar from "../components/Navbar"

export default class Tutor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tutorInfo: {}
        };
      }

    componentWillReceiveProps(props) {
        this.setState({tutorInfo: props.tutorInfo})
    }
    
    render() {
        return (
            <div>
                <p>{this.state.tutorInfo.name}</p>
            </div>
        )

    }
    
}