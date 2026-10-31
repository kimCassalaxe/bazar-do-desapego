const { DataTypes, Model } = require('sequelize');

 module.exports = (sequelize)=>{
class Like extends Model {}
  Like.init({
    userId: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      field: 'user_id'
    },
    productId: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      field: 'product_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'created_at'
    }
  }, {
    sequelize,
    tableName: 'likes',
    timestamps: false
  });

  return Like;
}
