const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
  //const header2 = req.headers.authorization;
  const header = req.headers.token;
  if(!header){return res.status(401).json({ error: 'Token não fornecido' });} 
  const token = header.split(' ')[1];

  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log(req.user);

    next();
  }catch(err){
    return res.status(401).json({ error: 'Token inválido' });
  }
};