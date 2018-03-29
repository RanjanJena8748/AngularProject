const mssql=require('mssql');
const configuration=require('../config/databaseConfig');
const bcrypt=require('bcrypt-nodejs');

module.exports.getUserById=function(id,callback) {
    new mssql.ConnectionPool(configuration.config).connect().then(pool => {
      return pool.query`select * from [user] where userid=`+id
    }).then(result => {
      callback
    }).catch(err => {
      throw err;
        
      // ... error checks
    });
  }

  module.exports.getUserByName=function(username,callback) {
    new mssql.ConnectionPool(configuration.config).connect().then(pool => {
      return pool.query`select * from [user] where username=`+username
    }).then(result => {
      callback
    }).catch(err => {
      throw err;
        
      // ... error checks
    });
  }

  module.exports.comparePassword=function(candidatePassword,hash,callback) {
      bcrypt.compare(candidatePassword,hash, (err,isMatch) => {
          if(err) throw err;
          callback(null,isMatch);
      })
  }