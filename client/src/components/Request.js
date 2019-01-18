import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import moment from "moment";
import "../css/request.css";

export default class Request extends React.Component {
    state = {
        customerName: "Customer Name",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDphtIVX-WHoArx-drzMWzNOpVh1S82bvZ16WvsK3wzJRH8M9",
        date: "01/19/2019",
        time: "00:00",
        duration: 1,
        city: "xxxxxx",
        subject: "math",
        status: "past",          //open, accepted, declined, past
        rated: false,
        rating: 4,
        setRating: 0,
        ratingMsg: false
    }

    componentDidMount = () => {
        //check if it's an accepted request that has past
        let date = new Date;
        date = moment(date).format("YYYY-MM-DD")
        console.log(date);
        if(this.state.status === "accepted" && moment(this.state.date,"MM/DD/YYYY").format("YYYY-MM-DD") < date) {
            console.log("true")
            this.setState({
                status: "past"
            })
        }
    }

    acceptRequest = () => {
        this.setState({
            status: "accepted"
        })
    }

    declineRequest = () => {
        this.setState({
            status: "declined"
        })
    }

    setRating = (r) => {
        this.setState({
            setRating: r,
            rated: true,
            ratingMsg: true
        })
        setTimeout(() => { this.setState({ ratingMsg: false}) }, 2000);
    }

    render() {
        let cardContent;
        if (this.state.status === "open") {
            cardContent =
                <div className="row">
                    <div className="col-md-4">
                        <div className="rating-style">
                            <i class="fa fa-star star-icon"></i>
                            <i class="fa fa-star star-icon"></i>
                            <i class="fa fa-star star-icon"></i>
                            <i class="fas fa-star-half-alt star-icon"></i>
                            <i class="far fa-star star-icon"></i>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row btn-container">
                            <Button className="card-btn" color="primary" onClick={this.acceptRequest}>Accept</Button>
                            <Button className="card-btn" color="danger" onClick={this.declineRequest}>Decline</Button>
                        </div>
                    </div>
                </div>
        }
        else if (this.state.status === "past" && !this.state.rated) {
            cardContent =
                <div className="rating-container">
                    <div class="rating">
                        <input type="radio" id="star5" name="rating" value="5" onClick={()=>{this.setRating(5)}}/><label class="full" for="star5" title="5 stars"></label>
                        <input type="radio" id="star4half" name="rating" value="4.5" onClick={()=>{this.setRating(4.5)}}/><label class="half" for="star4half" title="4.5 stars"></label>
                        <input type="radio" id="star4" name="rating" value="4" onClick={()=>{this.setRating(4)}}/><label class="full" for="star4" title="4 stars"></label>
                        <input type="radio" id="star3half" name="rating" value="3.5" onClick={()=>{this.setRating(3.5)}}/><label class="half" for="star3half" title="3.5 stars"></label>
                        <input type="radio" id="star3" name="rating" value="3" onClick={()=>{this.setRating(3)}}/><label class="full" for="star3" title="3 stars"></label>
                        <input type="radio" id="star2half" name="rating" value="2.5" onClick={()=>{this.setRating(2.5)}}/><label class="half" for="star2half" title="2.5 stars"></label>
                        <input type="radio" id="star2" name="rating" value="2" onClick={()=>{this.setRating(2)}}/><label class="full" for="star2" title="2 stars"></label>
                        <input type="radio" id="star1half" name="rating" value="1.5" onClick={()=>{this.setRating(1.5)}}/><label class="half" for="star1half" title="1.5 stars"></label>
                        <input type="radio" id="star1" name="rating" value="1" onClick={()=>{this.setRating(1)}}/><label class="full" for="star1" title="1 star"></label>
                        <input type="radio" id="starhalf" name="rating" value="half" onClick={()=>{this.setRating(0.5)}}/><label class="half" for="starhalf" title="0.5 stars"></label>
                    </div>
                </div>
        }

        return (
            <Card body className="card-style">
                {/* <CardTitle><p className="title-style">Session Request</p></CardTitle> */}
                <div className="row">
                    <div className="col-md-4">
                        <img className="card-img img-style" src={this.state.picture} />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <p className="name-style">{this.state.customerName}</p>

                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <p className="info-style">Date: {this.state.date}</p>
                                <p className="info-style">City: {this.state.city}</p>
                                <p className="info-style">Subject: {this.state.subject}</p>
                            </div>
                            <div className="col-md-6">
                                <p className="info-style">Time: {this.state.time}</p>
                                <p className="info-style">Duration: {this.state.duration} hr(s)</p>
                            </div>
                        </div>
                    </div>
                </div>
                {cardContent}
                {this.state.ratingMsg ? <p className="msg-style">Thank you!</p> : ""}
            </Card>
        )
    }
}