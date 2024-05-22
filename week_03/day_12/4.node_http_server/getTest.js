
const path = require('path');
const fs = require('fs');
const url = require('url');
// get horm html을 응답하는 메소드
const getTestPage = (req, res) => {
    // get_page.html을 전송하는 코드
    res.setHeader('Content-Type', 'text/html');
    const htmlPath = path.join(__dirname, 'assets', 'get_page.html');
    const rs = fs.createReadStream(htmlPath, 'utf-8');
    rs.pipe(res);
}

// 파라미터를 받아 JSON으로 만들어주는 메소드
const getTestResult = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    console.log(req.url);
    const urlObj = url.parse(req.url, true);
    res.end(JSON.stringify(urlObj.query));
}

module.exports = {getTestPage, getTestResult};
