const { connect } = require('./ComidasRepository')
const comidasModel = require('./ComidasSchema')

connect() 

const getAll = async () => {
  return comidasModel.find((error, comidas) => {
    return comidas
  })
}

const getById = async (id) => {
  return comidasModel.findById(
    id,
    (error, comida) => {
      return comida
    }
  ) 
}

const add = (comida) => {
  const novaComida = new comidasModel(comida)
  novaComida.save()  

}

const remove = (id) => {
  comidas.pratosFavoritos = getAll().filter((comida) => {
    return comida.id !== id
  })
}

const update = (id, comida) => {
  return comidasModel.findByIdAndUpdate(
    id,
    {$set: comida},
    {$new: true},
    function(error,comida){
      return comida
    }
  )
  let comidaCadastrada = getAll().find(comida => {
    return comida.id === id
  })

  if(comidaCadastrada === undefined){ 
    return false
  }
  else {
    if(comida.nome !== undefined) {
      comidaCadastrada.nome = comida.nome
    }
    if(comida.descricao !== undefined) {
      comidaCadastrada.descricao = comida.descricao
    }

    return true
  }
}

module.exports = {
  getAll,
  getById,
  add,
  remove,
  update
}