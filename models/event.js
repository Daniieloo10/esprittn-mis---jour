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
    },
    user:{type:Schema.Types.ObjectId,ref:'user'},
})
var event =mongoose.model('event',eventSchema,'event');
module.exports=event;