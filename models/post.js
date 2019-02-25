'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    author_id: DataTypes.INTEGER
  }, {});
  post.associate = function(models) {
    // associations can be defined here
  };
  return post;
};