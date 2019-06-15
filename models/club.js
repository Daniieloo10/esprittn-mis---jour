var mongoose = require('mongoose')

var Schema=mongoose.Schema;
var clubSchema = mongoose.Schema({

    title:String,
    date:Date,
    description :{
        type:String,
        required:false
    },
    url :{
        type:String,
        required:false
    },
    image :{
        type:String,
        required:false
    }
})
var club =mongoose.model('club',userschema,'club');
module.exports=club;