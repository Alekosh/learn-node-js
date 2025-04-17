import { all } from 'underscore';
import { square, cube } from './math.js';
import * as fs from 'fs';
// import _ from 'underscore';
// import _ from 'lodash';

// Примеры
// console.log(_.chunk(['a', 'b', 'c', 'd'], 2)); // [['a', 'b'], ['c', 'd']]
// console.log(_.capitalize('hello'));           // 'Hello'
// console.log(_.reverse([1, 2, 3]));            // [3, 2, 1]

let obj = {
	'file1.txt': 'text1',
	'file2.txt': 'text2',
	'file3.txt': 'text3',
}
let allText = '';
for(let key in obj){
    allText += `${key}: ${obj[key]}\n`
}
fs.writeFileSync('readme.txt', allText);
// let text = fs.writeFileSync('readme.txt', 'test');
let textResult = fs.readFileSync('readme.txt', 'utf8');
console.log(textResult);
