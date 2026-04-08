const multer = require("multer");
const path=require('path')


const storage1 =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },    
    filename:function(req,file,cb){
    const image=path.extname(file.originalname).toLowerCase();
    if(image !=='.jpeg' && image!=='.png' && image!=='.jpg' ){
        return cb(new Error('only jpeg and png allowed'))
    }
    cb(null,file.originalname+'-'+Date.now()+image)
    }
})

const manish=multer({storage:storage1})
module.exports=manish