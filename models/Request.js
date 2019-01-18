var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RequestSchema = new Schema({
    day: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    customerId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    tutorId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    status: {               //open, accepted, declined,past
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }, 
    rated: {
        type: Boolean,
        default: false
    },
    comment: {
        type: String,
        required: true
    },
});

var Request = mongoose.model("Request", RequestSchema);

module.exports = Request;