/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : { type: 'string' },

    age : { type: 'integer' },

    email : { type: 'email' },

    password : { type: 'string' },

    user_id : { type: 'integer' }
  }
};

