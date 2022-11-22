const mysql = require('mysql');

//Parametros para conexion a base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'crud_nodejs-master'
});

connection.connect((error)=>{
    if(error){
        console.error('Error de conexion: ' + error);
        return
    }
    console.log('Conexion exitosa');
});

//Exportamos la conexion para poder utilizarla desde otro modulo.
module.exports = connection;
