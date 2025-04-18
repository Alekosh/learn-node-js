import { all } from 'underscore';
import { square, cube } from './math.js';
import * as fs from 'fs';
// import _ from 'underscore';
// import _ from 'lodash';

// Примеры
// console.log(_.chunk(['a', 'b', 'c', 'd'], 2)); // [['a', 'b'], ['c', 'd']]
// console.log(_.capitalize('hello'));           // 'Hello'
// console.log(_.reverse([1, 2, 3]));            // [3, 2, 1]

// let obj = {
// 	'file1.txt': 'text1',
// 	'file2.txt': 'text2',
// 	'file3.txt': 'text3',
// }
// let allText = '';
// for(let key in obj){
//     allText += `${key}: ${obj[key]}\n`
// }
// fs.writeFileSync('readme.txt', allText);
// // let text = fs.writeFileSync('readme.txt', 'test');
// let textResult = fs.readFileSync('readme.txt', 'utf8');
// console.log(textResult);
// ==========================
// const filePath = './readme.txt';

// setInterval(() => {
//     fs.appendFile(filePath, '!', (err) => {
//         if (err) {
//             console.error('Ошибка при записи в файл:', err);
//         } else {
//             console.log('Добавлен "!" в файл');
            
//         }
//     });
// }, 2000);
// ==================
// let text = fs.readFileSync('readme.txt', 'utf8');
// fs.writeFileSync('readme.txt', text + '!');
// ============== old ↓
// let num1 = parseInt(fs.readFileSync('./nums/num1.txt', 'utf8'));
// let num2 = parseInt(fs.readFileSync('./nums/num2.txt', 'utf8'));
// let num3 = parseInt(fs.readFileSync('./nums/num3.txt', 'utf8'));
// let sum = num1 + num2 + num3;
// fs.writeFileSync('./nums/result.txt', sum.toString());
// =========================== new ↑
let files = ['num1.txt', 'num2.txt', 'num3.txt'];
let sum = files.reduce((acc, file) => {
  let content = fs.readFileSync(`./nums/${file}`, 'utf8');
  return acc + parseInt(content);
}, 0);

fs.writeFileSync('./nums/result.txt', sum.toString());