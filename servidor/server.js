const express = require('express')
const app = express()
const uploadUser = require('./middle/upload')
const mysql = require('mysql2')
const cors = require('cors')
app.use(cors())
app.use(express.json())



app.post('/upload-image',uploadUser.single('image'),  async (req,res)=>{
    if(req.file){
        return res.json({
            erro: false,
            mensagem: 'upload realizado com sucesso'
        })
    }

    return res.status(400).json({
        erro: true,
        mensagem: 'numdeu :('
    })

})

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123123',
    database: 'bancoprojeto'
})
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

app.post("/upload", (req,res)=>{

    const values = [
        
        getRandomInt(500000) ,
        getRandomInt(500000),
        getRandomInt(500000),
        getRandomInt(500000),
        req.body.imagem
    
    ]

    console.log(values[4])
    let SQL = "insert into usuarios values (?)"

    db.query(SQL, [values], (err,result)=>{
        console.log(err)
    })
})


app.get('/foto-usuario/', (req,res)=>{

    let ID = req.query.id

    let SQL = 'SELECT CONVERT(`fotoPerfil` USING utf8) FROM `usuarios` WHERE id = ?'

    db.query(SQL, ID, (err, result) =>{
        if(err)console.log(err)
        else res.send(result)
    })
})

app.listen(3003, ()=>{
    console.log('servidor rodando')
})