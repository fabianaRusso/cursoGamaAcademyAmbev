'use strict'

module.exports = function(app){
    var cadastroController = require('../controllers/cadastroController')

    app.route('/cadastro')
        .get(cadastroController.lista_cadastro)
        .post(cadastroController.adiciona_cadastro)
    
    app.route('/cadastro/:cadastroId')
        .get(cadastroController.lista_cadastro_por_id)
        .put(cadastroController.atualiza_cadastro)
        .delete(cadastroController.remove_livro)
    
    
}