var mongoose = require('mongoose')

var Schema=mongoose.Schema;
var pressSchema = mongoose.Schema({

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
var press =mongoose.model('press',userschema,'press');
module.exports=press;