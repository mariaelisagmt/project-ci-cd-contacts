/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright IBM Corporation 2020
*/

const contatoService = require('../services/contato.service');

const get = async function(req, res){
    res.send(await contatoService.get( req.params._id));
}

const getAll = async function(req, res){
    res.send(await contatoService.getAll());
}

const insertContato = function(req, res){
    res.send(contatoService.insertContato(req.params.nome, req.params.telefone, req.params.email));
}

module.exports = {
    get,
    getAll,
    insertContato
};