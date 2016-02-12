/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    connection: 'someMongodbServer',
    attributes: {
      first_name: 'string',
      last_name: 'string',
      email: {
        type: 'email'
      }
    }
  }
};