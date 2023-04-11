
const express = require("express");
const cors = require('cors');

class Server{

    

    constructor(){

        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();
        this.app.use(cors());
        this.usuariosPath = '/api/usuarios';


        //Rutas de mi aplicacion
        this.routes();

    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    
    routes(){

        this.app.use(this.usuariosPath,require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Click para ejecutar la App http://localhost:${this.port}`);
        });
    }


}
module.exports = Server;