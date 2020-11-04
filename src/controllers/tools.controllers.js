const toolsCtrl = {}

let contador=0
toolsCtrl.renderTools = (req, res) =>{
  res.render('tools')
}

toolsCtrl.contador = (req, res )=>{
  console.log(req.body)
  if(req.body.mas){
    contador++
    console.log(contador)
    res.render('tools',{contador})
  }
  if(req.body.menos){
    contador--
    console.log(contador)
    res.render('tools',{contador})
  }
}

module.exports =  toolsCtrl;
