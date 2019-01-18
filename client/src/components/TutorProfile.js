import React from "react";
import { Map } from "core-js";
import Navbar from "./Navbar";
import axios from "axios";


export default class TutorProfile extends React.Component {
    state = {
        tutorInfo: { name: "bianca", rate: 20, city: "Hawthorne", subjects: ["Math", "Coding"], contact: { phone: 3105555555, email: "email@email.com" }, bio: "blahblah blah blah", rating: 3 },
        edit: false
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

    editProfileInputs = (name, value) => {
        if (this.state.edit) {
            if (name === "bio") {
                return (
                    <textarea name={name} type="text" value={value} onChange={this.handleInputChange}></textarea>
                )
            } else {
                return (
                    <input name={name} type="text" value={value} onChange={this.handleInputChange} />
                )
            }

        } else if (name === "subjects") {
            return value.map(element => {
                return (
                    <li>{element}</li>
                )
            });

        } else {
            return (
                value
            )
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;

        const tutorInfo = { ...this.state.tutorInfo };

        if (name === "phone" || name === "email") {
            tutorInfo.contact[name] = value
        } else if (name === "subjects") {
            var subjects = value.split(",");
            tutorInfo[name] = subjects;
        } else {
            tutorInfo[name] = value
        }
        this.setState({
            tutorInfo: tutorInfo
        });
    }
    handleEdit = () => {
        this.setState({ edit: true })
    }
    handleSave = () => {
        this.setState({ edit: false });
        //post request to save profile info 
    }
    editSave = () => {
        if (this.state.edit) {
            return (
                <button className="btn btn-success" onClick={this.handleSave}>Save</button>
            )
        } else {
            return (
                <button className="btn btn-info" onClick={this.handleEdit}>Edit Profile</button>
            )
        }
    }

    renderRating = () => {
        var stars = [];
        for (let i = 1; i <= this.state.tutorInfo.rating; i++) {
            stars.push(<i class="fas fa-star"></i>)

        }
        for (let i = this.state.tutorInfo.rating; i < 5; i++) {
            stars.push(<i class="far fa-star"></i>)
        }
        return (
            <div>{stars}</div>
        )

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <Navbar />
                    </div>
                    <div className="col-md-10">
                        <div className="row justify-content-center">
                            <div className="col-md-2">
                                <img className="img-fluid" src='https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png' />
                            </div>
                            <div className="col-md-4">
                                {/* grab info from props */}
                                Name: {this.editProfileInputs("name", this.state.tutorInfo.name)} <br />
                                Rate: {this.editProfileInputs("rate", this.state.tutorInfo.rate)}<br />
                                City: {this.editProfileInputs("city", this.state.tutorInfo.city)}<br />
                                Subjects: {this.editProfileInputs("subjects", this.state.tutorInfo.subjects)} <br />
                                Phone: {this.editProfileInputs("phone", this.state.tutorInfo.contact.phone)}<br />
                                Email: {this.editProfileInputs("email", this.state.tutorInfo.contact.email)}

                            </div>
                            <div className="col-md-1">

                                {this.editSave()}
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                Bio<br />

                                {this.editProfileInputs("bio", this.state.tutorInfo.bio)}
                                <hr />
                            </div>

                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                Rating
                        {this.renderRating()}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}