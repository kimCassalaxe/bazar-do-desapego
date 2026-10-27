const pool = require('../config/db');
const { v4: uuidv4 } = require('uuid');
const { Product, User, ProductImage, Comment } = require('../models');

exports.getFeed = async (req,res)=>{
  console.log("entre no post111");
 
  try{
    const [rowsProduct] = await Product.findAll({
      include:[
        {
          model: User,
          as: 'seller',
          attributes: [['username', 'user_name'], ['avatar_url', 'user_avatar']]
        },
        {
          model:ProductImage,
          as:'images',
          attributes:[['image_url','imageUrl']]

        },
        {
          model:Comment,
          as:'comments',
          include: [
            {
              model: User,
              as: 'author',
              attributes: [
                ['user_id', 'comment_user_id'],
                ['username', 'comment_user_name'],
                ['avatar_url', 'comment_user_avatar']
              ]
            }
          ]
        }
      ] 
    });
    
    const v = res.json(rowsProduct);
    
  }catch(err){ res.status(500).json({ error: err.message }); }
};

exports.getProductById = async (req,res)=>{
  try{
    const [rows] = await pool.query(`SELECT p.*, u.username, u.avatar_url, u.whatsapp FROM products p JOIN users u ON p.seller_id=u.user_id WHERE p.product_id=?`, [req.params.id]);
    if(rows.length===0) return res.status(404).json({ error: 'Produto não encontrado' });
    const [images] = await pool.query('SELECT * FROM product_images WHERE product_id=?', [req.params.id]);
    await pool.query('UPDATE products SET views_count = views_count + 1 WHERE product_id=?', [req.params.id]);
    res.json({...rows[0], images });
  }catch(err){ res.status(500).json({ error: err.message }); }
};

exports.searchProducts = async (req,res)=>{
  const { q } = req.query;
  try{
    const [rows] = await pool.query(`SELECT * FROM products WHERE title LIKE? AND status='ativo' LIMIT 20`, [`%${q}%`]);
    res.json(rows);
  }catch(err){ res.status(500).json({ error: err.message }); }
};

exports.createProduct = async (req,res)=>{
  const { title, description, price, category_id, city, images } = req.body;
  try{
    const product_id = uuidv4();
    await pool.query(`INSERT INTO products (product_id, seller_id, category_id, title, description, price, city) VALUES (?,?,?,?,?,?,?)`,
      [product_id, req.user.user_id, category_id, title, description, price, city || 'Luanda']);

    if(images && images.length > 0){
      for(let i=0; i<images.length; i++){
        await pool.query(`INSERT INTO product_images (image_id, product_id, image_url, is_primary, position) VALUES (?,?,?,?,?)`,
          [uuidv4(), product_id, images[i], i===0, i]);
      }
    }
    res.status(201).json({ product_id, message: 'Criado com sucesso' });
  }catch(err){ res.status(500).json({ error: err.message }); }
};

exports.deleteProduct = async (req,res)=>{
  try{
    await pool.query('DELETE FROM products WHERE product_id=? AND seller_id=?', [req.params.id, req.user.user_id]);
    res.json({ message: 'Deletado' });
  }catch(err){ res.status(500).json({ error: err.message }); }
};