const { DataTypes, Model } = require('sequelize');

 module.exports = (sequelize)=>{
class Comment extends Model {}
  Comment.init({
    commentId: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      field: 'comment_id'
    },
    userId: {
      type: DataTypes.STRING(36),
      field: 'user_id'
    },
    productId: {
      type: DataTypes.STRING(36),
      field: 'product_id'
    },
    commentText: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'comment_text'
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'created_at'
    }
  }, {
    sequelize,
    tableName: 'comments',
    timestamps: false
  });

  return Comment;
}
