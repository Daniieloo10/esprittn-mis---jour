var mongoose = require('mongoose')

var Schema=mongoose.Schema;
var eventSchema = mongoose.Schema({

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
var event =mongoose.model('event',userschema,'event');
module.exports=event;