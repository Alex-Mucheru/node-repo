
const {readFileSync,writeFileSync}= require('fs')
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')
console.log(first,second);
writeFileSync('./content/subfolder/results1-sync.txt',`Hello world; ${first}, ${second}`)