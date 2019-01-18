import React from "react";
import axios from "axios";


export default class TutorProfile extends React.Component {
    state = {

    }

    componentDidMount = () => {
        this.getInfo();
    }

    getInfo = () => {
        console.log("getInfo");
        let obj = {
            typeId: 0,
            login: {
                username: "john123",
                password: "123456"
            },
            name: "John Smith",
            rate: 20,
            rating: 4,
            availability: ["Monday", "Tuesday"],
            bio: "asdfksdjflaskdjflsdjf",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDphtIVX-WHoArx-drzMWzNOpVh1S82bvZ16WvsK3wzJRH8M9",
            subject: ["Math", "Chemistry"],
            city: "Torrance",
            contact: {
                phoneNumber: 3109853673,
                email: "john@example.com"
            }
        }

        axios.post("/save", obj)
            .then(data => {
                console.log(data);
            })
    }

    render() {
        return (
            <div>
                <h1>Profile</h1>
            </div>
        )
    }
}