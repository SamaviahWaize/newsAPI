const mongoose= require('mongoose');
const newsSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    section:String,
    heading:String,
    date:String,
    content:String,
    articleby:String

})
module.exports=mongoose.model('News',newsSchema);