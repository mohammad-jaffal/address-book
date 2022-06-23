
'use strict';
module.exports = function(app) {
    var contactController = require('../controllers/contactController');
    // todoList Routes
    app.route('/contactroute')
        .post(contactController.allThings);
 
};