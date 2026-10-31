const pool = require('../config/db');
const { v4: uuidv4 } = require('uuid');

exports.toggleLike = async (req,res)=>{
  const { product_id } = req.body;
  try{
    const [exists] = await pool.query('SELECT * FROM likes WHERE user_id=? AND product_id=?', [req.user.user_id, product_id]);
    if(exists.length>0){
      await pool.query('DELETE FROM likes WHERE user_id=? AND product_id=?', [req.user.user_id, product_id]);
      await pool.query('UPDATE products SET likes_count = likes_count -1 WHERE product_id=?', [product_id]);
      return res.json({ liked: false });
    }else{
      await pool.query('INSERT INTO likes (user_id, product_id) VALUES (?,?)', [req.user.user_id, product_id]);
      await pool.query('UPDATE products SET likes_count = likes_count +1 WHERE product_id=?', [product_id]);
      return res.json({ liked: true });
    }
  }catch(err){ res.status(500).json({ error: err.message }); }
};

exports.toggleFollow = async (req,res)=>{ res.json({ message: 'follow ok' }); };
exports.addComment = async (req,res)=>{
  const { product_id, comment_text } = req.body;
  try{
    const id = uuidv4();
    await pool.query('INSERT INTO comments (comment_id, user_id, product_id, comment_text) VALUES (?,?,?,?)', [id, req.user.user_id, product_id, comment_text]);
    await pool.query('UPDATE products SET comments_count = comments_count +1 WHERE product_id=?', [product_id]);
    res.status(201).json({ comment_id: id });
  }catch(err){ res.status(500).json({ error: err.message }); }
};
exports.getComments = async (req,res)=>{
  const [rows] = await pool.query(`SELECT c.*, u.username, u.avatar_url FROM comments c JOIN users u ON c.user_id=u.user_id WHERE c.product_id=? ORDER BY c.created_at DESC`, [req.params.product_id]);
  res.json(rows);
};
exports.getNotifications = async (req,res)=>{ res.json([]); };