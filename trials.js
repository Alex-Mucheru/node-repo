
const {readFileSync,writeFileSync}= require('fs')
console.log('start');

readFileSync('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result);
})