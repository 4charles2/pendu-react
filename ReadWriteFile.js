// import * as fs from 'fs';

// let readLine = require('readline');
var fs = require('fs');


let lineno = 0;
let lignes = [];
const file = fs.readFileSync('score.json')

console.log(file);

// fs.readFile('./score.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })




// const stream = fs.createReadStream('./score').catch(
//     error => console.log(" erreur lors de la creation du stream à partir du fichier score : " + error)
// );
// const nbLigne = 3;
//
// let myInterface = readLine.createInterface({
//     input: stream
// });

// myInterface.on('line', function (line) {
//     lineno++;
//     if(lineno < nbLigne) {
//         lignes.push = line;
//         console.log('Line number ' + lineno + ': ' + line);
//     }else
//         return lignes;
// });

export default function ReadLineFile(file, nbLigne){

}