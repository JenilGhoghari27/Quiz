const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const queSchema = new Schema({
  quetion : String,
  option  :[String],
  answer  : String,
  catagory : {type: Schema.Types.ObjectId, ref: 'catagory' }
});


const QUESTION = mongoose.model('question', queSchema);

module.exports = QUESTION
