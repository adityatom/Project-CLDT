// import primaryRoutes
var wordSearch = require('../controllers/wordSearch');

/**
 * This defines the constructor for the primary route class
 * @param {String} data
 * @param {object} config
 */
   var _app, _command, _word, _config
 function PrimaryRoutes(data, config) {
    _app     = data[0];
    _command = data[1];
    _word    = data[2];
    _config  = config;
 }

/**
 * This defines the function to detect the command type route and call feature
 * accordingly
 */

 PrimaryRoutes.prototype.route = ()=> {
    if(_app && _app == _config.APP) {

      switch(_command) {
         case _config.COMMANDS.DEFINITIONS:
            wordSearch.displayDefinitions(_word);
            break;
      }
    }
 };

//  exporting the class
module.exports = PrimaryRoutes;