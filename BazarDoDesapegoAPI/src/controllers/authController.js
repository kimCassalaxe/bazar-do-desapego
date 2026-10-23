const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const prisma = require('../config/db');
const { User } = require('../models');


exports.register = async (req,res)=>{
  const { username, email, password, display_name, city } = req.body;
  if(!username ||!email ||!password) return res.status(400).json({ error: 'Faltam campos' });
    
  try{
    const existing = await User.findOne({ where: { email } });
    if (existing) return res.status(400).json({ error: 'Email já cadastrado' });

    const hash = await bcrypt.hash(password, 10);
    const user_id = uuidv4();
    await User.create({userId:user_id, username:username, email: email, passwordHash:hash, displayName:display_name, city:city || 'Luanda'});
    const token = jwt.sign({ user_id, username }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ token, user: { user_id, username, email } });
  }catch(err){
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req,res)=>{
  const { email, password } = req.body;
  console.log(email, password);
  try{
    //testando com email fixo
    const user = await User.findOne({where:{email:'mauro@teste.com'}});
    if(!user) return res.status(404).json({ error: 'Usuário não encontrado' });
    
    const valid = await bcrypt.compare(password, user.passwordHash);
    
    if(!valid) return res.status(401).json({ error: 'Senha incorreta' });
    const token = jwt.sign({ user_id: user.userId, username: user.username }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user });
  }catch(err){ res.status(500).json({ error: err.message }); }
};

exports.getAllUsers = async (req,res)=>{
  try{
    const users = await User.findAll();
    res.json(users);
  }catch(err){ res.status(500).json({ error: err.message }); }
};
