require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));

// ROTAS
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/products', require('./src/routes/products'));
app.use('/api/category', require('./src/routes/category'));
app.use('/api/social', require('./src/routes/social'));
app.use('/api/chat', require('./src/routes/chat'));

app.get('/', (req,res)=>{
  res.json({
    message: '🔥 API Bazar Desapego - MySQL Online!',
    db: 'MySQL'
  });
});

app.get('/api/health', async (req,res)=>{
  try{
    console.log("estamos aqui1");
    const pool = require('./src/config/db');
    const [rows] = await pool.query('SELECT COUNT(*) as total FROM users');
    console.log("estamos");
    console.log(rows);
    res.json({ status:'ok', db:'MySQL conectado', total_users: rows[0].total });
  }catch(e){
    res.status(500).json({ status:'erro', error: e.message });
  }
});

module.exports = app;