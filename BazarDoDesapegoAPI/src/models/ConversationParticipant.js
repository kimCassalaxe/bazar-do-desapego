const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class ConversationParticipant extends Model {}
  ConversationParticipant.init({
    conversationId: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      field: 'conversation_id'
    },
    userId: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      field: 'user_id'
    }
  }, {
    sequelize,
    tableName: 'conversation_participants',
    timestamps: false
  });

  return ConversationParticipant;
};