// 'use strict';

var Contact = require('../models/contactModel');

exports.addContact = (req, res) => {
  var contact = new Contact(req.body);
    
    contact.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
};

exports.getContactsByUserId = (req, res) => {
    const user_id = req.body.user_id;
    Contact.find({}).where('user_id').equals(String(user_id))
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
  };

  exports.deleteContact = (req, res) => {
    const id = req.body.contact_id;
    console.log(id)
    Contact.findOneAndDelete({_id: id})
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
  };