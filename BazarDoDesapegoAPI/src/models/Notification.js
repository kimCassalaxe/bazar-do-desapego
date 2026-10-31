const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Notification extends Model {}
  Notification.init({
    notificationId: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      field: 'notification_id'
    },
    userId: {
      type: DataTypes.STRING(36),
      field: 'user_id'
    },
    actorId: {
      type: DataTypes.STRING(36),
      field: 'actor_id'
    },
    type: {
      type: DataTypes.ENUM('like', 'comment', 'follow', 'message', 'order')
    },
    content: {
      type: DataTypes.TEXT
    },
    relatedId: {
      type: DataTypes.STRING(36),
      field: 'related_id'
    },
    isRead: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_read'
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'created_at'
    }
  }, {
    sequelize,
    tableName: 'notifications',
    timestamps: false
  });

  return Notification;
};