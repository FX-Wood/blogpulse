'use strict';
const uuid = require('uuid/v4')
module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define('author', {
    name: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (author) => {
        author.id = uuid()
      }
    }
  });
  author.associate = function(models) {
    // associations can be defined here
    models.author.hasMany(models.post)
  };
  return author;
};