const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * User Schema
 */
//  Full Name, Phone Number, Relationship Status, Email, Location
var contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: [{
        type: String,
        required: true
    }],
    user_id: {
        type: String,
        required: true
    }

});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
