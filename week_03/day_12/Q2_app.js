
const path = require('path');
const fs = require('fs');

const readData = (path) => {
    return fs.readFileSync(path, {encoding: "utf-8"});
}

const writeData = (path, text) => {
    return fs.writeFileSync(path, text, {encoding: "utf-8"});
}

const mePath = "Q2_me.txt";
const youPath = "Q2_you.txt";
const youText = "************************\n나는 별이야\n제일 빛나\n************************";

const meReadData = readData(mePath);
console.log("me.txt\n" , meReadData);

if(fs.existsSync(mePath)){
    writeData(youPath, meReadData + youText);
}

console.log("you.txt\n" , readData(youPath));
