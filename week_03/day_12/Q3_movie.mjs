import * as readline from 'node:readline/promises'
import fs  from "fs";
import path from "path";
import { stdin as input, stdout as output } from "process";



const rl = readline.createInterface({input, output});
const moviePath = "movie.txt";

const writeData = (path, text) => {
    return fs.writeFileSync(path, text, {encoding: "utf-8"});
}
let movie = "";
// rl.on("line", (input) => {
//     console.log("보고싶은 영화 입력>>", input);
//     rl.close();
// });
// rl.on('close', () => {
//     console.log("movie : ", movie);
//     process.exit();
// })
// writeData(moviePath, answer);

// rl.question('보고싶은 영화 입력>>', (answer) => {
//     movie = answer;
//     rl.close();
// })

// rl.on('close', () => {
//     console.log("movie : ", movie);
//     process.exit();
// })


// rl.on("line", (line) => {
//     console.log("input: ", line);
//     rl.close();
// });
 
// rl.on('close', () => {
//         process.exit();
// })
