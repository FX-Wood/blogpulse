'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    name: DataTypes.STRING,
    content: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [20,200],
          msg: "You messed up bad this time!"
        }
      }
    },
    postId: DataTypes.INTEGER
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
    models.comment.belongsTo(models.post)
  };
  return comment;
};