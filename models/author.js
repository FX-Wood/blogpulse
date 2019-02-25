const uuid = require('uuid');
'use strict';
module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define('author', {
    name: DataTypes.STRING
  }, {});
  author.beforeCreate((author) => {
    author.id = uuid()
  })
  author.associate = function(models) {
    // associations can be defined here
    models.author.hasMany(models.post)
  };
  return author;
};