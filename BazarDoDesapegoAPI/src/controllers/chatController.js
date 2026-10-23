const pool = require('../config/db');
const { v4: uuidv4 } = require('uuid');

exports.createOrGetConversation = async (req,res)=>{ res.json({ message: 'conversa' }); };
exports.getConversations = async (req,res)=>{ res.json([]); };
exports.getMessages = async (req,res)=>{ res.json([]); };
exports.sendMessage = async (req,res)=>{
  const { conversation_id, content } = req.body;
  try{
    const id = uuidv4();
    await pool.query('INSERT INTO messages (message_id, conversation_id, sender_id, content) VALUES (?,?,?,?)', [id, conversation_id, req.user.user_id, content]);
    res.status(201).json({ message_id: id });
  }catch(err){ res.status(500).json({ error: err.message }); }
};