const { DataTypes, Model } = require('sequelize');


module.exports = (sequelize)=>{
  class User extends Model {}
  User.init({
    userId: {
    type: DataTypes.STRING(36),
    primaryKey: true,
    allowNull: false,
    field: 'user_id'
  },
  username: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false
  },
  passwordHash: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'password_hash'
  },
  displayName: {
    type: DataTypes.STRING(100),
    field: 'display_name'
  },
  bio: {
    type: DataTypes.TEXT
  },
  avatarUrl: {
    type: DataTypes.STRING(500),
    field: 'avatar_url'
  },
  city: {
    type: DataTypes.STRING(100),
    defaultValue: 'Luanda'
  },
  whatsapp: {
    type: DataTypes.STRING(20)
  },
  followersCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    field: 'followers_count'
  },
  avgRating: {
    type: DataTypes.DECIMAL(3, 2),
    defaultValue: 0.00,
    field: 'avg_rating'
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'created_at'
  }

 
  
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false 
  });

  return User;
};
