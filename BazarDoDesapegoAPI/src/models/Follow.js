const { DataTypes, Model } = require('sequelize');

 module.exports = (sequelize)=>{
 class Follow extends Model {}
  Follow.init({
    followerId: {
    type: DataTypes.STRING(36),
    primaryKey: true,
    allowNull: false,
    field: 'follower_id'
  },
  followeeId: {
    type: DataTypes.STRING(36),
    field: 'followee_id'
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'created_at'
  }

  
}, {sequelize,tableName: 'follows',timestamps: false  });
  return Follow;
}
