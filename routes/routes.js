const router = require('express')();

router.post('/factorial', (req, res) => {
    //Factorial logic goes here
})

router.post('/palindrome', (req, res) => {
    //Palindrome logic goes here
})


//checking Neon Number
router.get('/neon/:num', (req, res) => {
    let num = Number.parseInt(req.params.num);
    let square = num * num
    let sum = 0;
    while (square != 0) {
        sum = sum + square % 10;
        square = Math.floor(square / 10);
    }

    if (sum === num) {
        return res.json({
            "isNeon": true
        })
    } else {
        return res.json({
            "isNeon": false
        })
    }

});
module.exports = router;