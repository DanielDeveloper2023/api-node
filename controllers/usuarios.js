const {response} = require('express');
const usuariosGet = (req,res=response) =>{
    res.json({
       msg: 'get message - controllador'
    }); 
}

const usuariosPost =(req,res) =>{
    const {nombre,apellido} = req.body;
    res.json({
        msg: 'post message -controller',
        nombre,
        apellido
    });
}
const usuariosPut =(req,res) =>{
    const id = req.params.id;
    res.json({
        msg: 'put message -controller',
        id
    });
}
const usuariosPath =(req,res) =>{
    res.json({
        msg: 'path message -controller'
    });
}
const usuariosDelete =(req,res) =>{
    res.json({
        msg: 'delete message -controller'
    });
}

module.exports ={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPath,
    usuariosDelete
}