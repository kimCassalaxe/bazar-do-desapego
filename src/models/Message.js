const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Message extends Model {}
  Message.init({
    messageId: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      field: 'message_id'
    },
    conversationId: {
      type: DataTypes.STRING(36),
      field: 'conversation_id'
    },
    senderId: {
      type: DataTypes.STRING(36),
      field: 'sender_id'
    },
    content: {
      type: DataTypes.TEXT
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
    tableName: 'messages',
    timestamps: false
  });

  return Message;
};