var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TutorSchema = new Schema({
    typeId: {
        type: Boolean,
        required: true
    },
    login: {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    name: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    availability: [
        String
    ],
    bio: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    subject: [
        String
    ],
    city: {
        type: String,
        required: true
    },
    contact: {
        phoneNumber: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    requests: [
        Schema.Types.ObjectId
    ]
});

var Tutor = mongoose.model("Tutor", TutorSchema);

module.exports = Tutor;