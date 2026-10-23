const pool = require('../config/db');
const { v4: uuidv4 } = require('uuid');
const { Product, User, ProductImage, Comment, Category } = require('../models');

exports.getAllCategory = async (req,res)=>{

  try{
    const [rows] = await Category.findAll({});
    const v = res.json(rows);
    
  }catch(err){ res.status(500).json({ error: err.message }); }
};

exports.getCategoryByName = async (req,res)=>{
  const name = req.body;
  try{
    const [rows] = await Category.findByPk();
    res.json({...rows[0], images });
  }catch(err){ res.status(500).json({ error: err.message }); }
};


exports.createCategory = async (req,res)=>{
  const {name,slug,incon} = req.body;
  try{
    const category_id = uuidv4();
    await Category.create();

    
    res.status(201).json({ product_id, message: 'Criado com sucesso' });
  }catch(err){ res.status(500).json({ error: err.message }); }
};

exports.deleteProduct = async (req,res)=>{
  try{
    await pool.query('DELETE FROM products WHERE product_id=? AND seller_id=?', [req.params.id, req.user.user_id]);
    res.json({ message: 'Deletado' });
  }catch(err){ res.status(500).json({ error: err.message }); }
};