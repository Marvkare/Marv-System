const usersCtrl = {}

usersCtrl.renderUser = (req, res) => {
  req.getConnection((err, conn) => {
    console.log(conn.ConnectionConfig)
    conn.query('SELECT * FROM usuarios', (err, usuarios) => {
     if (err) {
      res.json(err);
     }

     res.render('users', {data: usuarios});
    });
  });
};

usersCtrl.addUser =(req, res )=>{
  const data = req.body;
  req.getConnection((err, connection) =>{
    const query = connection.query('INSERT INTO usuarios set ?', data , (err, usuarios)=>{
      console.log(data, usuarios)
      res.redirect('/users')
    })
  })

}

module.exports = usersCtrl;
