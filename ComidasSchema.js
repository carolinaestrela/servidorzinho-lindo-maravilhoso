const mongoose = require ("mongoose");

var Schema = mongoose.Schema;
var ComidasSchema=newSchema = new Schema ({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true },
    nome: { type: String, required: true},
    descricao: {type:String}
})
const comidasModel = mongoose.model ("comidas", ComidasSchema);

module.exports=comidasModel;