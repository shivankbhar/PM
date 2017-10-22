let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let releaseSchema = {
    releaseDate:{type:String},
    projects:[{type:Schema.ObjectId, ref:'projects'}],
    teamMember:[{type:String}],
    RFC:{type:String, unique:1},
    scope:{type:String},
    estimatedHours:{type:Number},
    plannedStartDate:{type:Date},
    plannedEndDate:{type:Date},
    actualStartDate:{type:Date},
    actualEndDate:{type:Date},
}

let release = mongoose.model('release', new Schema(releaseSchema));
module.exports =release