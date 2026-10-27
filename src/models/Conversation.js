const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Conversation extends Model {}
  Conversation.init({
    conversationId: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      field: 'conversation_id'
    },
    productId: {
      type: DataTypes.STRING(36),
      field: 'product_id'
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'updated_at'
    }
  }, {
    sequelize,
    tableName: 'conversations',
    timestamps: false
  });

  return Conversation;
};