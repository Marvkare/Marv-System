var mysql = require('mysql')
const myConnection = require('express-myconnection')
const express = require('express')
const app = express();

app.use(myConnection(mysql,{
  host:'127.0.0.1',
  database:'test',
  user:'root',
  password:''
}, 'single'));

module.exports = app
