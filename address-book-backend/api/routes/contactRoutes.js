
'use strict';
module.exports = function (app) {
    var contactHandler = require('../controllers/contactController.js');
    // todoList Routes
    app.route('/add-contact').post(contactHandler.addContact);
    app.route('/get-contacts').post(contactHandler.getContactsByUserId);
    app.route('/delete-contact').post(contactHandler.deleteContact);
    
};