// src/models/index.js
const sequelize = require('../config/db'); // Garanta que este caminho aponta para o arquivo que inicializa o Sequelize

// 1. Importa as funções geradoras dos modelos
const createUserModel = require('./User');
const createlikeModel = require('./Like');
const createFollowModal = require('./Follow');
const createCommentModel = require('./Comment');
const createProductModel = require('./Product');
const createMessageModel = require('./Message');
const createCategoryModel = require('./Category');
const createProductImageModel = require('./ProductImage');
const createNotificationModel = require('./Notification');
const createConversationModel = require('./Conversation');
const createConversationParticipantModel =  require('./ConversationParticipant');


// 2. Inicializa os modelos de facto, passando a instância do sequelize
const User = createUserModel(sequelize);
const Like = createlikeModel(sequelize);
const Follow = createFollowModal(sequelize);
const Comment = createCommentModel(sequelize);
const Message = createMessageModel(sequelize);
const Product = createProductModel(sequelize);
const Category = createCategoryModel(sequelize);
const Notification = createNotificationModel(sequelize);
const Conversation = createConversationModel(sequelize);
const ProductImage = createProductImageModel(sequelize);
const ConversationParticipant = createConversationParticipantModel(sequelize);




// 2. Associações do Produto
Product.belongsTo(User, { foreignKey: 'sellerId', as: 'seller' });
User.hasMany(Product, { foreignKey: 'sellerId', as: 'products' });
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
Category.hasMany(Product, { foreignKey: 'categoryId', as: 'products' });
ProductImage.belongsTo(Product, { foreignKey: 'productId', as: 'product' });
Product.hasMany(ProductImage, { foreignKey: 'productId', as: 'images' });
// 3. Associações de Comentários
Product.hasMany(Comment, { foreignKey: 'productId', as: 'comments' });
Comment.belongsTo(Product, { foreignKey: 'productId', as: 'product' });
User.hasMany(Comment, { foreignKey: 'userId', as: 'comments' });
Comment.belongsTo(User, { foreignKey: 'userId', as: 'author' });
User.belongsToMany(Product, { through: Like, foreignKey: 'userId', otherKey: 'productId', as: 'likedProducts' });
// 4. Associações de Likes (N:N entre User e Product)
Product.belongsToMany(User, { through: Like, foreignKey: 'productId', otherKey: 'userId', as: 'likedByUsers' });
// 5. Associações de Follows (N:N Auto-relacionamento de User)

User.belongsToMany(User, { through: Follow, foreignKey: 'followerId', otherKey: 'followeeId', as: 'following' });
User.belongsToMany(User, { through: Follow, foreignKey: 'followeeId', otherKey: 'followerId', as: 'followers' });

// 6. Associações do Chat (Conversas, Participantes e Mensagens)
Conversation.belongsTo(Product, { foreignKey: 'productId', as: 'product' });
Product.hasMany(Conversation, { foreignKey: 'productId', as: 'conversations' });


Conversation.belongsToMany(User, { through: ConversationParticipant, foreignKey: 'conversationId', otherKey: 'userId', as: 'participants' });
User.belongsToMany(Conversation, { through: ConversationParticipant, foreignKey: 'userId', otherKey: 'conversationId', as: 'conversations' });

Conversation.hasMany(Message, { foreignKey: 'conversationId', as: 'messages' });
Message.belongsTo(Conversation, { foreignKey: 'conversationId', as: 'conversation' });

User.hasMany(Message, { foreignKey: 'senderId', as: 'sentMessages' });
Message.belongsTo(User, { foreignKey: 'senderId', as: 'sender' });

// 7. Associações de Notificações
User.hasMany(Notification, { foreignKey: 'userId', as: 'notifications' });
Notification.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.hasMany(Notification, { foreignKey: 'actorId', as: 'actorNotifications' });
Notification.belongsTo(User, { foreignKey: 'actorId', as: 'actor' });
/**/
// 4. Exporta a conexão e os modelos prontos para serem usados nos controllers
module.exports = {
  sequelize,
  User,
  Category,
  Product,
  ProductImage,
  Comment,
  Like,
  Follow,
  Conversation,
  ConversationParticipant,
  Message,
  Notification
};