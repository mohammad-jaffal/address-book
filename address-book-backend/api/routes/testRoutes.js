
'use strict';
module.exports = function(app) {
    var testController = require('../controllers/testController');
    // todoList Routes
    app.route('/testroute')
        .post(testController.allThings);
 
};