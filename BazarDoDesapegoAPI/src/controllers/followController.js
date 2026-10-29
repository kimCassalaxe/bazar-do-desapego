const pool = require('../config/db');
const { v4: uuidv4 } = require('uuid');
const { Follow } = require('../models');

exports.getAllFollow = async (req,res)=>{
  console.log("dvdfklv")
  try{
    const follows = await Follow.findAll();
    const v = res.json(follows);
    
  }catch(err){ res.status(500).json({ error: err.message }); }
};

exports.getFollowByFollowee = async (req,res)=>{
  const {id}= req.params;
  console.log(id)
  try{
    const follows = await Follow.findAll({where:{followeeId:id}});
    res.json(follows);
  }catch(err){ res.status(500).json({ error: err.message }); }
};


exports.createFollowr = async (req,res)=>{
  const {follower_id,followee_id} = req.body;
  try{
    await Follow.create({follower_id,followee_id});

    
    res.status(201).json({ followee_id, message: 'Criado com sucesso' });
  }catch(err){ res.status(500).json({ error: err.message }); }
};

exports.deleteFollowr = async (req,res)=>{
  const {followee_id,follower_id} = req.body;
  try{
    await Follow.destroy({where:{followee_id:followee_id,follower_id:follower_id}});
    res.json({ message: 'Deletado' });
  }catch(err){ res.status(500).json({ error: err.message }); }
};