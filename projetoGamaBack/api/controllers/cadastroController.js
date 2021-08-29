'use strict'

var mongoose = require('mongoose')



var cadastro = mongoose.model('cadastro')

//GETALL
exports.lista_cadastro = function(req, res){
    try {
        
            cadastro.find({req}, function(err, cadastros){
                
                res.json(cadastros)
            })
            
        }
         catch (error) {
            
            res.send(err)
        }
}

//GETID
exports.lista_cadastro_por_id = function(req, res){
    try {
        
        cadastro.findOne({"_id": req.params.cadastroId}, function(err, cadastro){
            
            res.json(cadastro)
        })
    } catch (error) {
        
        res.send(err)
    }
}

//Post
exports.adiciona_cadastro = function(req, res){
    
    try {
        var novo_cadastro = new cadastro(req.body)
        var cpf = novo_cadastro.cpf;
       
        cadastro.findOne({ "cpf": cpf }, function (err, cadastro) {
            if (cadastro == null) {
                novo_cadastro.save(function (err, cadastro) {
                    if (err) {
                        res.send(err)
                    }
                    res.json({ data: cadastro, error: false })
                })
            }
            else {
                res.json({ data: "CPF já cadastrado!", error: true })
            }
        })
        
    } catch (error) {
        res.send(err)
    }

}

//Putty
exports.atualiza_cadastro = function(req, res){
    try {

        var novo_cadastro = new cadastro(req.body)
        var cpf = novo_cadastro.cpf;
       
        cadastro.findOne({"cpf": cpf }, function(err, cadastro){     
                if(cadastro == null){
                    
                    cadastro.findOneAndUpdate({_id: req.params.cadastroId}, req.body, {new: true}, function(err, cadastro){
                
                        res.json({ data: cadastro, error: false })
                        })
                    
                }
                else{
                    res.json({ data: "CPF já cadastrado!", error: true })
                }
        })
        
    }
    catch (error) {
            
        res.send("Erro ao executar atualiza_cadastro: "+ err)
    }
        
    
}

//DELETE
exports.remove_livro = function(req,res){
    try {
        cadastro.remove({_id: req.params.cadastroId}, function(err, cadastro){
        
            res.json({"Mensagem": "Cadastro deletado com sucesso!"})
        })
    } catch (error) {
            
            res.send("Erro ao executar remove_livro: "+ error)
    }
        
}