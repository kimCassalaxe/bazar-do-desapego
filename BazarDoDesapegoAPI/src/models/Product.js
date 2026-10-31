const { DataTypes, Model } = require('sequelize');

 module.exports = (sequelize)=>{
 class Product extends Model {}
  Product.init({
    productId: {
    type: DataTypes.STRING(36),
    primaryKey: true,
    allowNull: false,
    field: 'product_id'
  },
  sellerId: {
    type: DataTypes.STRING(36),
    field: 'seller_id'
  },
  categoryId: {
    type: DataTypes.STRING(36),
    field: 'category_id'
  },
  title: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false
  },
  oldPrice: {
    type: DataTypes.DECIMAL(12, 2),
    field: 'old_price'
  },
  condition: {
    type: DataTypes.ENUM('novo', 'como_novo', 'bom', 'usado', 'para_pecas'),
    defaultValue: 'bom'
  },
  status: {
    type: DataTypes.ENUM('ativo', 'vendido', 'reservado', 'inativo'),
    defaultValue: 'ativo'
  },
  city: {
    type: DataTypes.STRING(100),
    defaultValue: 'Luanda'
  },
  viewsCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    field: 'views_count'
  },
  likesCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    field: 'likes_count'
  },
  commentsCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    field: 'comments_count'
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'created_at'
  }

  
}, {sequelize,tableName: 'products',timestamps: false  });
  return Product;
}
