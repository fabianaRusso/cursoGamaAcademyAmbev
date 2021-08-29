'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var cadastroSchema = Schema({
    nome:{
        type:String
    },
    profissao:{
        type:String
    },
    dataNascimento:{
        type:String
    },
    estadoCivil:{
        type:String
    },
    sexo:{
        type:String
    },
    endereco:{
        type:String
    },
    bairro:{
        type:String
    },
    cidade:{
        type:String
    },
    cep:{
        type:String
    },
    telefone1:{
        type:String
    },
    telefone2:{
        type:String
    },
    celular:{
        type:String
    },
    contato:{
        type:String
    },
    email:{
        type:String
    },
    identidade:{
        type:String
    },
    cpf:{
        type:String
    },
    veiculo:{
        type:String
    },
    habilitacao:{
        type:String
    },

})

module.exports = mongoose.model('cadastro', cadastroSchema)