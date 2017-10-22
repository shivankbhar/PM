let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let projectSchema = {
    projectCode:{type:String, unique:1},
    projectName:{type:String},
    clientManager:{type:String},
    internalManager:{type:String},
    functionalPrimary:{type:String},
    automationPrimary:{type:String},
    productsImpacted:{type:String},
}


let project = mongoose.model('project', new Schema(projectSchema));

module.exports =project