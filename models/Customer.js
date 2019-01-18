var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CurtomerSchema = new Schema({
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
    rating: {
        type: Number
    },
    picture: {
        type: String,
        required: true
    },
    pastTutors: [
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

var Customer = mongoose.model("Customer", CurtomerSchema);

module.exports = Customer;