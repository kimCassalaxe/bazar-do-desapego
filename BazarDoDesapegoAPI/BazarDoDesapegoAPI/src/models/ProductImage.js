const { DataTypes, Model } = require('sequelize');
const { READUNCOMMITTED } = require('sequelize/lib/table-hints');

module.exports  = (sequelize)=>{
class ProductImage extends Model {}
  ProductImage.init({
    imageId: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      field: 'image_id'
    },
    productId: {
      type: DataTypes.STRING(36),
      field: 'product_id'
    },
    imageUrl: {
      type: DataTypes.STRING(500),
      allowNull: false,
      field: 'image_url'
    },
    isPrimary: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_primary'
    },
    position: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'product_images',
    timestamps: false
  });

  return ProductImage; 
}
