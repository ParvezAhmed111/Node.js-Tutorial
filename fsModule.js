const fs= require('fs');

//fs.readFile
// fs.readFile('file.txt', 'utf8', (err, data)=>{
//     console.log(err, data);
// });

//fs.readFileSync
// const a= fs.readFileSync('file.txt');
// console.log(a);
// console.log(a.toString());

//fs.writeFile
// fs.writeFile('file2.txt', "This is a data", ()=>{
//     console.log("written to the file");
// });

//fs.writeFileSync
const b = fs.writeFileSync('file2.txt', "This is a new data");
console.log(b);
console.log("Finished reading file");