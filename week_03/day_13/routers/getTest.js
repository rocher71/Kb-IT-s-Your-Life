// router 기반으로 코드를 모듈화 하는 방법

const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const bcrypt = require("bcrypt");


router.get('/get_page', (req, res, next) => {
    res.status(200).render('get_page');
});

// express-async-handler 기반으로 비동기 처리하는 방법
// 
const registerMember = asyncHandler(async (req, res) => {
    // console.log(req)
    console.log("req.query : ", req.query);
    let member = req.query;

    // password 암호화
    const hashedPassword = await bcrypt.hash(member.pw, 10);
    member.pw = hashedPassword;
    console.log("member : ", member);
    res.render("result.ejs", {member});
    // res.json(member);
});

router.route("/get_result").get(registerMember);


module.exports = router; // 라우터 던져줘
