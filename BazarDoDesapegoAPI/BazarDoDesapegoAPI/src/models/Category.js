const { DataTypes, Model } = require('sequelize');
const { READUNCOMMITTED } = require('sequelize/lib/table-hints');

module.exports  = (sequelize)=>{
  class Category extends Model{}
  Category.init({
    categoryId: {
    type: DataTypes.STRING(36),
    primaryKey: true,
    allowNull: false,
    field: 'category_id'
    },
      name: {
      type: DataTypes.STRING(100),
      unique: true
    },
    slug: {
      type: DataTypes.STRING(100),
      unique: true
    },
    icon: {
      type: DataTypes.STRING(50)
    }
  
  
}, {
  sequelize,
  tableName: 'categories',
  timestamps: false});
  return Category;
}
