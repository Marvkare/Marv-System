const usersCtrl = {}

usersCtrl.renderUser = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM usuarios', (err, usuarios) => {
     if (err) {
      res.json(err);
     }
    
     res.render('users', {data: usuarios});
    });
  });
};

usersCtrl.addUser =(req, res )=>{
  res.send('usuario añadido')
  console.log( req.body)
  console.log(req.params)
}

module.exports = usersCtrl;
