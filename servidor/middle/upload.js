const multer = require('multer')
const mysql = require('mysql2')

mysql.createPool({
    user: 'root',
    password: '123123',
    host: 'localhost',
    database: 'bancoprojeto'
})

module.exports = (multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) =>{
            cb(null, './public/upload/users')
        },
        filename: (req, file, cb) =>{
            cb(null, file.originalname)
        }
    }),
    fileFilter: (req, file, cb) =>{
        const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg'].find(
            formatoAceito => formatoAceito == file.mimetype
            )
            if(extensaoImg){
                return cb(null, true)
            }
            return cb(null, false)
    }
}))